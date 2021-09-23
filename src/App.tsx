import React, {useEffect, useState} from 'react';
import './App.css';

const AlertMessage = (props: any) => {
  return (
    <>
      <div className="alert alert-primary h5 text-primary">
        <h5>{props.msg}</h5>
      </div>
    </>
  )
}

const App = (props: any) => {

  const [val, setVal] = useState(0)
  const [msg, setMsg] = useState('set a number...')

  const doChange = (event: any) => {
    setVal(event.target.value)
  }

  useEffect(() => {
    let total = 0
    for (let i = 0; i <= val; i++) {
      total += i
    }
    setMsg("Total:" + total + ".")
  })

  return (
    <>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hook sample</h4>
        <AlertMessage msg={msg} />
        <div className="form-grou">
          <label>Input:</label>
          <input type="number" className="form-control" onChange={doChange} />
        </div>
      </div>
    </>
  )
}

export default App;
