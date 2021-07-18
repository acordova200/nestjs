<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Correr Aplicacion

### API GATEWAY

```bash

cd api-gateway

npm install 

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Microservicio Usuarios

```bash

cd microservice-users

npm install 

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Microservicio Pasajeros

```bash

cd microservice-passengers

npm install 

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Microservicio Vuelos

```bash

cd microservice-flights

npm install 

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Despligue con Docker

```bash
# development
docker-compose -f docker-compose.dev.yml

# deploy from Docker hub
docker-compose -f docker-compose.prod.yml
```