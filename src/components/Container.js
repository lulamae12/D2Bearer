//container to hold stuff and do funcs

//import reactand navbar
import React from "react";
import Navbar from "./Navbar";
import TextBox from "./TextBox";

import Button from "./Button";
import { useState } from 'react';



export default function Container() {
  
  // Declare a new state variable, inputData
  const [inputData, setData] = useState({});


  function updateInputData(e){

    //set the var inputData to e.target.Val which is the val of the passed param
    //setData({inputData: ...e.target.value})
    setData({...inputData,[e.target.name]: e.target.value})
  }

  //on button submit print out the inputData var from above
  function submit(e) {
    e.preventDefault();
    console.log(inputData["textInput"]);
    //alertTest(inputData);
  }

  function alertTest(e){
    alert(inputData["inputData:"]);
  }
  
  
  
  
  
  
  
  return (
    <div>
      <Navbar/>

      <main className="place-items-center flex h-screen ">
        <div></div>
        <div class="m-auto">
          <div className="title">
              <h1 class="text-6xl font-normal">
                D2-Bearer
              </h1>
          </div>
          <form onSubmit={submit}>
            <div class="flex flex-col items-center space-y-5">
              <div className="flex flex-col items-center space-y-2">
                <TextBox textboxText={"lorem ipsum text lusum text lusum text lusum text lule"}/>
                <input className="textInputBox " type="text" id="textInput" name="textInput" placeholder="Input Text Here" onChange={updateInputData}></input>
                <Button buttonText={"sUBMIT"}/>
              </div>
            </div>
          </form>
        </div>
        
      </main>
      <div></div>
    </div>
  );
}