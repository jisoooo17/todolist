import React from 'react';
import { Button, Input } from 'antd';
interface CreateTodoProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>) :void;
  inputTxt: string;
}

const CreateTodo = ({onChange, onSubmit, inputTxt}: CreateTodoProps) => {

  return (
    <div className="input-area">
      <form onSubmit={onSubmit}>
        <div className="input-w">
          <Input type="text" value={inputTxt} onChange={onChange}  placeholder="할 일을 입력하세요." />
          <Button htmlType="submit" type="primary" className="btn-register">등록</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;