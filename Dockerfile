FROM nginx:alpine

# Copia tu archivo HTML principal y assets
COPY *.html /usr/share/nginx/html/
COPY *.css /usr/share/nginx/html/
COPY *.js /usr/share/nginx/html/

# Si tienes carpetas adicionales (imágenes, etc.)
# COPY assets/ /usr/share/nginx/html/assets/
# COPY images/ /usr/share/nginx/html/images/

# Configuración de Nginx para SPA (opcional)
COPY <<EOF /etc/nginx/conf.d/default.conf
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files \$uri \$uri/ /index.html;
    }
}
EOF

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]