import logo from './logo.svg';
import './App.css';
import  React, {useEffect, useState} from 'react';
import Clock from './Clock';
import {Navbar, Nav} from 'react-bootstrap'

function App() {
  const[name, setName]= useState("Liu");
  const  changeName=()=>{
    setName("andy");
  };

  const[price, discout]=useState(100);
  const discount=()=>{
    discout(75);
  }
  const[count, setCount]= useState(0);
  useEffect(()=>{
    console.log("Count ="+ count);
  })
  return (


    <div >
      <button onClick={()=>setCount(count+1)}>count</button>
      <p> My name is {name}</p>
      <button onClick={changeName}> Click Me</button>

      <p> Price {price}</p>
      <button onClick={discount}> Discount</button>
      <Clock></Clock>

    </div>

  );
}

export default App;
