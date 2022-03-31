const Contador = () => {

    let count = 0

    const decrement = () => {
        count = count -1
    }

    const increment = () => {
        count = count +1
    }

    return(
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Contador