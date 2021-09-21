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

  const [msg] = useState('aiueo')

  return (
    <>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hook sample</h4>
        <AlertMessage message={msg} />
        <CardMessage message={msg} />
      </div>
    </>
  )
}

export default App;
