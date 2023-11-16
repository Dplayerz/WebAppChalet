// Filename - App.js
import "./App.css";
import "./assets/doom.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./NavBar";
//import Admin from "./Admin";
import Leader from "./Leader";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Leader />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
