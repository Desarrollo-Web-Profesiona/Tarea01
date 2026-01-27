const Cursos = () => {
  const cursos = [
    {
      id: 1,
      nombre: "React Avanzado",
      descripcion: "Domina React con hooks, context y patrones avanzados",
      duracion: "40 horas",
      nivel: "Intermedio"
    },
    {
      id: 2,
      nombre: "Tailwind CSS",
      descripcion: "Aprende a crear interfaces modernas con Tailwind",
      duracion: "20 horas",
      nivel: "Principiante"
    },
    {
      id: 3,
      nombre: "Framer Motion",
      descripcion: "Animaciones profesionales para React",
      duracion: "15 horas",
      nivel: "Intermedio"
    },
    {
      id: 4,
      nombre: "Node.js Backend",
      descripcion: "Desarrollo de APIs REST con Express y MongoDB",
      duracion: "50 horas",
      nivel: "Avanzado"
    },
    {
      id: 5,
      nombre: "Docker DevOps",
      descripcion: "Containerización y deployment profesional",
      duracion: "30 horas",
      nivel: "Intermedio"
    },
    {
      id: 6,
      nombre: "TypeScript",
      descripcion: "JavaScript tipado para aplicaciones escalables",
      duracion: "25 horas",
      nivel: "Intermedio"
    }
  ];

  return (
    <section id="#cursos" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cursos.map((curso) => (
            <div key={curso.id} className="p-6 shadow-lg rounded-xl bg-orange-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-primary mb-3">{curso.nombre}</h3>
              <p className="text-gray-600 mb-4">{curso.descripcion}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>⏱️ {curso.duracion}</span>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-xs">
                  {curso.nivel}
                </span>
              </div>
              <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors">
                Ver detalles
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cursos;