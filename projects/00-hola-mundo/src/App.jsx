import './App.css'

// Export es para exportar el componente

// Hay dos maneras de estilizar en React, la primera es con estilos en línea, pero lo tendríamos que hacer como si fueran objetos, y la segunda es con un archivo css

// Para evitar conflictos con los selectores usaremos los className

export function App() {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="El avatar de midudev" src="https://unavatar.io/midudev"/>
                <div className='tw-followCard-info'>
                    <strong>Miguel Ángel Durán</strong>
                    <span className='tw-followCard-infoUserName'>@midudev</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}