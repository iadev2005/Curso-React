import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import { App } from './App';
import './index.css'

// Esto es el punto de entrada de nuestra aplicación, es importante

// Esto es como cuando trabajamos sin dependecias, seleccionamos el id y renderizamos nuestra componente
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// Para simplificar crearemos una constante
const root = createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// Un componente es una función que nos crea un elemento, esto nos evita repetir código para reutilizar un elemento

// FUNCIÓN FLECHA NORMAL

// Ponemos el parámetro entre llaves como si fuera un objeto

// const createButton = ({text}) => {
//   return (
//     <button>

//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
//       </svg>

//       {text}

//     </button>
//   )
// }

// Lo anterior es una función flecha normal y corriente. En React si vamos a crear un componente hay una forma estandarizada

// FUNCIÓN ESTANDARIZADA PARA CREAR COMPONENTES

// Le ponemos de nombre a la función, directamente como se llamará nuestro componente

// Ojo la distinción esta en la letra mayúscula, los componentes tienen las distinción PascalCase

// const Button = ({ text }) => {
//   return (
//     <button>
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//         <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
//       </svg>
//       {text}
//     </button>
//   )
// }

// CON FUNCIÓN ESTANDARIZADA PARA CREAR COMPONENTES

// root.render(
//   <React.Fragment>
//     <Button text="Button 1"></Button>
//     <Button text="Button 2"></Button>
//     <Button text="Button 3"></Button>
//   </React.Fragment>
// )

// CON FUNCIÓN FLECHA NORMAL

// Ahora podemos llamar a la función para crear el componente, lo ponemos entre llaves para indicarle que ahí se hará el renderizado
// root.render(
//   <React.Fragment>
//     {createButton({ text: 'Button 1' })}
//     {createButton({ text: 'Button 2' })}
//     {createButton({ text: 'Button 3' })}
//   </React.Fragment>
// )

// Esto es ineficiente, lo óptimo sería crear un componente

// root.render(
//   <React.Fragment>
//     <button>

//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//         <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//       </svg>

//       Button
//     </button>
//     <button>

//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//         <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//       </svg>

//       Button
//     </button>
//     <button>

//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//         <path stroke-linecap="round" stroke-linejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
//       </svg>

//       Button
//     </button>
//   </React.Fragment>
// );

// No se pueden renderizar dos elementos a la vez
// root.render(<button>Button</button> <button>Button</button>);

// Por cierto, eliminaremos App.css, App.jsx e index.css, que los trae por defecto, luego los crearemos por cuenta propia

// Bueno dejando de lado todo lo anterior ahora haremos nuestra primera componente "compleja", lo primer es que a partir de ahora los componentes los haremos en app.jsx

// Si no tenemos nada que modificarle al componente podemos declararlo así: <NameComponent />

root.render(
  <App />
)