import React, { useState } from 'react';
import { Button, Input } from 'antd';
import {Todo} from "./TodoList";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onClkDel(id: number): void;
  onClkUpdate(updatedTodoItem: Todo): void;
}

const TodoItem = ({id, text, completed, onClkDel, onClkUpdate}: TodoItemProps) => { //  props를 타입에 맞게 지정
  // 수정 여부
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [updatedTxt, setUpdatedTxt] = useState<string>(text);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTxt(e.target.value);
  };

  const inputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedTodoItem = {
      id: id,
      text: updatedTxt,
      completed: completed,
    };
    onClkUpdate(updatedTodoItem);
    setIsUpdating(false);
  };

  return (
    <li className="list">
      {
        !isUpdating ? (
          <div className="cont">
            {completed ? <Button type="primary">완료됨</Button> : <Button type="primary">완료하기</Button>}
            <p className="txt">{text}</p>
            <div className="btn-w">
              <Button htmlType="button" className="btn-edit" onClick={()=> setIsUpdating(true)}>수정</Button>
              <Button htmlType="button" className="btn-del" onClick={()=> onClkDel(id)}>삭제</Button>
            </div>
          </div>
        ) : (
          <div className="cont">
            <form onSubmit={inputSubmit}>
              <div className="input-w">
                <Input type="text" value={updatedTxt} onChange={inputChange} />
                <div className="btn-w">
                  <Button htmlType="submit" className="btn-confirm" onClick={()=> setIsUpdating(true)}>확인</Button>
                  <Button htmlType="button" className="btn-cancel" onClick={()=> setIsUpdating(false)}>취소</Button>
                </div>
              </div>
            </form>
          </div>
        )
      } 
    </li>
  );
};

export default TodoItem;