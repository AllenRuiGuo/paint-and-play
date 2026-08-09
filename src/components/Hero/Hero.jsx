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
                        Plaster toys, creative painting kits and unforgettable children's parties — everything kids need to paint, create and have fun.
                    </p>

                    <div className="hero-buttons">                       
                        <a href="#activities" className="btn btn-primary">
                            Explore Activities
                        </a>

                        <a href="#products" className="btn btn-secondary">
                            Explore Products
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