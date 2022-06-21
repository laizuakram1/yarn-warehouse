import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";

function App() {
  return (
    <div className="App">
   
   <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>
    </div>
  );
}

export default App;
