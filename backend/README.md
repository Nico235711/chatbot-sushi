# Backend [puerto: 4000]

Este directorio contiene el código del backend de mi aplicación. A continuación, se detallan las herramientas necesarias y las instrucciones para levantar el servidor backend.

## Herramientas necesarias

- **Node.js**: Asegúrate de tener instalado Node.js en tu máquina. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- **npm**: Viene incluido con Node.js, lo usare para gestionar las dependencias.
- **MongoDB**: Base de datos, asegúrate de tenerla instalada y corriendo.

## Dependencias

Las principales dependencias utilizadas en este proyecto son:

- **Express**: Un framework para construir aplicaciones web y APIs en Node.js.
- **Mongoose**: Un ODM (Object Document Mapper) para MongoDB y Node.js.
- **Socket.io**: Biblioteca para permitir la comunicación en tiempo real entre el servidor y el cliente.
- **Morgan**: Un middleware para el registro de peticiones HTTP.

## Configuración

1. Clona el repositorio y navega al directorio del backend.
   
   ```bash
   git clone <url del repositorio>
   cd <carpeta del proyecto>
   ```

2. Instala las dependencias del proyecto.

   ```bash
   npm install
   ```

3. Configura las variables de entorno. Crea un archivo `.env` en la raíz del directorio `backend` con el siguiente contenido:

   ```
   MONGO_URL=<tu_url_de_mongo>
   FRONTEND_URL=<tu_url_del_frontend>
   ```

## Levantar el servidor

Para levantar el servidor backend, ejecuta el siguiente comando:

```bash
npm start
```

Esto iniciará el servidor en modo de observación, lo que significa que se reiniciará automáticamente cuando se detecten cambios en los archivos del código fuente.

## Endpoints principales

- **POST /orders**: Crear un nuevo pedido.
- **GET /orders**: Obtener todos los pedidos.
- **POST /products**: Crear un nuevo producto.
- **GET /products**: Obtener todos los productos.

## Estructura del directorio

- **src/controllers**: Contiene los controladores para manejar las solicitudes de la API.
- **src/routes**: Define las rutas de la API.
- **src/models**: Define los modelos de datos para MongoDB.
- **src/config**: Contiene configuraciones adicionales como la base de datos y CORS.

## Notas

- Asegúrate de que MongoDB esté corriendo antes de iniciar el servidor backend.
- Para el desarrollo, considera usar herramientas como Postman para probar los endpoints de la API.

## Datos de ejemplo para los productos

```bash
const products = [
  {
    "name": "California Roll",
    "price": 500,
    "description": "Arroz, alga nori, aguacate, pepino y surimi."
  },
  {
    "name": "Spicy Tuna Roll",
    "price": 600,
    "description": "Atún fresco, arroz, alga nori y salsa picante."
  },
  {
    "name": "Salmon Nigiri",
    "price": 300,
    "description": "Loncha de salmón fresco sobre arroz avinagrado."
  },
  {
    "name": "Tuna Nigiri",
    "price": 350,
    "description": "Loncha de atún fresco sobre arroz avinagrado."
  },
  {
    "name": "Shrimp Tempura Roll",
    "price": 700,
    "description": "Gamba tempura, aguacate, arroz y alga nori."
  },
  {
    "name": "Avocado Roll",
    "price": 400,
    "description": "Arroz, alga nori y aguacate fresco."
  },
  {
    "name": "Dragon Roll",
    "price": 750,
    "description": "Anguila, aguacate, arroz, alga nori y salsa especial."
  },
  {
    "name": "Rainbow Roll",
    "price": 800,
    "description": "Roll California cubierto con salmón, atún y aguacate."
  },
  {
    "name": "Cucumber Roll",
    "price": 300,
    "description": "Arroz, alga nori y rodajas de pepino fresco."
  },
  {
    "name": "Eel Nigiri",
    "price": 400,
    "description": "Loncha de anguila a la parrilla sobre arroz avinagrado."
  }
]
```

## Ejecución

- Cuando te conectes a la base de datos ya se va a cargar con estos datos

## Mensajes con respuestas

- `¿estan abiertos? -> estamos abiertos`
- `Quiero 2 hamburguesas y 1 coca-cola -> lo guarda en la BD`
- `menu -> muestra el menu`
