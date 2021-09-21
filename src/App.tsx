import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Rect from './Rect';

const App = (props: any) => {
  let input = ''

  const [title, setTitle] = useState('input form')
  const [message, setMessage] = useState('type your name')
  const [max, setMax] = useState(10)

  const doCheck = (event: any) => {
    alert(`${event.target.value} は長すぎます。(最大 ${max} 文字)`)
  }

  return (
    <>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4>{title}</h4>
        <Message maxlength={max} onCheck={doCheck} />
      </div>
    </>
  )
}

const Message = (props: any) => {

  const li: any = {
    fontSize: "14pt",
    fontWeight: "bold",
    color: "#090",
  }

  const doChange = (event: any) => {
    if (event.target.value.length > props.maxlength) {
      props.onCheck(event)
      event.target.value.substr(0, props.maxlength)
    }
  }

  return (
    <>
      <div className="form-group">
        <label>input:</label>
        <input type="text" className="form-control" onChange={doChange} />
      </div>
    </>
  )

}

export default App;
