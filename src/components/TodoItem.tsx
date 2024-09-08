import { Button, Input } from 'antd';
import React from 'react';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  onClkDel(id: number): void;
}

const TodoItem = ({id, text, completed, onClkDel}: TodoItemProps) => { //  props를 타입에 맞게 지정
  return (
    <li className="list">
      {completed ? <Button type="primary">완료됨</Button> : <Button type="primary">완료하기</Button>}
      <p className="txt">{text}</p>
      <div className="btn-w">
        <Button htmlType="button" className="btn-adit">수정</Button>
        <Button htmlType="button" className="btn-del" onClick={()=> onClkDel(id)}>삭제</Button>
      </div>
    </li>
  );
};

export default TodoItem;