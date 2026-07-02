import Tarjeta from './Tarjeta'
import './App.css'

function App() {
    return (
        <div className="contenedor">
            <h1>Tarjetas de presentación</h1>

            <div className="tarjetas-wrapper">
                <Tarjeta
                    nombre="Mariano Alvarez"
                    profesion="Desarrollador web"
                    imagen="./Imagenes/Mariano.png"
                    descripcion="Me estoy formando en desarrollo web, aprendiendo HTML, CSS y JS."
                />
                <Tarjeta
                    nombre="Laura Gomez"
                    profesion="Diseñadora UX"
                    imagen="./Imagenes/Laura.png"
                    descripcion="Apasionada por el diseño de interfaces y la experiencia de usuario."
                />
                <Tarjeta
                    nombre="Carla Ruiz"
                    profesion="Estudiante de programación"
                    imagen="./Imagenes/Carla.png"
                    descripcion="Cursando el primer año de la carrera de sistemas."
                />
            </div>
        </div>
    )
}

export default App
