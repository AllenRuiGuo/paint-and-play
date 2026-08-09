import "./Header.css";

function Header() {
    return (
        <header className="site-header">
            <div className="nav">
                <a href="#" className="logo">
                    <div className="logo-icon">🎨</div>
                    <span>Paint & Play</span>
                </a>

                <nav>
                    <a href="#shop">Shop</a>
                    <a href="#parties">Birthday Parties</a>
                    <a href="#incursions">Vacation Care</a>
                    <a href="#booking">Book Now</a>
                </nav>

                <button className="cart">
                    🛒 Cart (<span>0</span>)
                </button>

                <button className="mobile-menu">
                    ☰
                </button>
            </div>
        </header>
    );
}

export default Header;