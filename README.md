# Generador de Mensajes Divertidos (React)

## Overview
Esta es una versión de la aplicación "Generador de Mensajes Divertidos" construida con React y Vite. Muestra un mensaje divertido o chiste aleatorio obtenido de una API pública, y permite al usuario cargar nuevos mensajes.

## Technologies Used
- React
- Vite
- HTML5
- CSS3
- JavaScript (ES6+)

## Project Structure
(La estructura es la típica de un proyecto Vite con React, con el componente principal en `src/App.jsx`)

## Setup Instructions
1. **Si estás creando el proyecto desde cero, primero ejecuta (y luego salta al paso 3):**
   ```bash
   npm create vite@latest funny-message-generator-react -- --template react
   ```
   **Si estás clonando el repositorio, ejecuta:**
   ```bash
   git clone <repository-url> # Reemplaza <repository-url> con la URL del repositorio
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd funny-message-generator-react
   ```
3. Instala las dependencias (incluyendo `prop-types`):
   ```bash
   npm install
   npm install prop-types # Si no se instaló como dependencia directa o por si acaso
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre tu navegador en la dirección que indique Vite (usualmente `http://localhost:5173`).

## API Used
La aplicación obtiene chistes de [JokeAPI](https://v2.jokeapi.dev/). Específicamente, usa el endpoint `https://v2.jokeapi.dev/joke/Any?type=single`.

## Prompt para Replicar el Proyecto con IA (React y Vite)

Aquí tienes un prompt detallado que puedes usar con un asistente de IA (como GitHub Copilot o similar) para generar este proyecto React con Vite desde cero:

```text
Hola, [AI Name/GitHub Copilot]. Quiero que crees un nuevo proyecto React usando Vite como empaquetador y luego implementes una aplicación simple.

**Pasos Iniciales (Configuración del Proyecto):**
1.  Crea un nuevo proyecto React con Vite usando el siguiente comando en tu terminal:
    ```bash
    npm create vite@latest funny-message-generator-react -- --template react
    ```
2.  Una vez creado, navega al directorio del proyecto:
    ```bash
    cd funny-message-generator-react
    ```
3.  Instala la dependencia `prop-types`:
    ```bash
    npm install prop-types
    ```

**Nombre de la Aplicación:** Generador de Mensajes Divertidos (React)

**Tecnologías (además de React y Vite):** HTML5, CSS3, JavaScript moderno (ES6+).

**Descripción de la Aplicación:**
El objetivo es crear una página web simple que muestre un mensaje divertido o chiste aleatorio. Un botón permitirá al usuario cargar un nuevo mensaje. Los mensajes se obtendrán de una API pública.

**API a Utilizar:**
JokeAPI: `https://v2.jokeapi.dev/joke/Any?type=single`

**Detalles de Implementación en React:**

**1. Archivo `index.html` (en la raíz del proyecto Vite):**
*   Actualiza el tag `<title>` a "Generador de Mensajes Divertidos (React)".

**2. Crear carpeta `src/components`**

**3. Archivo `src/components/MessageDisplay.jsx`:**
*   Crea un componente funcional llamado `MessageDisplay`.
*   Debe aceptar una prop `message` (string).
*   Debe retornar un elemento `<p id="message-text">{message}</p>`.
*   Añade `PropTypes` para la prop `message` (requerida y de tipo string).
*   Exporta el componente.

**4. Archivo `src/App.jsx`:**
*   Importa `useState`, `useEffect`, y `useCallback` de React.
*   Importa el archivo de estilos `App.css`.
*   Importa el componente `MessageDisplay` desde `./components/MessageDisplay.jsx`.
*   Define la constante `JOKE_API_URL` con el valor `'\'\'https://v2.jokeapi.dev/joke/Any?type=single\'\'\'`.
*   En el componente `App`:
    *   Define un estado `message` (inicializado a "Cargando mensaje divertido...") para guardar el mensaje/chiste.
    *   Define un estado `isLoading` (booleano, inicializado a `false`) para manejar el estado de carga.
    *   Crea una función `fetchNewMessage` (usando `useCallback` para optimización) que sea asíncrona:
        *   Establece `isLoading` a `true`.
        *   Dentro de un bloque `try...catch`:
            *   Realiza la petición `fetch` a `JOKE_API_URL`.
            *   Verifica si `response.ok`. Si no, construye un mensaje de error (intentando parsear `response.json()` para más detalles si es posible) y lanza el error.
            *   Parsea la respuesta a JSON (`data`).
            *   Si `data.joke` existe, actualiza el estado `message` con `data.joke`.
            *   Si `data.setup` y `data.delivery` existen, actualiza `message` con `\`${data.setup} ... ${data.delivery}\``.
            *   Si no, actualiza `message` con un mensaje de formato inesperado.
        *   En el `catch`, loguea el error en consola y actualiza `message` con un mensaje de error para el usuario.
        *   Finalmente (o después del try/catch), establece `isLoading` a `false`.
    *   Usa `useEffect` para llamar a `fetchNewMessage` cuando el componente se monte por primera vez (asegúrate de incluir `fetchNewMessage` en el array de dependencias de `useEffect`).
    *   El JSX retornado debe ser:
        *   Un `div` con `className="message-container"`.
        *   Dentro, usa el componente `<MessageDisplay message={message} />`.
        *   Un botón `<button>` con `id="new-message-btn"`:
            *   El texto del botón debe ser "Cargando..." si `isLoading` es `true`, o "Nuevo Mensaje" si es `false`.
            *   El atributo `onClick` debe ser `fetchNewMessage`.
            *   El atributo `disabled` debe ser `isLoading`.

**5. Archivo `src/App.css`:**
*   Estilos para `body`: `font-family: sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background-color: #f0f0f0;`
*   Estilos para `#root`: `width: 100%; display: flex; justify-content: center; align-items: center;`
*   Estilos para `.message-container`: `text-align: center; padding: 30px; background-color: white; border-radius: 10px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); width: 80%; max-width: 500px;`
*   Estilos para `#message-text` (dentro de `MessageDisplay.jsx` pero estilizado globalmente o en `App.css`): `font-size: 1.5em; font-style: italic; margin-bottom: 20px; min-height: 50px; color: #333;`
*   Estilos para `#new-message-btn`: `padding: 10px 20px; font-size: 1em; color: white; background-color: #007bff; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s ease;`
*   Estilos para `#new-message-btn:hover`: `background-color: #0056b3;`
*   Estilos para `#new-message-btn:disabled`: `background-color: #cccccc; cursor: not-allowed;`

**6. Archivo `src/index.css` (opcional, si `App.css` no cubre todo):**
*   Asegúrate de que no haya estilos conflictivos. Puedes dejarlo como viene por defecto con Vite si los estilos de `App.css` son suficientes para el `body` y `#root`.

Por favor, genera el contenido de estos archivos (`index.html`, `src/components/MessageDisplay.jsx`, `src/App.jsx`, `src/App.css`).
```

## Consejos para Interactuar con un Asistente de IA (como este)

Para obtener los mejores resultados al trabajar con un asistente de IA para tareas de codificación, considera los siguientes consejos:

*   **Sé Específico y Claro:** Cuanto más detalladas y sin ambigüedades sean tus solicitudes, mejor podrá entenderte y ayudarte la IA. En lugar de "arregla este código", prueba con "esta función `xyz` en `archivo.js` debería hacer A, B y C, pero solo hace A y B. Creo que el problema podría estar en el bucle de la línea 10. ¿Puedes ayudarme a depurarlo?".
*   **Proporciona Contexto:** Siempre dale a la IA el contexto relevante. Esto incluye:
    *   El lenguaje de programación y los frameworks que estás utilizando.
    *   El/los archivo(s) específico(s) en los que estás trabajando.
    *   Fragmentos de código relevantes (especialmente si la IA no tiene acceso directo a tus archivos o si quieres centrarte en una parte concreta).
    *   Mensajes de error (copia y pega el error completo).
    *   Lo que ya has intentado.
*   **Divide Tareas Complejas:** Si tienes una tarea grande o compleja, divídela en pasos más pequeños y manejables. Pide ayuda a la IA con un paso a la vez.
*   **Itera y Refina:** La primera respuesta de una IA puede no ser perfecta. No dudes en pedir aclaraciones, sugerir modificaciones o señalar lo que aún falta o es incorrecto. Por ejemplo: "Es un buen comienzo, pero ¿puedes asegurarte también de que maneje el caso X?" o "El código que proporcionaste para `App.jsx` se ve bien, pero también necesito que actualices `style.css` para que coincida".
*   **Especifica el Formato de Salida Deseado:** Si necesitas la salida en un formato particular (por ejemplo, una estructura de archivos específica, un cierto estilo de codificación, una lista de comandos), házselo saber a la IA.
*   **Revisa y Prueba:** Siempre revisa el código o las sugerencias proporcionadas por una IA. Prueba el código a fondo para asegurarte de que funciona como se espera y no introduce nuevos problemas. La IA es una herramienta para ayudarte, no para reemplazar tu juicio.
*   **Usa Archivos Adjuntos/Contexto de Archivos:** Si la plataforma de IA lo admite (como esta), proporciona los archivos relevantes o indica qué archivos están activos. Esto le da a la IA acceso directo a la versión más actualizada de tu código.
*   **Declara tu Objetivo:** Explica claramente lo que intentas lograr en general. Esto ayuda a la IA a comprender el panorama general y ofrecer sugerencias más relevantes.
*   **Sé Paciente:** A veces, especialmente con solicitudes complejas, la IA puede necesitar un poco más de intercambio para hacer las cosas bien.
