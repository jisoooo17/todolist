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

        
      </div>

    </div>



  );
}





export default App;
