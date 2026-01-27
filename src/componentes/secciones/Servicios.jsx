const Servicios = () => {
  return (
    <section id="#servicios" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Consultoría</h3>
            <p className="text-gray-600">
              Asesoramiento personalizado para tu proyecto de desarrollo web
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Mentorías</h3>
            <p className="text-gray-600">
              Sesiones one-on-one con expertos para resolver tus dudas
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Certificación</h3>
            <p className="text-gray-600">
              Obtén certificados reconocidos al completar nuestros cursos
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Proyectos Reales</h3>
            <p className="text-gray-600">
              Trabaja en proyectos del mundo real con empresas asociadas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;