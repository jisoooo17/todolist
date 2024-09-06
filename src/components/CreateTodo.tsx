import React from 'react';
import { Button, Input } from 'antd';

const CreateTodo = () => {
  return (
    <div className="input-area">
      <div className="input-w">
        {/* <input type="text" placeholder="할 일을 입력하세요." /> */}
        <Input placeholder="Basic usage" />
        <Button type="primary" className="btn-register">등록</Button>
      </div>
    </div>
  );
};

export default CreateTodo;