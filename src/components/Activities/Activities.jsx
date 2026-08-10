import "./Activities.css";

function Activities() {
    return (
        <section id="activities" className="activities">

            <div className="section-inner">

                <div className="section-heading">
                    <h2>Choose Your Creative Adventure</h2>

                    <p>
                        From creative painting activities to birthday parties
                        and vacation care, there's something for every little artist.
                    </p>
                </div>

                <div className="activity-grid">

                    <div className="activity-card">
                        <div className="activity-icon">🎨</div>

                        <h3>Creative Painting</h3>

                        <p>
                            Let kids explore their creativity by painting
                            and decorating fun plaster figures.
                        </p>

                        <a href="#products" className="activity-link">
                            VIEW PRODUCTS →
                        </a>
                    </div>


                    <div className="activity-card">
                        <div className="activity-icon">🎂</div>

                        <h3>Birthday Parties</h3>

                        <p>
                            We bring the plaster figures, paints and creative
                            fun to your child's birthday party.
                        </p>

                        <a href="#parties" className="activity-link">
                            PLAN A PARTY →
                        </a>
                    </div>


                    <div className="activity-card">
                        <div className="activity-icon">🏫</div>

                        <h3>Vacation Care</h3>

                        <p>
                            Hands-on creative activities for OSHC, vacation
                            care, schools and community events.
                        </p>

                        <a href="#vacation-care" className="activity-link">
                            LEARN MORE →
                        </a>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Activities;