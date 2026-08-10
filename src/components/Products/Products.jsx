import "./Products.css";

function Products() {
    return (
        <section id="products" className="products-section">

            <div className="section-inner">

                <div className="section-heading">
                    <h2>🎨 Our Products</h2>

                    <p>
                        Choose from our collection of fun plaster figures,
                        ready to be painted, decorated and brought to life.
                    </p>
                </div>


                <div className="product-grid">

                    <div className="product-card">

                        <div className="product-image pink-bg">
                            🦄
                        </div>

                        <div className="product-info">
                            <h3>Rainbow Unicorn</h3>

                            <p>
                                A magical unicorn plaster figure ready
                                for kids to paint and decorate.
                            </p>
                        </div>

                    </div>


                    <div className="product-card">

                        <div className="product-image blue-bg">
                            🦖
                        </div>

                        <div className="product-info">
                            <h3>Dinosaur Adventure</h3>

                            <p>
                                A fun dinosaur figure for little artists
                                who love prehistoric adventures.
                            </p>
                        </div>

                    </div>


                    <div className="product-card">

                        <div className="product-image yellow-bg">
                            🐰
                        </div>

                        <div className="product-info">
                            <h3>Happy Bunny</h3>

                            <p>
                                A cute bunny figure ready for colourful
                                painting and creative decoration.
                            </p>
                        </div>

                    </div>


                    <div className="product-card">

                        <div className="product-image purple-bg">
                            🧚
                        </div>

                        <div className="product-info">
                            <h3>Fairy Garden</h3>

                            <p>
                                A magical fairy figure that lets children
                                create their own colourful masterpiece.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Products;