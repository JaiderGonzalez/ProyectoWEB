import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from './components/jsx/Register';
import NavBar from "./components/jsx/NavBar";
import Login from "./components/jsx/Login";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;