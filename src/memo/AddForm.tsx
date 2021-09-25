import React, { useState } from "react";
import usePersist from "../Persist";

const AddForm = (props: any) => {
  const [memo, setMemo] = usePersist("memo", [])
  const [message, setMessage] = useState('')
  const [mode, setMode] = usePersist("mode", "default")

  const doChange = (event: any) => {
    setMessage(event.target.value)
  }

  const doAction = (event: any) => {
    const data = {
      message: message,
      created: new Date()
    }
    memo.unshift(data)
    setMemo(memo)
    setMode("default")
    setMessage('')
  }

  return (
    <form onSubmit={doAction} action="">
      <div className="form-group row">
        <input type="text" className="form-control-sm col" onChange={doChange} value={message} required />
        <input type="submit" className="btn btn-primary btn-sm col-2" value="Add" />
      </div>
    </form>
  )
}

export default AddForm
