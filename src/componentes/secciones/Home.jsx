const Home = () => {
  return (
    <section
      id="/"
      className="h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Bienvenido a <span className="text-primary">BARG Cursos</span>
        </h1>
        <p className="text-xl text-gray-600 mt-4">
          Aprende las tecnologías más demandadas del mercado
        </p>
        <button className="mt-8 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition-all duration-300">
          Explorar Cursos
        </button>
      </div>
    </section>
  );
};

export default Home;