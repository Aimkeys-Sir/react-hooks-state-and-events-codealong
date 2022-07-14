import React from "react";
import { useState } from "react";

export default function Toggle() {
  const [isOn,setState]=useState(false)
  function buttonHandler(){
    setState(isOn=>!isOn)
  }
  return <button style={{background:isOn?"green":"red"}} onClick={buttonHandler}>{isOn?"ON":"OFF"}</button>
}