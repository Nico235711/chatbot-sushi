# Frontend

Este directorio contiene el código del frontend de mi aplicación. A continuación, se detallan las herramientas necesarias y las instrucciones para levantar el frontend.

## Herramientas necesarias

- **Node.js**: Asegúrate de tener instalado Node.js en tu máquina. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- **npm**: Viene incluido con Node.js, lo usare para gestionar las dependencias.
- **Vite**: Un compilador de código JavaScript y un servidor de desarrollo. Se instala con `npm install`.

## Configuración

1. Clona el repositorio y navega al directorio del frontend.
   
   ```bash
   git clone <url del repositorio>
   cd <carpeta del proyecto>
   ```

2. Instala las dependencias del proyecto.

   ```bash
   npm install
   ```

3. Configura las variables de entorno. Crea un archivo `.env` en la raíz del directorio `frontend` con el siguiente contenido:

   ```
   VITE_BACKEND_URL = <url para conectar hacia el backend>
   ```

## Levantar el servidor

Para levantar el frontend, ejecuta el siguiente comando:

```bash
npm run dev
```