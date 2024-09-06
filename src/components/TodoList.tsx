import React, { useState } from 'react';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
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
  
  return (
    <ul className="container">
      {
        list.map((item, i) => {
          return(
            <TodoItem key={item.id} text={item.text} completed={item.completed}/>
          )
        })
      }
      
    </ul>
  );
};

export default TodoList;