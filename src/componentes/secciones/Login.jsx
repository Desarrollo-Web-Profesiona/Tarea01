import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          {isLogin ? "Iniciar Sesión" : "Registrarse"}
        </h2>

        <form className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nombre completo</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
                placeholder="Juan Pérez"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
              placeholder="••••••••"
            />
          </div>

          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-600">Recordarme</span>
              </label>
              <a href="#" className="text-primary hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isLogin ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary font-semibold hover:underline"
            >
              {isLogin ? "Regístrate" : "Inicia sesión"}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;