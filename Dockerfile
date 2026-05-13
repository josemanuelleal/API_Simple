FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Crear usuario no-root
RUN useradd -m appuser

# Ejecutar contenedor con usuario seguro
USER appuser

EXPOSE 3000

CMD ["npm", "start"]