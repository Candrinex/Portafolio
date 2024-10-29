import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbarr from './components/navbar';
import Hero from './components/hero';
import About from "./components/abaut";
import Servicios from "./components/servicios";
import Proyectos from './components/proyectos';
import Contacto from './components/contacto';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
