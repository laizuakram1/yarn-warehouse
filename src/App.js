import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/Shared/RequireAuth";

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>
    </div>
  );
}

export default App;
