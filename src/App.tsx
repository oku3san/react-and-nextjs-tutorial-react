import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Rect from './Rect';

const App = (props: any) => {
  let input = ''

  return (
    <>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <Message title="Children">
          これはコンポーネント内のコンテンツです。
          丸でテキストを分割し、リストにて表示します。
          改行は必要ありません。
        </Message>
      </div>
    </>
  )
}

const Message = (props: any) => {
  const li: any = {
    fontSize: "14pt",
    fontWeight: "bold",
    color: "#090",
  }

  let content = props.children
  let arr = content.split('。')
  let arr2 = []
  for(let i = 0; i < arr.length; i++) {
    if (arr[i].trim() != '') {
      arr2.push(arr[i])
    }
  }
  let list = arr2.map((value, key) => {
    return <li className="list-group-item" style={li} key={key}>{key + 1}. {value}</li>
  })

  return (
    <>
      <h2>{props.title}</h2>
      <ol className="list-group">{list}</ol>
    </>
  )
}

export default App;
