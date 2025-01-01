import { useState } from 'react';
import './ChatBot.css';
import { ProductDetails } from '../ProductDetails';

const botResponses = {
  hola: '¡Hola! ¿En qué puedo ayudarte?',
  menu: 'Nuestro menú incluye sushi rolls, nigiri y más. ¿Qué te gustaría pedir?',
  adios: '¡Gracias por visitar nuestro restaurante! ¡Hasta luego!',
  default: 'Lo siento, no entiendo tu mensaje. Por favor intenta nuevamente.',
};

const ChatBot = () => {
  const [messages, setMessages] = useState([]); // state de los mensajes
  const [inputValue, setInputValue] = useState('');

  const fetchMenu = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products'); // Cambia la URL según tu backend
      if (!response.ok) throw new Error('Error al obtener el menú');
      const products = await response.json();
      console.log(products); // array de objetos
      return products;

      console.log(menuMessage);
      
      return menuMessage;
    } catch (error) {
      console.error(error);
      return 'Hubo un problema al obtener el menú. Inténtalo más tarde.';
    }
  };

  const handleSend = async () => {
    if (inputValue.trim() === '') return;

    const userMessage = { text: inputValue, isBot: false };
    setMessages((prev) => [...prev, userMessage]);

    let botMessage = { text: '...', isBot: true };

    if (inputValue.toLowerCase() === 'menu') {
      const menu = await fetchMenu();
      console.log(menu);
      botMessage.text = `Nuestro menú es:`
      menu.forEach((item) => `${item.name} - $${item.price}`);
    } else {
      botMessage.text =
        botResponses[inputValue.toLowerCase()] || botResponses.default;
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInputValue('');
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.isBot ? 'bot-message' : 'user-message'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Escribe tu mensaje..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
};

export default ChatBot;
