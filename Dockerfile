# Etapa 1: Construcción (Build)
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Etapa 2: Servidor de Producción (Nginx)
FROM nginx:stable-alpine

# Copiamos los archivos compilados desde la etapa 'build'
# Si usas Vite es 'dist', si usas CRA es 'build'
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### 2. **`.dockerignore`** (crear en la raíz del proyecto)
```
node_modules
dist
build
.git
.env
Dockerfile
.dockerignore
npm-debug.log
.DS_Store
*.log
.vscode
.idea