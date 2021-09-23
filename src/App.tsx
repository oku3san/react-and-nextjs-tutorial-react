import React, {useState} from 'react';
import './App.css';

const AlertMessage = (props: any) => {
  const data = ["Hello", "Welcome ...", "Good-bye?"]

  const actionAlert = () => {
    const re = data[Math.floor(Math.random() * data.length)]
    props.setAlert('message: "' + re + '".')
  }

  return (
    <>
      <div className="alert alert-primary h5 text-primary">
        <h5>{props.alert}</h5>
        <button onClick={actionAlert} className="btn btn-primary">
          Click me
        </button>
      </div>
    </>
  )
}

const CardMessage = (props: any) => {

  // const [count, setCount] = useState(0)

  let count = 0

  // const actionCard = () => {
  //   setCount(count + 1)
  //   props.setCard("card counter: " + count + " count.")
  // }

  const actionCard = () => {
    count++
    props.setCard("card counter: " + count + " count.")
  }

  return (
    <div className="card p-3 h5 border-primary text-center">
      <h5>{props.card}</h5>
      <button onClick={actionCard} className="btn btn-primary">
        Click me
      </button>
    </div>
  )
}

const App = (props: any) => {

  const [alert, setAlert] = useState('alert message')
  const [card, setCard] = useState('card message')

  return (
    <>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">Hook sample</h4>
        <AlertMessage alert={alert} setAlert={setAlert} />
        <CardMessage card={card} setCard={setCard} />
        <hr />
        <div className="text-right">
          <p>{alert}</p>
          <p>{card}</p>
        </div>
      </div>
    </>
  )
}

export default App;
