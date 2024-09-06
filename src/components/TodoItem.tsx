import { Button, Input } from 'antd';
import React from 'react';

interface TodoItem {
  text: string;
  completed: boolean;
}

const TodoItem = ({text, completed}: TodoItem) => {
  return (
    <li className="list">
      <Button type="primary">완료</Button>
      <p className="txt">할 일</p>
      <div className="btn-w">
        <Button htmlType="button" className="btn-adit">수정</Button>
        <Button htmlType="button" className="btn-del">삭제</Button>
      </div>
    </li>
  );
};

export default TodoItem;