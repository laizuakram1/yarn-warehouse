import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar";

function App() {
  return (
    <div className="App">
   
   <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        

      </Routes>
    </div>
  );
}

export default App;
