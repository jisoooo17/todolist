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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTxt(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void=>{
    e.preventDefault();
    const newTodo: Todo = {
      id: Date.now(),
      text: inputTxt,
      completed: false,
    }

    setList([...list, newTodo]);
    setInputTxt("");
  }
  
  return (
    <div>
      <ul className="container">
        {
          list.map((item, i) => {
            return(
              <TodoItem key={item.id} text={item.text} completed={item.completed}/>
            )
          })
        }
      </ul>
      <CreateTodo onChange={handleInputChange} onSubmit={handleSubmit} inputTxt={inputTxt}/>
    </div>
  );
};

export default TodoList;