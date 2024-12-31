# Backend API

## Introducción

Este proyecto es el backend de chatbot para pedir sushi, se encarga de manejar las peticiones de los usuarios y de interactuar con la base de datos.

## Cómo funciona

El backend se encarga de recibir las peticiones de los usuarios a través de una API REST, en formato JSON. Luego, utiliza Mongoose para interactuar con la base de datos y realizar las operaciones correspondientes.

## Endpoints

### Products

* **GET /api/products**: Devuelve una lista de todos los productos en la base de datos.
* **POST /api/products**: Crea un nuevo producto en la base de datos.
* **GET /api/products/:id**: Devuelve el producto con el id especificado.
* **PUT /api/products/:id**: Actualiza el producto con el id especificado.
* **DELETE /api/products/:id**: Elimina el producto con el id especificado.

### Orders

* **GET /api/orders**: Devuelve una lista de todas las órdenes en la base de datos.
* **POST /api/orders**: Crea una nueva orden en la base de datos.
* **GET /api/orders/:id**: Devuelve la orden con el id especificado.
* **PUT /api/orders/:id**: Actualiza la orden con el id especificado.
* **DELETE /api/orders/:id**: Elimina la orden con el id especificado.

## Instalación

1. Clona el repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias.
3. Crea un archivo `.env` con la siguiente información:
	* `DATABASE_URL`: la URL de la base de datos de MongoDB.
4. Ejecuta `npm start` para iniciar el servidor.

## Tecnologías utilizadas

* Node.js
* Express
* Mongoose
* TypeScript
* MongoDB
