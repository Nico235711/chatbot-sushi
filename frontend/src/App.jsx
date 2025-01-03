import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { formatCurrency } from './utils';

const socket = io(import.meta.env.VITE_BACKEND_URL);
const PEDIDO = "quiero hacer un pedido";
const ESTAN_ABIERTO = "¿estan abiertos?";

export default function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]); // Usamos un solo estado para mensajes y productos
  const [orders, setOrders] = useState([]); // Estado para los pedidos
  const [isOrdering, setIsOrdering] = useState(false); // Estado para saber si está haciendo un pedido

  // Escuchar eventos del servidor
  useEffect(() => {
    socket.on('products', (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'products', data },
      ]);
    });

    socket.on('order', (data) => {
      setMessages((prevMessages) => [...prevMessages, { type: 'message', text: data }]);
    });

    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, { type: 'message', text: data }]);
    });

    socket.on('isOpen', (data) => {
      setMessages((prevMessages) => [...prevMessages, { type: 'message', text: data }]);
    });

    return () => {
      socket.off('products');
      socket.off('order');
      socket.off('message');
      socket.off('isOpen');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'message', text: message },
    ]);

    if (isOrdering) {
      // Enviar el mensaje como parte del pedido
      socket.emit('order', message);
      setOrders((prevOrders) => [...prevOrders, { text: message }]);
      setIsOrdering(false);
    } else if (message.toLowerCase() === PEDIDO) {
      // Activar el modo de pedido
      setIsOrdering(true);
      socket.emit('message', message);
    } else {
      // Enviar mensaje genérico
      socket.emit('message', message);
    }

    if (message.toLowerCase() === ESTAN_ABIERTO) {
      // Desactivar el modo de pedido
      socket.emit('isOpen', ESTAN_ABIERTO);
    }

    setMessage('');
  };

  return (
    <div className="grid place-items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-md overflow-auto"
      >
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Escribe tu mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Enviar
          </button>
        </div>
      </form>

      {messages.length > 0 && (
        <div className="bg-white p-5 rounded-md overflow-y-scroll h-[300px] w-[500px] my-2">
          <ul className="mt-4">
            {messages.map((entry, index) => (
              <li
                key={index}
                className={`border border-gray-300 rounded-md p-2 mt-2 ${entry.type === 'message'
                    ? 'bg-blue-400 text-white capitalize table'
                    : ''
                  }`}
              >
                {entry.type === 'message' ? (
                  entry.text
                ) : (
                  <ul>
                    {entry.data.map((product) => (
                      <li key={product._id}>
                        {product.name} - {formatCurrency(product.price)}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

        </div>
      )}
    </div>
  );
}
