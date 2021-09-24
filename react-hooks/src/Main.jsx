import React from "react";
// import {  useAlertToggle } from "./alert/AlertContext";
import {  useAlert } from "./alert/AlertContext";

// toggle{}
export default function  Main(){
    // const toggle =useAlertToggle()
    const {toggle} =useAlert()

    return(
        <>
        <h1>
            Hello in the example with Context!
        </h1>
        <button className="btn btn-success" onClick={toggle}>Show alert</button>
        </>
    )
}