# Dockerfile para producción - Versión robusta
FROM node:18-alpine AS builder

# Instalar dependencias del sistema
RUN apk add --no-cache python3 make g++

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Limpiar cache npm y reinstalar
RUN npm cache clean --force
RUN npm install

# Verificar que Vite está instalado
RUN npx vite --version

# Copiar el código fuente
COPY . .

# Construir la aplicación con logs detallados
RUN npm run build --verbose

# Listar contenido de dist para verificar
RUN ls -la dist/

# Etapa de producción con Nginx
FROM nginx:alpine

# Instalar curl para healthchecks
RUN apk add --no-cache curl

# Copiar archivos construidos
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Crear usuario nginx
RUN addgroup -g 1001 -S nginx && \
    adduser -S -D -H -u 1001 -h /var/cache/nginx -s /sbin/nologin -G nginx -g nginx nginx

# Ajustar permisos
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d

# Cambiar a usuario nginx
USER nginx

# Exponer puerto 80
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]