import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client"; // Importa react vía NPM

const appDomElement = document.getElementById('app');

// Podemos visualizar a root como el padre absoluto en un arbol de componentes
const root = ReactDOM.createRoot(appDomElement);

// Podemos simplificar con esto:
const create = React.createElement

// Evitando esto:
// const button = React.createElement('button', {"data-id" : 123}, 'Button 1');

// Son tres parámetros para nuestro objeto, el nombre, las propiedades (estilos, clases y atributos de objeto) y el texto (lo que se esta envolviendo)
const button = create('button', {"data-id" : 123}, 'Button 1');

const button2 = create('button', {"data-id" : 456}, 'Button 2');

const button3 = create('button', {"data-id" : 789}, 'Button 3');

// Elemento envoltorio
// const div = React.createElement('div', null, [button, button2, button3]);

// Claro usar un div puede ser un tanto incómodo, para eso es útil un React.Fragment
const fragment = React.createElement(React.Fragment, null, [button, button2, button3])

// En React no se puede renderizar HTML de manera directa, primero se debe crear el elemento. Tampoco se puede renderizar más de un elemento a la vez, para eso se suele usar un elemento que envuelva a los demás
// root.render(div);

// Para evitar usar un div, podemos usar una función de React propia
root.render(fragment);