import React, {useState} from 'react';
import './App.css';

const AlertMessage = (props: any) => {
  return (
    <div className="alert alert-primary h5 text-primary">
      {props.message}
    </div>
  )
}

const CardMessage = (props: any) => {
  return (
    <div className="card p-3 h5 border-primary text-center">
      {props.message}
    </div>
  )
}

const App = (props: any) => {

  const [msg, setMsg] = useState('aiueo')

  const doAction = () => {
    let res = window.prompt('type your name')
    setMsg(`Hello, ${res} !!`)
  }

  return (
    <>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hook sample</h4>
        <AlertMessage message={msg} />
        <CardMessage message={msg} />
        <div className="text-center">
          <button onClick={doAction} className="btn btn-primary">
            Click me
          </button>
        </div>
      </div>
    </>
  )
}

export default App;
