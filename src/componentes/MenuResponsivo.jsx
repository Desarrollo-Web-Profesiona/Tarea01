/* eslint-disable no-unused-vars */


import { AnimatePresence, motion } from "motion/react";
import { Link } from "react-router-dom";

const MenuResponsivo = ({ open, navbarLinks, setAbierto }) => {
  const animacion = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAbierto(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          />

          {/* Menu */}
          <motion.div 
            {...animacion} 
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-primary">Menú</h2>
              </div>

              <ul className="space-y-4">
                {navbarLinks.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.url}
                      onClick={() => setAbierto(false)}
                      className="block py-3 px-4 text-lg font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary rounded-lg transition-all duration-300"
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link
                  to="/login"
                  onClick={() => setAbierto(false)}
                  className="block w-full text-center bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full py-3 hover:shadow-lg transition-all duration-300"
                >
                  Ingresar
                </Link>
              </div>

              <div className="mt-6 flex justify-center gap-4 text-sm text-gray-500">
                <a href="#" className="hover:text-primary transition-colors">Ayuda</a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">Contacto</a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuResponsivo;