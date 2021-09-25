import React, { useState, memo} from "react";
import usePersist from "../Persist";

const DelForm = (props: any) => {
  const [memo, setMemo] = usePersist("memo", [])
  const [num, setNum] = useState(0)
  const [mode, setMode] = usePersist("mode", "default")

  const doChange = (event: any) => {
    setNum(event.target.value)
  }

  const doAction = (event: any) => {
    let res = memo.filter((item: any, key: any) => {
      return key !== num
    })
    setMemo(res)
    setMode("default")
    setNum(0)
  }

  let items = memo.map((value: any, key: any) => {
    return (
      <option key={key} value={key}>
        {value.message.substring(0,10)}
      </option>
    )
  })

  return (
    <form onSubmit={doAction}>
      <div className="form-group row">
        <select onChange={doChange} className="form-control-sm col" defaultValue="-1" >
          {items}
        </select>
        <input type="submit" value="Del" className="btn btn-primary btn-sm col-2" />
      </div>
    </form>
  )
}

export default DelForm
