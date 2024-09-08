import React, { useState } from 'react';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [inputTxt, setInputTxt] = useState("");
  const [list, setList] = useState<Todo[]>([
    {
      id: 1,
      text: "할 일1",
      completed: false,
    },
    {
      id: 2,
      text: "할 일2",
      completed: false,
    }
  ]);

   // 입력 필드에 텍스트가 변경될 때 호출되는 함수
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTxt(e.target.value);
  }

  // 리스트 추가할 때 호출되는 함수
  const inputSubmit = (e: React.FormEvent<HTMLFormElement>): void=>{
    e.preventDefault();

    // 새로운 할 일 항목 생성
    const newTodo: Todo = {
      id: Date.now(), // 현재 시간을 기반으로 고유 ID 생성
      text: inputTxt, // 입력된 텍스트를 사용
      completed: false,
    }

    setList([...list, newTodo]);
    setInputTxt("");
  }


  // 리스트 삭제
  const listDelete = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  }

  // 리스트 수정
  const listEdit = (newTodo: Todo): void => { // newTodo는 새롭게 입력한 값
    const newTodoList = list.map((item)=>{

      if (item.id === newTodo.id){ // id값이 같으면 새롭게 입력한 값으로 return
        return newTodo;
      } else { // 그 외에는 기존 값 return
        return item
      }
    });
    setList(newTodoList);
  }
  
  return (
    <div>
      <ul className="container">
        {
          list.map((item, i) => {
            return(
              <TodoItem key={item.id} id={item.id} text={item.text} completed={item.completed} onClkDel={listDelete}/>
            )
          })
        }
      </ul>
      <CreateTodo onChange={inputChange} onSubmit={inputSubmit} inputTxt={inputTxt}/>
    </div>
  );
};

export default TodoList;