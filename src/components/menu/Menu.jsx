import Pizza from '../pizza/Pizza';

import pizzaData from '../../data/data';

function Menu() {
    const pizzas = pizzaData;

    return (
        <main className="menu">
            <h2>Our menu</h2>

            {pizzas.length > 0 ? (
                <ul className="pizzas">
                    {pizzas.map((pizza) => (
                        <Pizza key={pizza.name} {...pizza} />
                    ))}
                </ul>
            ) : (
                <p>We're still working on our menu. Please come back late :)</p>
            )}
        </main>
    );
}

export default Menu;
