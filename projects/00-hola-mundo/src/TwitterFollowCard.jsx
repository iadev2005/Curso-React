import { useState } from "react"

// Importación para el manejo de estados (hook)

// Los hooks es para ejecutar código arbitrario cuando hay cierto evento con nuestras componentes

// Los props son los parámetros modificables del componente

// isFollowing es un valor booleano, y si no se pasa queda como undefined

// Si no pasamos el @ por acá lo podemos poner en App.jsx, o, que queremos poner un formato según el contexto
// export function TwitterFollowCard({ formatUserName, name, userName ,isFollowing}) {
//     const imageSrc = `https://unavatar.io/${userName}`
//     // Nunca modificar una prop, mejor usar una constante como lo hicimos con imageSrc
//     // name = `soy$(name)`
//     // Supongamos que nos pasaron un arreglo de número (numbers), y que al recibirlo le hagamos un push para agregar otro número, esto serí un grave error, ya que modificamos las props, las props deben ser inmutables
//     return (
//         <article className='tw-followCard'>
//             <header className='tw-followCard-header'>
//                 <img className='tw-followCard-avatar' alt="El avatar de midudev" src={imageSrc} />
//                 <div className='tw-followCard-info'>
//                     <strong>{name}</strong>
//                     <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
//                 </div>
//             </header>

//             <aside>
//                 <button className='tw-followCard-button'>
//                     Seguir
//                 </button>
//             </aside>
//         </article>
//     )
// }

// Con children recuperamos el texto envuelto hijo de la etiqueta twitter, aunque claro, esto en este caso, podríamos extraer cualquier cosa de children

// Se puede poner el valor unknown en caso de que no se reciba un userName
// export function TwitterFollowCard({children, userName = 'unknown', initialIsFollowing}) {
//     // Creamos nuestro estado, por defecto no se sigue a una persona, así que será false
//     // Usaremos la desempaquetación de JS para ahorrar líneas de código
//     const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
//     // Esto nos devuelve un array, en la primera posición tenemos el valor del estado (estado)
//     // const isFollowing = state[0]
//     // En la segunda posición tenemos una función que nos permitirá actualizar el estado (interruptor)
//     // const setIsFollowing = state[1]

//     // Acá detectamos los cambios del render
//     console.log('[TwitterFollowCard] render with userName: ', userName)

//     const imageSrc = `https://unavatar.io/${userName}`
//     // Nunca modificar una prop, mejor usar una constante como lo hicimos con imageSrc
//     // name = `soy$(name)`
//     // Supongamos que nos pasaron un arreglo de número (numbers), y que al recibirlo le hagamos un push para agregar otro número, esto serí un grave error, ya que modificamos las props, las props deben ser inmutables
//     const text = isFollowing ? 'Siguiendo' : 'Seguir'
//     const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

//     // Ahora para cambiar el estado lo que esperamos es un click, pero en vez de usar el clásico addEventListener de JS, podemos usar directamente onClick en el elemento button, ya que React es declarativo
//     const handleClick = () => {
//         setIsFollowing(!isFollowing) //Invertimos el valor del estado
//     }
//     return (
//         <article className='tw-followCard'>
//             <header className='tw-followCard-header'>
//                 <img className='tw-followCard-avatar' alt="El avatar de midudev" src={imageSrc} />
//                 <div className='tw-followCard-info'>
//                     <strong>{children}</strong>
//                     <span className='tw-followCard-infoUserName'>{`@${userName}`}</span>
//                 </div>
//             </header>

//             <aside>
//                 <button className={buttonClassName} onClick={handleClick}>
//                     {text}
//                 </button>
//             </aside>
//         </article>
//     )
// }

// Otro concepto importante son las prop children, por ejemplo en este momento "seguir" es hijo de button, y button a su vez es hijo de aside.

// Bueno ahora dejaré el código lo más limpio posible

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    console.log('[TwitterFollowCard] render with userName: ', userName)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt='El avatar de midudev'
                    src={`https://unavatar.io/${userName}`}
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}