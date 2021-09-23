import React, {useEffect, useState} from 'react';
import './App.css';

const total = (a: any) => {
  let re = 0
  for (let i = 0; i <= a; i++) {
    re += i
  }
  return re
}

const tax = (a: any) => {
  return Math.floor(a * 1.1)
}

const useCalc = (num= 0, func = (a: any) =>{return a}):any => {
  const [msg, setMsg]: any = useState(null)
  const setValue = (p: any) => {
    let res = func(p)
    setMsg(<p className="h5">※ {p} の結果は {res} です</p>)
  }
  return [msg, setValue]
}

const PlainMessage = (props: any) => {
  const [msg, setCalc] = useCalc()
  const onChange = (event: any) => {
    setCalc(event.target.value)
  }
  return (
    <>
      <div className="p-3 h5">
        <h5>{msg}</h5>
        <input type="number" onChange={onChange} className="form-control" />
      </div>
    </>
  )
}

const AlertMessage = (props: any) => {

  const [msg, setCalc] = useCalc(0, total)

  const onChange = (event: any) => {
    setCalc(event.target.value)
  }
  return (
    <>
      <div className="alert alert-primary h5 text-primary">
        <h5>{msg}</h5>
        <input type="number" className="form-control" onChange={onChange} min="0" max="10000" />
      </div>
    </>
  )
}

const CardMessage = (props: any) => {
  const [msg, setCalc] = useCalc(0, tax)
  const onChange = (event:any) => {
    setCalc(event.target.value)
  }
  return (
    <div className="card p-3 h5 border-primary">
      <h5>{msg}</h5>
      <input type="range" className="form-control" onChange={onChange} min="0" max="10000" step="100" />
    </div>
  )
}

const App = (props: any) => {
  return (
    <>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hook sample</h4>
        <PlainMessage />
        <AlertMessage />
        <CardMessage />
      </div>
    </>
  )
}

export default App;
