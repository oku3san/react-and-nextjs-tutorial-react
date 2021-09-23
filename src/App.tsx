import React, {useEffect, useState} from 'react';
import './App.css';

const useCounter = (): any => {
  const [num, setNum] = useState(0)
  const count = () => {
    setNum(num + 1)
  }
  return [num, count]
}

const AlertMessage = (props: any) => {
  const [counter, plus] = useCounter()
  return (
    <>
      <div className="alert alert-primary h5 text-primary">
        <h5>count: {counter} .</h5>
        <button onClick={plus} className="btn btn-primary">count</button>
      </div>
    </>
  )
}

const App = (props: any) => {

  return (
    <>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hook sample</h4>
        <AlertMessage />
      </div>
    </>
  )
}

export default App;
