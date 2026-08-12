import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <a href="#" className="footer-logo">
                        <img
                            src={`${import.meta.env.BASE_URL}logo.png`}
                            alt="Plaster Pals"
                        />
                    </a>

                    <p>
                        Creative fun for little artists.
                    </p>
                </div>


                <div className="footer-links">
                    <h3>Explore</h3>

                    <a href="#activities">Activities</a>
                    <a href="#products">Products</a>
                    <a href="#parties">Birthday Parties</a>
                    <a href="#vacation-care">Vacation Care</a>
                </div>


                <div className="footer-contact" id="contact">
                    <h3>Contact</h3>

                    <p>
                        We'd love to hear from you!
                    </p>

                    <a href="mailto:help.plasterpals@gmail.com">
                        help.plasterpals@gmail.com
                    </a>
                </div>

            </div>


            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Plaster Pals. All rights reserved.
                </p>
            </div>

        </footer>
    );
}

export default Footer;