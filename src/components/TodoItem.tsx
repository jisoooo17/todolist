import { Button, Input } from 'antd';
import React from 'react';

interface TodoItem {
  text: string;
  completed: boolean;
}

const TodoItem = ({text, completed}: TodoItem) => { //  props를 타입에 맞게 지정
  return (
    <li className="list">
      {completed ? <Button type="primary">완료됨</Button> : <Button type="primary">완료하기</Button>}
      <p className="txt">{text}</p>
      <div className="btn-w">
        <Button htmlType="button" className="btn-adit">수정</Button>
        <Button htmlType="button" className="btn-del">삭제</Button>
      </div>
    </li>
  );
};

export default TodoItem;