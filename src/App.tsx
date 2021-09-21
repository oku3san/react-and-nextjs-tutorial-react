import React from 'react';
import './App.css';

const AlertMessage = () => {
  return (
    <div className="alert alert-primary h5 text-primary">
      This is Alert message
    </div>
  )
}

const CardMessage = () => {
  return (
    <div className="card p-3 h5 border-primary text-center">
      This is Card message
    </div>
  )
}

const App = (props: any) => {

  return (
    <>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hook sample</h4>
        <AlertMessage />
        <CardMessage />
      </div>
    </>
  )
}

export default App;
