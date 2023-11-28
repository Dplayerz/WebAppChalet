// Filename - App.js
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./NavBar";
import Admin from "./Admin";
import Leader from "./Leader";
import Login from "./Login";
import Hide from "./Hidden";
import Question from "./Questionnaire";



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Leader />}></Route>


        
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Hidden" element={<Hide />}></Route>
        <Route path="/Questionnaire" element={<Question />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
