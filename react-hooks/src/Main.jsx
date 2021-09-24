import React from "react";
// import {  useAlertToggle } from "./alert/AlertContext";
import {  useAlert } from "./alert/AlertContext";

// toggle{}
export default function  Main(){
    // const toggle =useAlertToggle()
    const {show} =useAlert()

    return(
        <>
        <h1>
            Hello in the example with Context!
        </h1>
        <button className="btn btn-success" onClick={()=>show('This text is from Main.js')}>Show alert</button>
        </>
    )
}