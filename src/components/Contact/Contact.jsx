import "./Contact.css";

function Contact({ isOpen, onClose }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="contact-modal-overlay" onClick={onClose}>

            <div
                className="contact-modal"
                onClick={(event) => event.stopPropagation()}
            >

                <button
                    className="contact-close"
                    onClick={onClose}
                    aria-label="Close contact form"
                >
                    ×
                </button>


                <div className="contact-info">

                    <span className="contact-label">
                        💌 Get in Touch
                    </span>

                    <h2>
                        We'd love to
                        <span> hear from you!</span>
                    </h2>

                    <p>
                        Have a question about our products, birthday parties
                        or vacation care activities? Get in touch with us
                        and we'll be happy to help.
                    </p>


                    <div className="contact-details">

                        <div className="contact-detail">
                            <div className="contact-icon">
                                📞
                            </div>

                            <div>
                                <h3>Phone</h3>
                                <a href="tel:0416882295">
                                    0416 882 295
                                </a>
                            </div>
                        </div>


                        <div className="contact-detail">
                            <div className="contact-icon">
                                🕐
                            </div>

                            <div>
                                <h3>Hotline Hours</h3>
                                <p>
                                    Monday – Friday<br />
                                    9:00 am – 1:00 pm
                                </p>
                            </div>
                        </div>


                        <div className="contact-detail">
                            <div className="contact-icon">
                                ✉️
                            </div>

                            <div>
                                <h3>Email</h3>
                                <a href="mailto:plasterpals@gmail.com">
                                    plasterpals@gmail.com
                                </a>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="contact-form-wrapper">

                    <h3>Send us a message</h3>

                    <form className="contact-form">

                        <div className="form-group">
                            <label htmlFor="contact-name">
                                Name
                            </label>

                            <input
                                type="text"
                                id="contact-name"
                                name="name"
                                placeholder="Your name"
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="contact-email">
                                Email
                            </label>

                            <input
                                type="email"
                                id="contact-email"
                                name="email"
                                placeholder="Your email"
                                required
                            />
                        </div>


                        <div className="form-group">
                            <label htmlFor="contact-message">
                                Message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                rows="5"
                                placeholder="How can we help?"
                                required
                            ></textarea>
                        </div>


                        <button
                            type="submit"
                            className="contact-submit"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Contact;