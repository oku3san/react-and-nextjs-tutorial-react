import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Rect from './Rect';

const App = (props: any) => {
  let input = ''

  const [title, setTitle] = useState('input form')
  const [message, setMessage] = useState('type your name')

  const doChange = (event: any) => {
    input = event.target.value
  }

  const doSubmit = (event: any) => {
    console.log('aaa')
    setTitle('send form')
    setMessage('Hello, ' + input + '!!')
    event.preventDefault()
  }

  return (
    <>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4>{title}</h4>
        <p className="card h5 p-3">{message}</p>
        <div className="alert alert-primary mt-3">
          <form onSubmit={doSubmit}>
            <div className="form-group">
              <label>Message:</label>
              <input type="text" className="form-control" onChange={doChange} />
            </div>
            <input type="submit" className="btn btn-primary" value="Click" />
          </form>
        </div>
      </div>
    </>
  )
}

export default App;
