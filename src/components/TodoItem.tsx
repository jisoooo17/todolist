import React, { useState } from 'react';
import { Button, Input } from 'antd';
import {Todo} from "./TodoList";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCheck, AiOutlineClose, } from "react-icons/ai";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onClkDel(id: number): void;
  onClkUpdate(updatedTodoItem: Todo): void;
}

const TodoItem = ({id, text, completed, onClkDel, onClkUpdate}: TodoItemProps) => {
  const [isUpdating, setIsUpdating] = useState<boolean>(false); // 수정 상태 관리
  const [updatedTxt, setUpdatedTxt] = useState<string>(text); // 수정할 텍스트 관리

   // 입력 필드의 텍스트 변경 처리 함수
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTxt(e.target.value);
  };

   // 폼 제출 시 호출되는 함수
  const inputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

     // 업데이트된 할 일 항목 객체 생성
    const updatedTodoItem = {
      id: id,
      text: updatedTxt,
      completed: completed,
    };

    onClkUpdate(updatedTodoItem);
    setIsUpdating(false);
  };

  // 할 일 완료 상태 토글 함수
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
            <Button htmlType="button" className="btn-complete" onClick={listComplete}>
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
            <Button htmlType="button" className="btn-complete" onClick={listComplete}>
              {completed ? "✔" : null}
            </Button>

            <form onSubmit={inputSubmit}>
              <div className="input-w">
                <Input type="text" className="todo-input" value={updatedTxt} onChange={inputChange} />
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