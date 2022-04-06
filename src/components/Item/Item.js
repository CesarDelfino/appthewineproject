const Item = ({name, img}) => {
    return(
        <section>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <h3>{name}</h3>
            <button>Características</button>
        </section>
    )
}

export default Item;