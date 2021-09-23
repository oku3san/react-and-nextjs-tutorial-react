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

  const [val, setVal] = useState(1000)
  const [tax1, setTax1] = useState(0)
  const [tax2, setTax2] = useState(0)
  const [msg, setMsg] = useState('set a price...')

  const doChange = (event: any) => {
    setVal(event.target.value)
  }

  useEffect(() => {
    let res: any = (
      <>
        <p>軽減税率(8%) : {tax1} 円</p>
        <p>軽減税率(10%) : {tax2} 円</p>
      </>
    )
    setMsg(res)
  }, [tax1, tax2])

  useEffect(() => {
    setTax1(Math.floor(val * 1.08))
  })

  useEffect(() => {
    setTax2(Math.floor(val * 1.1))
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
