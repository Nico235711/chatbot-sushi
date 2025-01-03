import express from 'express';
import { Server as SocketServer } from 'socket.io';
import { createServer } from 'node:http'
import morgan from 'morgan';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { OrderController } from './controllers/orderController.js';

const MENU = "menu";
const PEDIDO = "pedido";
const ESTAN_ABIERTO = "¿estan abiertos?";
const ESTAMOS_ABIERTOS = "Estamos abiertos";

// accedo a mis variables de entorno
dotenv.config()
connectDB()

const app = express();
const httpServer = createServer(app);
const io = new SocketServer(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL
  }
}
);

// morgan para ver las peticiones
app.use(morgan('dev'));

// habilito la lectura de json
app.use(express.json());

// creo el evento de conexion
io.on('connection', (socket) => {

  // creo el evento de escucha
  socket.on('message', async (data) => {

    try {
      if (data.toLowerCase() === MENU) {
        // Fetch de productos
        const response = await fetch('http://localhost:4000/api/products');
        const headers = response.headers.get('Content-length');
        
        if (headers > 0) {
          const products = await response.json();
          // Enviar los productos solo al cliente que envió el mensaje
          socket.emit('products', products); // Evento 'products'        
          
        }

      }
      if (data.includes(PEDIDO)) {
        socket.emit('order', 'Si claro ¿Digame que desea ordenar?');
      }
      if (data.includes(ESTAN_ABIERTO)) {
        socket.emit('isOpen', ESTAMOS_ABIERTOS);
      }
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  });

  socket.on('order', async (data) => {
    try {
      // Crear un nuevo pedido en la base de datos usando el modelo
      const newOrder = { products: data };

      // Guardar el pedido en la base de datos
      await fetch("http://localhost:4000/api/orders", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      })
      // Emitir una confirmación del pedido al cliente con los datos guardados
      socket.emit('orderConfirmation', {
        message: 'Pedido registrado con éxito',
        order: newOrder,
      });
    } catch (error) {
      console.error('Error al guardar el pedido:', error);

      // Enviar un mensaje de error al cliente
      socket.emit('orderConfirmation', {
        message: 'Hubo un error al registrar tu pedido. Inténtalo de nuevo.',
        error: error.message,
      });
    }
  });
});

// para crear un servidor de socket necesito un servidor http
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 4000;

// en vez de estar escuchando por app escucho por httpServer
httpServer.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});