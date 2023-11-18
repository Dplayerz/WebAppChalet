// Filename - App.js
import "./App.css";
import "./assets/doom.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./NavBar";
import Admin from "./Admin";
import Leader from "./Leader";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Leader />}></Route>
<<<<<<< HEAD
        <Route path="/Admin" element={<Admin />}></Route>
=======
        <Route path="/Admin" element={<Admin /></Route>
>>>>>>> 448d2729b36397671d640b2fc920f69d8ed46334
      </Routes>
    </BrowserRouter>
  );
}

export default App;
