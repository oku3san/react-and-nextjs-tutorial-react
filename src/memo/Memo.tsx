import React from "react";
import usePersist from "../Persist";

import Item from './Item';

const Memo = (props: any) => {
  const [memo, setMemo] = usePersist("memo", [])
  const [fmemo, setFMemo] = usePersist("findMemo", [])
  const [mode, setMode] = usePersist("mode", 'default')

  let data: any = []

  switch (mode) {
    case 'default':
      data = memo.map((value: any, key: any) => {
        return <Item key={value.message} value={value} index={key + 1} />
      })
      // setMode('default')
      break

    case 'find':
      data = fmemo.map((value: any, key: any) => {
        return <Item key={value.message} value={value} index={key + 1} />
      })
      break

    default:
      data = memo.map((value: any, key: any) => {
        return <Item key={value.message} value={value} index={key + 1} />
      })
  }

  return (
    <table className="table mt-4">
      <tbody>{data}</tbody>
    </table>
  )

}

export default Memo
