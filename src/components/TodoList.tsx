import React, { useState } from 'react';
import { Button, Input } from 'antd';

const TodoList = () => {
  interface TodoList {
    id: number;
    text: string;
    completed: boolean;
  }

  const [list, setList] = useState<TodoList[]>([
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
            <li className="list">
              <Button type="primary">완료</Button>
              <p className="txt">할 일</p>
              <div className="btn-w">
                <Button htmlType="button" className="btn-adit">수정</Button>
                <Button htmlType="button" className="btn-del">삭제</Button>
              </div>
            </li>
          )
        })
      }
      
    </ul>
  );
};

export default TodoList;