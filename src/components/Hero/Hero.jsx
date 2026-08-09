import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-content">

                <div className="hero-text">

                    <div className="hero-badge">
                        🎨 Creative fun for kids
                    </div>

                    <h1>
                        Paint.
                        <br />
                        Create.
                        <br />
                        <span>Celebrate!</span>
                    </h1>

                    <p>
                        Plaster toys, creative painting kits and unforgettable
                        children's parties — delivered to your door.
                    </p>

                    <div className="hero-buttons">
                        <a href="#products" className="btn btn-primary">
                            Explore Products
                        </a>

                        <a href="#activities" className="btn btn-secondary">
                            Explore Activities
                        </a>
                    </div>

                </div>


                <div className="creative-scene">

                    <div className="blob"></div>

                    <div className="toy toy-one">
                        🦄
                    </div>

                    <div className="toy toy-two">
                        🦖
                    </div>

                    <div className="toy toy-three">
                        🐰
                    </div>

                    <div className="paint-dot dot-one"></div>
                    <div className="paint-dot dot-two"></div>

                </div>

            </div>

        </section>
    );
}

export default Hero;