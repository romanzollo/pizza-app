function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    // if (!isOpen) return <p>Close</p>

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} />
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 and{' '}
                    {closeHour}:00.
                </p>
            )}
        </footer>
    );
}

function Order({ closeHour }) {
    return (
        <div className="order">
            <p>
                We`re open until {closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

export default Footer;
