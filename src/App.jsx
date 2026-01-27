import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/secciones/Home";
import Cursos from "./componentes/secciones/Cursos";
import About from "./componentes/secciones/About";
import Servicios from "./componentes/secciones/Servicios";
import Contacto from "./componentes/secciones/Contacto";
import Login from "./componentes/secciones/Login";
import Navbar from "./componentes/Navbar";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-gray-50 min-h-screen">
      <BrowserRouter>
        <Navbar />
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/about" element={<About />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;