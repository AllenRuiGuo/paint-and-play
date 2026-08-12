import { useState } from "react";
import "./Contact.css";

function Contact({ isOpen, onClose }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    if (!isOpen) {
        return null;
    }

    const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(event.target);

    formData.append(
        "access_key",
        "8e7a3ce3-1ac8-43e4-a5cf-049500dd41b5"
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            }
        );

        const result = await response.json();

        if (result.success) {
            setSubmitMessage(
                "Thank you! Your message has been sent."
            );

            event.target.reset();
        } else {
            setSubmitMessage(
                "Something went wrong. Please try again."
            );
        }

        } catch (error) {
            setSubmitMessage(
                "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                <a href="mailto:help.plasterpals@gmail.com">
                                    help.plasterpals@gmail.com
                                </a>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="contact-form-wrapper">

                    <h3>Send us a message</h3>

                    <form className="contact-form" onSubmit={handleSubmit}>

                        <input
                            type="hidden"
                            name="subject"
                            value="New enquiry from Plaster Pals website"
                        />

                        <input
                            type="checkbox"
                            name="botcheck"
                            style={{ display: "none" }}
                        />

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
                            <label htmlFor="enquiry-type">
                                What can we help you with?
                            </label>

                            <select
                                id="enquiry-type"
                                name="enquiry_type"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Please select
                                </option>

                                <option value="General Enquiry">
                                    General Enquiry
                                </option>

                                <option value="Birthday Party">
                                    Birthday Party
                                </option>

                                <option value="Vacation Care">
                                    Vacation Care
                                </option>

                                <option value="Products">
                                    Products
                                </option>
                            </select>
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
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>   

                        {submitMessage && (
                            <p className="contact-submit-message">
                                {submitMessage}
                            </p>
                        )}

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Contact;