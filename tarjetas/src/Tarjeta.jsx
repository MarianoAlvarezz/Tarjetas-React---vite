import './Tarjeta.css'

function Tarjeta(props) {
    return (
        <div className="tarjeta">
            <img src={props.imagen} alt={"Foto de " + props.nombre} />
            <h2>{props.nombre}</h2>
            <h3>{props.profesion}</h3>
            <p>{props.descripcion}</p>
        </div>
    )
}

export default Tarjeta
