import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Rect from './Rect';

let data = {
  title: 'React-Context',
  message: 'this is sample message'
}

const SampleContext = React.createContext(data)

const App = (props: any) => {

  let newdata = {
    title: 'new React-Context',
    message: 'new this is sample message'
  }

  return (
    <>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <Title />
        <Message />
        <hr />
        <SampleContext.Provider value={newdata}>
          <Title />
          <Message />
        </SampleContext.Provider>
        <hr />
        <Title />
        <Message />
      </div>
    </>
  )
}

const Title = (props: any) => {
  const data: any = React.useContext(SampleContext)

  return (
    <>
      <div className="card p-2 my-3">
        <h2>{data.title}</h2>
      </div>
    </>
  )
}

const Message = (props: any) => {
  const data: any = React.useContext(SampleContext)

  return (
    <>
      <div className="alert alert-primary">
        <p>{data.message}</p>
      </div>
    </>
  )
}

export default App;
