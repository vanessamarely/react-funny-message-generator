import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import MessageDisplay from './components/MessageDisplay'; // Importar el nuevo componente

const JOKE_API_URL = 'https://v2.jokeapi.dev/joke/Any?type=single';

function App() {
  const [message, setMessage] = useState('Cargando mensaje divertido...');
  const [isLoading, setIsLoading] = useState(false);

  const fetchNewMessage = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(JOKE_API_URL);
      if (!response.ok) {
        let errorDetails = `HTTP error! status: ${response.status}`;
        try {
          const errorData = await response.json();
          errorDetails += ` - ${errorData.message || JSON.stringify(errorData)}`;
        } catch (parseError) {
          console.error("Error parsing error data:", parseError);
          // No se pudo parsear el cuerpo del error o no era JSON, errorDetails ya tiene el status
        }
        throw new Error(errorDetails);
      }
      const data = await response.json();
      if (data.joke) {
        setMessage(data.joke);
      } else if (data.setup && data.delivery) {
        setMessage(`${data.setup} ... ${data.delivery}`);
      } else {
        setMessage('No se pudo obtener un mensaje en el formato esperado.');
      }
    } catch (error) {
      console.error("No se pudo obtener el mensaje:", error);
      setMessage('Error al cargar el mensaje. Revisa la consola o inténtalo más tarde.');
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchNewMessage();
  }, [fetchNewMessage]);

  return (
    <div className="message-container">
      <MessageDisplay message={message} /> {/* Usar el nuevo componente */}
      <button id="new-message-btn" onClick={fetchNewMessage} disabled={isLoading}>
        {isLoading ? 'Cargando...' : 'Nuevo Mensaje'}
      </button>
    </div>
  );
}

export default App;
