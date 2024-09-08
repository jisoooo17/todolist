import React, { useState } from 'react';
import { Button, Input } from 'antd';
import {Todo} from "./TodoList";
// import {
//   AiOutlineEdit,
//   AiOutlineDelete,
//   AiOutlineCheck,
//   AiOutlineClose,
// } from "react-icons/ai";
import { AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineCheck,
  AiOutlineClose, } from "react-icons/ai";


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

  const listComplete = () => {
    const updatedTodoItem = {
      id: id,
      text: text,
      completed: !completed,
    };

    onClkUpdate(updatedTodoItem);
  }

  return (
    <li className="list">
      {
        !isUpdating ? (
          <div className="cont">
            <Button htmlType="button" onClick={listComplete}>
              {completed ? "✔" : null}
            </Button>

            <p className="txt" style={{textDecoration: completed ? "line-through" : "none"}}>{text}</p>
            <div className="btn-w">
              <Button htmlType="button" className="btn-update" onClick={()=> setIsUpdating(true)}><AiOutlineEdit size="17" />수정</Button>
              
              <Button htmlType="button" className="btn-del" onClick={()=> onClkDel(id)}><AiOutlineDelete size="17" />삭제</Button>
            </div>
          </div>
        ) : (
          <div className="cont">
            <Button htmlType="button" onClick={listComplete}>
              {completed ? "✔" : null}
            </Button>

            <form onSubmit={inputSubmit}>
              <div className="input-w">
                <Input type="text" value={updatedTxt} onChange={inputChange} />
                <div className="btn-w">
                  <Button htmlType="submit" className="btn-confirm" onClick={()=> setIsUpdating(true)}><AiOutlineCheck size="17" />확인</Button>
                  <Button htmlType="button" className="btn-cancel" onClick={()=> setIsUpdating(false)}><AiOutlineClose size="17" />취소</Button>
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