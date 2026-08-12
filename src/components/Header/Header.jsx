import "./Header.css";

function Header({ onContactClick }) {
    return (
        <header className="site-header">
            <div className="nav">
                <a href="#" className="logo">
                    <div className="logo-icon">
                        <img
                            src="/logo.png"
                            alt="Plaster Pals"
                            className="logo-image"
                        />
                    </div>
                    <span>Plaster Pals</span>
                </a>

                <nav>                    
                    <a href="#activities">Activities</a>
                    <a href="#products">Products</a>
                </nav>

                <button 
                    type="button" 
                    className="contact-button" 
                    onClick={onContactClick} 
                > 
                    Contact 
                </button>

            </div>
        </header>
    );
}

export default Header;
