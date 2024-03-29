import React from "react";
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";


function App() {
  return (
    <div className="flex flex-col h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>}/>
            <Route path="home" element={<Home/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
