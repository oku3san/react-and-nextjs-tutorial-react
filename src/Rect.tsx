import React, { Component } from "react";

const Rect = (props: any) => {
  let x = 0
  let y = 0
  let width = 0
  let height = 0
  let color = "read"
  let radius = ""
  let style = {}
  
  x = props.x
  y = props.y
  width = props.w
  height = props.h
  color = props.c
  radius = props.r
  style = {
    backgroundColor: color,
    position: "absolute",
    left: x + "px",
    top: y + "px",
    width: width + "px",
    height: height + "px",
    borderRadius: radius + "px"
  }

  return (
    <div style={style}></div>
  )
}

export default Rect
