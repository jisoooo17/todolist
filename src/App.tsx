import React, { useEffect, useState } from 'react';
import './App.css';
import { Button, Input } from 'antd';
import TodoList from './components/TodoList';

function App() {
  

  return (
    <div className="App">
      <div className="wrap">
        <div className="list-area">
          <TodoList/>

        </div>

        <div className="input-area">
          <div className="input-w">
            {/* <input type="text" placeholder="할 일을 입력하세요." /> */}
            <Input placeholder="Basic usage" />
            <Button type="primary" className="btn-register">등록</Button>
          </div>
        </div>
      </div>

    </div>



  );
}





export default App;
