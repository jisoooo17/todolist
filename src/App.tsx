import React from 'react';
import './App.css';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="list-area">
          <ul className="container">
            <li className="list">
              <Button type="primary">완료</Button>
              <p className="txt">할 일</p>
              <div className="btn-w">
                <Button htmlType="button" className="btn-adit">수정</Button>
                <Button htmlType="button" className="btn-del">삭제</Button>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="input-area">
          <div className="input-w">
            <input type="text" placeholder="할 일을 입력하세요." />
            <Button type="primary" className="btn-register">등록</Button>
          </div>
        </div>
      </div>

    </div>



  );
}


export default App;
