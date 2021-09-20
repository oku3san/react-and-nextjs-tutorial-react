import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Rect from './Rect';

function App(props: any) {

  const [msg, setMsg] = useState('Count start')
  const [count, setCount] = useState(0)

  // setInterval(() => {
  //   setCount(count + 1)
  //   setMsg("[count: " + count + " ]")
  // }, 1000)

  const doAction = () => {
    setCount(count + 1)
    setMsg("[count: " + count + " ]")
  }

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Count number</p>
        <p className="alert alert-warning">{msg}</p>
        <button onClick={() => doAction()}>
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
