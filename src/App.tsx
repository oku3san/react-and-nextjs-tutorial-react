import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Rect from './Rect';

const App = (props: any) => {

  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)

  const clickFunc = () => {
    setCount(count + 1)
  }

  const changeFlag = (event: any) => {
    setFlag(event.target.checked)
  }

  return (
    <>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        {flag ?
          <div className="alert alert-primary text-center">
            <p className="h5">click: {count} times</p>
            <div>
              <button className="btn btn-primary" onClick={clickFunc}>Click me</button>
            </div>
          </div>
        :
          <div className="alert alert-primary text-center">
            <p className="h2">click: {count} times</p>
            <div>
              <button className="btn btn-primary" onClick={clickFunc}>Click me</button>
            </div>
          </div>
        }
        <div className="form-group h6 text-center pt-3">
          <input type="checkbox" className="form-check-input" id="check1" onChange={changeFlag} />
          <label className="form-check-label" htmlFor="check1">
            Change form style
          </label>
        </div>
      </div>
    </>
  )
}

export default App;
