import React from "react";

const Item = (props: any) => {
  const th: any = {
    width: "100px"
  }
  const td: any = {
    textAlign: "right",
    width: "150px"
  }
  let d = new Date(Date.parse(props.value.created))
  let f = d.getMonth() + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes()

  return (
    <tr>
      <th style={th}>No, {props.index}</th>
      <td>{props.value.message}</td>
      <td style={td}>{f}</td>
    </tr>
  )
}

export default Item
