const Contacto = () => {
  return (
    <section id="#contacto" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;