# Dockerfile para producción - Sin healthcheck
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar archivos construidos
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Deshabilitar healthcheck explícitamente
HEALTHCHECK NONE

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]