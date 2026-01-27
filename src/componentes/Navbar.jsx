import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navbarLinks } from "../data/data";
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdMenu, MdClose } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import MenuResponsivo from "./MenuResponsivo";

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="container flex justify-between items-center py-6">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl flex items-center gap-2 uppercase font-black hover:opacity-80 transition-opacity"
          >
            <ImBooks className="text-black text-3xl" />
            <div className="flex flex-col md:flex-row md:items-center md:gap-2">
              <span className="text-black leading-tight">EL SITIO DE BARG</span>
              <span className="text-secondary leading-tight">CURSOS</span>
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navbarLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.url}
                    className={`inline-block py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      isActive(item.url)
                        ? "text-white bg-primary"
                        : "text-gray-700 hover:text-primary hover:bg-orange-50"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Iconos Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-2xl text-gray-700 hover:bg-orange-50 hover:text-primary rounded-full p-3 transition-all duration-300">
              <CiSearch />
            </button>
            <button className="text-2xl text-gray-700 hover:bg-orange-50 hover:text-primary rounded-full p-3 transition-all duration-300 relative">
              <PiShoppingCartLight />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <Link
              to="/login"
              className="bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full px-6 py-2.5 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Ingresar
            </Link>
          </div>

          {/* Menu Mobile Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button className="text-2xl text-gray-700 hover:text-primary transition-colors p-2">
              <CiSearch />
            </button>
            <button 
              onClick={() => setAbierto(!abierto)} 
              className="text-4xl text-gray-700 hover:text-primary transition-colors"
            >
              {abierto ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>
      </nav>

      <MenuResponsivo open={abierto} navbarLinks={navbarLinks} setAbierto={setAbierto} />
    </>
  );
};

export default Navbar;