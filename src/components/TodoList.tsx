import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  // 기본값 설정
  const initialTodos: Todo[] = [
    {
      id: 1,
      text: "영어 단어 외우기",
      completed: false,
    },
    {
      id: 2,
      text: "강아지 산책하기",
      completed: false,
    }
  ];

  // 로컬스토리지에서 데이터를 가져오거나 기본값으로 초기화
  const getSavedTodos = () => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (error) {
        console.error(error);
        return initialTodos;
      }
    } else {
      return initialTodos;
    }
  };

  // 상태 변수 초기화
  const [list, setList] = useState<Todo[]>(getSavedTodos);
  const [inputTxt, setInputTxt] = useState("");

  // 리스트를 로컬스토리지에 저장하는 함수
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list));
  }, [list]);

  // 입력 필드에 텍스트가 변경될 때 호출되는 함수
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTxt(e.target.value);
  };

  // 리스트 추가할 때 호출되는 함수
  const inputSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // 새로운 할 일 항목 생성
    const newTodo: Todo = {
      id: Date.now(), // 현재 시간을 기반으로 고유 ID 생성
      text: inputTxt, // 입력된 텍스트를 사용
      completed: false,
    };

    setList([...list, newTodo]);
    setInputTxt("");
  };

  // 리스트 삭제
  const listDelete = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  // 리스트 수정
  const listUpdate = (newTodo: Todo): void => {
    const newTodoList = list.map((item) => {
      if (item.id === newTodo.id) {
        return newTodo;
      } else {
        return item;
      }
    });
    setList(newTodoList);
  };

  return (
    <div>
      <h3>To do List</h3>
      <ul className="container">
        {
          list.map((item) => {
            return (
              <TodoItem key={item.id} id={item.id} text={item.text} completed={item.completed} onClkDel={listDelete} onClkUpdate={listUpdate} />
            )
          })
        }
      </ul>
      <CreateTodo onChange={inputChange} onSubmit={inputSubmit} inputTxt={inputTxt} />
    </div>
  );
};

export default TodoList;
