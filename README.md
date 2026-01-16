# 🎓 Barra de Navegación - El Sitio de BARG Cursos

Aplicación web con barra de navegación responsiva desarrollada con React, Vite, Tailwind CSS y Motion.

## 📋 Descripción

Sistema de navegación moderno y responsivo que incluye:
- Barra de navegación adaptable a diferentes dispositivos
- Menú hamburguesa animado para móviles
- Banner principal con animaciones suaves
- Integración con Docker para deployment

## 🚀 Tecnologías

- **React 18** - Librería de JavaScript para interfaces de usuario
- **Vite** - Build tool rápido y moderno
- **Tailwind CSS v4** - Framework de CSS utility-first
- **Motion (Framer Motion)** - Librería de animaciones para React
- **React Icons** - Iconos modulares para React
- **Docker** - Containerización de la aplicación
- **Nginx** - Servidor web para producción

## 📦 Instalación Local

### Prerequisitos
- Node.js 20 o superior
- npm o yarn

### Pasos

1. **Clonar el repositorio**
```bash
   git clone <url-de-tu-repositorio>
   cd barnavegacion
```

2. **Instalar dependencias**
```bash
   npm install
```

3. **Ejecutar en desarrollo**
```bash
   npm run dev
```

4. **Abrir en navegador**
   - La aplicación estará disponible en `http://localhost:5173`

## 🐳 Deployment con Docker

### Construir la imagen
```bash
docker build -t barnavegacion-app .
```

### Ejecutar el contenedor
```bash
docker run -p 8080:80 barnavegacion-app
```

### Acceder a la aplicación

Abre tu navegador en: `http://localhost:8080`

### Comandos útiles
```bash
# Ver contenedores en ejecución
docker ps

# Ver logs del contenedor
docker logs <container-id>

# Detener contenedor
docker stop <container-id>

# Eliminar contenedor
docker rm <container-id>

# Eliminar imagen
docker rmi barnavegacion-app
```

## ✨ Características

### 1. Barra de Navegación
- **Logo**: Icono de libro con texto "EL SITIO DE BARG CURSOS"
- **Menú Desktop**: Links de navegación (Inicio, Acerca de, Cursos)
- **Iconos**: Búsqueda, Carrito de compras, Botón de Ingresar
- **Menú Móvil**: Hamburguesa con animación slide-down

### 2. Animaciones Implementadas

#### Animación 1: Menú Responsivo con Stagger
- Aparición con slide desde arriba
- Items aparecen secuencialmente con delay
- Efecto hover con scale y desplazamiento
- **Archivo**: `src/componentes/MenuResponsivo.jsx`
```javascript
// Animación del menú completo
initial: { opacity: 0, y: -100 }
animate: { opacity: 1, y: 0 }
exit: { opacity: 0, y: -100 }

// Animación stagger de items
{navbarLinks.map((item) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: item.id * 0.1 }}
    whileHover={{ scale: 1.1, x: 10 }}
  >
))}
```

#### Animación 2: Banner Principal
- Fade in con scale al cargar
- Texto aparece secuencialmente
- Transiciones suaves
- **Archivo**: `src/componentes/Banner.jsx`
```javascript
// Animación del contenedor
initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}

// Animación de cada texto
transition={{ delay: 0.2, duration: 0.4 }} // INICIO
transition={{ delay: 0.4, duration: 0.4 }} // ACERCA DE
transition={{ delay: 0.6, duration: 0.4 }} // CURSOS
```

### 3. Banner
- Diseño con borde rojo (#EF4444)
- Fondo naranja (#FF8901)
- Texto centrado y responsive
- Animaciones en cascada

## 📁 Estructura del Proyecto
```
barnavegacion/
├── src/
│   ├── componentes/
│   │   ├── Navbar.jsx           # Barra de navegación principal
│   │   ├── MenuResponsivo.jsx   # Menú móvil animado
│   │   └── Banner.jsx           # Banner principal
│   ├── data/
│   │   └── data.js              # Datos de navegación
│   ├── App.jsx                  # Componente raíz
│   ├── main.jsx                 # Entry point
│   └── index.css                # Estilos globales
├── public/
├── index.html
├── package.json
├── vite.config.js
├── Dockerfile                    # Configuración Docker
├── .dockerignore                # Archivos ignorados por Docker
└── README.md                    # Documentación
```

## 🎨 Colores del Tema
```css
--color-primary: #FF8901   /* Naranja principal */
--color-secondary: #FB923C /* Naranja claro */
--color-red: #EF4444       /* Rojo del borde */
```

## 🖥️ Responsive Design

### Desktop (≥768px)
- Menú horizontal visible
- Botón "Ingresar" visible
- Logo completo
- Banner amplio

### Mobile (<768px)
- Menú hamburguesa
- Menú desplegable animado
- Layout optimizado
- Banner adaptado

## 📝 Scripts Disponibles
```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🐛 Troubleshooting

### Los colores no aparecen
- Verifica que `index.css` tenga las variables CSS correctas
- Asegúrate de que Tailwind esté configurado en `vite.config.js`

### El menú móvil no funciona
- Revisa que Motion esté instalado: `npm install motion@latest`
- Verifica el estado `abierto` en `Navbar.jsx`

### Error al construir Docker
- Asegúrate de que `.dockerignore` excluya `node_modules`
- Verifica que todos los archivos estén commiteados

## 👨‍💻 Autor

**BARG** - Desarrollo Web Frontend

## 📄 Licencia

MIT License - Proyecto educativo

## 🔗 Enlaces

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion Documentation](https://motion.dev)
- [Docker Documentation](https://docs.docker.com)

---

**Versión**: 1.0.0  
**Fecha**: Enero 2026  
**Tecnología**: React + Vite + Tailwind + Motion + Docker