const Boton = (props) => {
    return(
        <button className="Boton" onClick={props.callback}>{props.label}</button>
    )
}

export default Boton