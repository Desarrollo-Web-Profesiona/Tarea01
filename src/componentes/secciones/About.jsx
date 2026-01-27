const About = () => {
  return (
    <section id="#about" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Sobre Nosotros</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            En BARG Cursos nos dedicamos a proporcionar educación de calidad en desarrollo web
            y tecnologías modernas. Nuestro objetivo es formar profesionales capacitados para
            el mercado laboral actual.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-600">Estudiantes</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-gray-600">Cursos</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
              <p className="text-gray-600">Satisfacción</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;