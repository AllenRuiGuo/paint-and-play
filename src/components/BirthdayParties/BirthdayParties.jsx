import "./BirthdayParties.css";

function BirthdayParties({ onContactClick }) {
    return (
        <section id="parties" className="birthday-section">

            <div className="birthday-container">

                <div className="birthday-content">

                    <span className="birthday-label">
                        🎉 Birthday Parties
                    </span>

                    <h2>
                        Make their birthday
                        <span> extra creative!</span>
                    </h2>

                    <p>
                        Give your little artist a birthday party they'll
                        remember. Kids can paint, decorate and bring their
                        own plaster creations to life while having fun
                        with their friends.
                    </p>

                    <div className="birthday-features">

                        <div className="birthday-feature">
                            <span>🎨</span>
                            <div>
                                <h3>Creative Fun</h3>
                                <p>
                                    A hands-on painting activity for everyone.
                                </p>
                            </div>
                        </div>

                        <div className="birthday-feature">
                            <span>🎁</span>
                            <div>
                                <h3>Party Experience</h3>
                                <p>
                                    A fun and memorable activity for their
                                    special day.
                                </p>
                            </div>
                        </div>

                        <div className="birthday-feature">
                            <span>✨</span>
                            <div>
                                <h3>Take Home Your Creation</h3>
                                <p>
                                    Each child gets to keep their finished
                                    plaster masterpiece.
                                </p>
                            </div>
                        </div>

                    </div>

                    <button
                        type="button"
                        className="birthday-button"
                        onClick={onContactClick}
                    >
                        Enquire About a Party
                    </button>

                </div>


                <div className="birthday-visual">

                    <div className="birthday-blob"></div>

                    <div className="birthday-card birthday-card-main">
                        🎂
                    </div>

                    <div className="birthday-card birthday-card-small">
                        🎨
                    </div>

                    <div className="birthday-sparkle sparkle-one">
                        ✦
                    </div>

                    <div className="birthday-sparkle sparkle-two">
                        ✦
                    </div>

                </div>

            </div>

        </section>
    );
}

export default BirthdayParties;