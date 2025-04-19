import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import { useState } from 'react'
// Export es para exportar el componente

// Hay dos maneras de estilizar en React, la primera es con estilos en línea, pero lo tendríamos que hacer como si fueran objetos, y la segunda es con un archivo css

// Para evitar conflictos con los selectores usaremos los className

// El <> </> es equivalente a usar el React.Fragment

// export function App() {
//     return (
//         <>
//             <TwitterFollowCard name="Miguel Ángel Durán" userName="midudev" isFollowing="Siguiendo"/>
//             <TwitterFollowCard name="Lionel Andrés Messi" userName="messi" isFollowing="Siguiendo"/>
//             <TwitterFollowCard name="El Rubius" userName="rubius" isFollowing="Siguiendo"/>
//         </>

//     )
// }

// Como es un booleano basta con pasar isFollowing (true) es suficiente, no existe la forma negada de manera directa, la otra opción es isFollowing={true}

// El formatUserName es para darnos cuenta que también podemos enviar funciones como parámetros (callbacks), en este caso, para modificar una parte de la componente según el contexto. Acá le pasamos una función que ejecutará en TwitterFollowCard.jsx

// React renderiza elementos
// Componente: Factoría de los elementos
// Elemento: Producto final de un componente

// export function App() {
//     const formatUserName = (userName) => `@${userName}`
//     return (
//         <section className='App'>
//             <TwitterFollowCard formatUserName={formatUserName} name={"Miguel Ángel Durán"} userName={"midudev"} isFollowing />
//             <TwitterFollowCard formatUserName={formatUserName} name={"Lionel Andrés Messi"} userName={"messi"} isFollowing />
//             <TwitterFollowCard formatUserName={formatUserName} name={"El Rubius"} userName={"rubius"} isFollowing={false} />
//         </section>
//     )
// }

// Supongamos que queremos pasar el nombre envuelto
// export function App () {
//     // Otra manera de pasar la prop, es como un objeto, esto no es recomendable, a menos, que sean muchas prop
//     const messi = {isFollowing: true, userName: "Messi"}
//     return (
//         <section className='App'>
//             <TwitterFollowCard isFollowing userName={"midudev"}>
//                 Miguel Ángel Durán
//             </TwitterFollowCard>
//             <TwitterFollowCard {... messi}>
//                 Lionel Andrés Messi
//             </TwitterFollowCard>
//             <TwitterFollowCard isFollowing={false}>
//                 Unknown
//             </TwitterFollowCard>
//         </section>
//     )
// }

// Ahora en vez de que isFollowing sea un prop, haremos que sea un estado
// export function App () {
//     // Otra manera de pasar la prop, es como un objeto, esto no es recomendable, a menos, que sean muchas prop. Para eso importaremos una utilidad llamada useState, eso lo haremos en TwitterFollowCard.jsx

//     // Otra cosa interesante, es que como ya vimos en TwitterFollowCard.jsx, cuando hacemos un cambio de estado, este solo afecta a la componente asociada, pero, si hicieramos eso aquí, donde estamos almacenando a todas las componentes, ese cambio afecta a todos las componentes, ejemplo:

//     // Cambio de estado:
//     const [name, setName] = useState('midudev')

//     console.log('Render with name: ', name)

//     // La función flecha se puede hacer tanto afuera como dentro del return

//     // Ojo, renderizar desde acá no quiere decir que estamos sobre-escribiendo la app, simplemente renderizamos los nuevos elementos, React entiende que si no se hicieron cambios no hace falta modificar esa parte del DOOM

//     // Cuando usamos una prop para inicializar un estado usamos initial como prefijo

//     return (
//         <section className='App'>
//             <TwitterFollowCard userName={name}>
//                 Miguel Ángel Durán
//             </TwitterFollowCard>
//             <TwitterFollowCard userName={"messi"} initialIsFollowing= {true}>
//                 Lionel Andrés Messi
//             </TwitterFollowCard>
//             <TwitterFollowCard>
//                 Unknown
//             </TwitterFollowCard>
//             <button onClick={() => setName('messi')}>
//                 Cambio de Nombre
//             </button>
//         </section>
//     )
// }

// Un concepto fundamental es entender que una prop solo se inicializa una vez, es decir, si le vamos a hacer cambios, debe ser desde el componente hijo en este caso TwitterFollowCard.jsx, esto con la función setIsFollowing, hacerlo desde App.jsx, no funcionará ya que solo lo inicializará la primera vez y después no tendrá control sobre lo que pasa en el hijo

// Acá dejaré el código limpio

// Un caso real suele darse cuando hay un array de elementos, en estos casos se trabaja así

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]

// Para usar este array lo podemos mapear con JS (se esta retornando de manera directa)

// Cuando se mapea se puede hacer uso de un index, pero esto no se suele recomendar en estos casos ya que existe el peligro que se repita. Lo mejor es usar como key algo que sepamos que es único de ese elemento. Usar un math random también es mala práctica, si usamos índices lo debemos declarar en el campo del objeto. De lejos lo más profesional sería una id de una BD
export function App() {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                    // Es obligatorio usar el key (identificador único) para que react diferencie los elementos del mapeo, esto solo porque estamos mapeando
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}