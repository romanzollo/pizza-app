function Pizza({ name, ingredients, photoName, price, soldOut }) {
    // if pizza is sold out do not render component
    if (soldOut) return null;

    return (
        <li className="pizza">
            <img src={photoName} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{price}</span>
            </div>
        </li>
    );
}

export default Pizza;
