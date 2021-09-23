import React, {useEffect, useState} from 'react';
import './App.css';

const useTax = (t1: any, t2: any) => {
  const [price, setPrice] = useState(1000)
  const [tx1] = useState(t1)
  const [tx2] = useState(t2)

  const tax: any = () => {
    return Math.floor(price * (1.0 + tx1 / 100))
  }

  const reduced: any = () => {
    return Math.floor(price * (1.0 + tx2 / 100))
  }

  return [price, tax, reduced, setPrice]
}

const AlertMessage = (props: any) => {
  const [price, tax, reduced, setPrice] = useTax(10, 8)
  const DoChange = (event: any) => {
    let p = event.target.value
    setPrice(p)
  }
  return (
    <>
      <div className="alert alert-primary h5 text-primary">
        <p className="h5">通常税率: {tax()} 円</p>
        <p className="h5">軽減税率: {reduced()} 円</p>
        <div className="form-group">
          <input type="number" className="form-control" onChange={DoChange} value={price} />
        </div>
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
