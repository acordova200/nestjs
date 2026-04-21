<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Despliegue con Docker

```bash
# development
# * Docker se desplegara en el puerto 80 (si este puerto esta ocupado en la maquina local se debe cambiar en docker-compose.dev.yml)
# * la version de la API es v2, ejemplo: http://localhost/v2/auth/signup
docker-compose -f docker-compose.dev.yml up --build -d

# deploy from Docker hub
docker-compose -f docker-compose.prod.yml up --build -d
```

## Scripts rapidos (pnpm)

Desde la raiz del proyecto:

```bash
chmod +x run-all.sh install-all.sh

# instala dependencias en los 4 proyectos
./install-all.sh

# levanta API Gateway + microservicios en modo watch
./run-all.sh

# actualiza dependencias (si lo necesitas)
./update.sh
```

## Correr aplicacion manualmente

### API GATEWAY

```bash
cd api-gateway

pnpm install

# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

### Microservicio Usuarios

```bash
cd microservice-users

pnpm install

# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

### Microservicio Pasajeros

```bash
cd microservice-passengers

pnpm install

# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

### Microservicio Vuelos

```bash
cd microservice-flights

pnpm install

# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

