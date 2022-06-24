import * as React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Home/Navbar";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Purchase from "./Pages/Purchase/Purchase";
import RequireAuth from "./Pages/Shared/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import SendReview from "./Pages/Dashboard/SendReview";
import MyProflile from "./Pages/Dashboard/MyProflile";


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
        <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path='/dashboard/orders' element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/review' element={<SendReview></SendReview>}></Route>
          <Route path='/dashboard/profile' element={<MyProflile></MyProflile>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
