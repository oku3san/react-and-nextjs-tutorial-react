import React, {useEffect, useState} from 'react';
import './App.css';
import usePersist from "./Persist";

const AlertMessage = (props: any) => {
  const [name, setName]:any = useState("")
  const [mail, setMail]:any = useState("")
  const [age, setAge]:any = useState(0)
  const [mydata, setMydata]:any = usePersist("mydata", null)

  const onChangeName = (event: any) => {
    setName(event.target.value)
  }

  const onChangeMail = (event: any) => {
    setMail(event.target.value)
  }

  const onChangeAge = (event: any) => {
    setAge(event.target.value)
  }

  const onAction = (event:any) => {
    const data = {
      name: name,
      mail: mail,
      age: age
    }
    setMydata(data)
  }

  return (
    <>
      <div className="alert alert-primary h5 text-primary">
        <h5 className="mb-4">{JSON.stringify(mydata)}</h5>
        <div className="form-group">
          <label className="h6">Name</label>
          <input type="text" onChange={onChangeName} className="form-control" />
        </div>
        <div className="form-group">
          <label className="h6">Mail</label>
          <input type="text" onChange={onChangeMail} className="form-control" />
        </div>
        <div className="form-group">
          <label className="h6">Age</label>
          <input type="text" onChange={onChangeAge} className="form-control" />
        </div>
        <button onClick={onAction} className="btn btn-primary">Save it</button>
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
