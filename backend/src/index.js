import express from 'express';
import { Server as SocketServer } from 'socket.io';
import { createServer } from 'node:http'
import morgan from 'morgan';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const MENU = "menu";
const PEDIDO = "pedido";

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
      if (data === MENU) {
        // Fetch de productos
        const response = await fetch('http://localhost:4000/api/products');
        const products = await response.json();
  
        // Enviar los productos solo al cliente que envió el mensaje
        socket.emit('products', products); // Evento 'products'        
      }
      if (data.includes(PEDIDO)) {
        socket.emit('order', 'Si claro ¿Digame que desea ordenar?');
      }
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  });

  socket.on('order', async (data) => {
    // console.log(data);
    const response = await fetch(`http://localhost:4000/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ orderDetails: data }), // Enviar los detalles del pedido
    });
    const order = await response.json();

    socket.emit('orderConfirmation', order); 
    
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