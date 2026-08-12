import "./VacationCare.css";

function VacationCare({ onContactClick }) {
    return (
        <section id="vacation-care" className="vacation-section">

            <div className="vacation-container">

                <div className="vacation-visual">

                    <div className="vacation-blob"></div>

                    <div className="vacation-card vacation-card-main">
                        🎨
                    </div>

                    <div className="vacation-card vacation-card-small">
                        ✨
                    </div>

                    <div className="vacation-shape shape-one"></div>
                    <div className="vacation-shape shape-two"></div>

                </div>


                <div className="vacation-content">

                    <span className="vacation-label">
                        🌈 Vacation Care
                    </span>

                    <h2>
                        Creative activities
                        <span> for little artists</span>
                    </h2>

                    <p>
                        Keep children entertained during the school holidays
                        with fun, hands-on plaster painting and creative
                        activities designed to inspire imagination.
                    </p>

                    <div className="vacation-features">

                        <div className="vacation-feature">
                            <span>🎨</span>

                            <div>
                                <h3>Hands-on Creativity</h3>
                                <p>
                                    Children can paint, decorate and create
                                    something they can be proud of.
                                </p>
                            </div>
                        </div>

                        <div className="vacation-feature">
                            <span>👩‍🎨</span>

                            <div>
                                <h3>Fun for Groups</h3>
                                <p>
                                    A creative activity that works well for
                                    groups of children.
                                </p>
                            </div>
                        </div>

                        <div className="vacation-feature">
                            <span>🌟</span>

                            <div>
                                <h3>Memorable Experiences</h3>
                                <p>
                                    A colourful and engaging way to spend
                                    time during the school holidays.
                                </p>
                            </div>
                        </div>

                    </div>

                    <button
                        type="button"
                        className="vacation-button"
                        onClick={onContactClick}
                    >
                        Enquire About Vacation Care
                    </button>

                </div>

            </div>

        </section>
    );
}

export default VacationCare;