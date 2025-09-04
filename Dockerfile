# Dockerfile para producción - Versión simplificada
FROM node:18-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar todas las dependencias
RUN npm ci

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Verificar que se construyó correctamente
RUN ls -la dist/

# Etapa de producción con Nginx
FROM nginx:alpine

# Copiar archivos construidos
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]