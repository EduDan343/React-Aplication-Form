import { Routes, Route } from "react-router-dom";
import { Index } from "./Index";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/registrar" element={<h1>Registrarse</h1>} />
        <Route path="/menu" element={<h1>menu</h1>} />
      </Routes>
    </>
  );
}

export default App;
