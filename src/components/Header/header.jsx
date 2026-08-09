import "./Header.css";

function Header() {
    return (
        <header className="site-header">
            <div className="nav">
                <a href="#" className="logo">
                    <div className="logo-icon">🎨</div>
                    <span>Plaster Pals</span>
                </a>

                <nav>                    
                    <a href="#activities">Activities</a>
                    <a href="#products">Products</a>
                </nav>

                <a href="#contact" className="contact-button">
                    Contact
                </a>

            </div>
        </header>
    );
}

export default Header;