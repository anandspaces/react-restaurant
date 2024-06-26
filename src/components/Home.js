function Home(){
    return (
        <>
        <main className="container mt-5">
            <div classNameName="row">
                <div className="col-md-9 order-md-1">
                    <h1 className="fw-bold text-warning">Patliputra Palate</h1>
                    <h2 className="text-secondary">Patna</h2>
                    <p className="lead">Experience the rich heritage of World with our fusion of ancient and modern flavors. Our restaurant offers a cultural journey through food, perfect for all occasions.</p>
                    <a href="#section1" className="btn btn-warning btn-lg">Reserve a Table</a>
                </div>
                <div className="col-md-3 order-md-2">
                    <img src="./images/exotic.jpeg" className="img-fluid rounded" alt="image_restaurant" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
            </div>

            <hr className="my-5" />
            <div className="row mb-4" id="menu1">
                <div className="col-md-9 mb-4 order-md-1">
                    <h3 className="text-secondary">Sushi</h3>
                    <p className="text-muted">Sushi is a Japanese dish that has taken the world by storm. In recent years, sushi has gained popularity in India, but it is still considered a niche cuisine. However, with Indian twists, sushi has the potential to reach new heights of popularity.</p>    
                </div>
                <div className="col-md-3 order-md-2">
                    <img src="./images/sushi.jpeg" className="img-fluid rounded" alt="sushi" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
            </div>
            <div className="row mb-4" id="menu2">
                <div className="col-md-9 mb-4 order-md-1">
                    <h3 className="text-secondary">Momo</h3>
                    <p className="text-muted">Momo, a Tibetan dish, has been a popular street food in India for decades. However, the Indian food scene is now shifting its focus to Bao and Tibetan buns, which are taking over the food scene.</p>
                </div>
                <div className="col-md-3 order-md-2">
                    <img src="./images/momo.jpeg" className="img-fluid rounded" alt="momo" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
            </div>
            <div className="row mb-4" id="menu3">
                <div className="col-md-9 mb-4 order-md-1">
                    <h3 className="text-secondary">Korean Cuisine</h3>
                    <p className="text-muted">Korean cuisine has been gaining popularity in India over the past few years. Korean noodles, also known as Ramyeon, have become a new favorite among food enthusiasts.</p>
                </div>
                <div className="col-md-3 order-md-2">
                    <img src="./images/korean_cuisine.jpeg" className="img-fluid rounded" alt="korean_cuisine" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
            </div>
            <div className="row mb-4" id="menu4">
                <div className="col-md-9 mb-4 order-md-1">
                    <h3 className="text-secondary">Pizza</h3>
                    <p className="text-muted">Pizza has been a popular food in India for many years, and there are many pizza chains across the country. However, people are now turning to authentic Italian pizza made in a firewood oven.</p>
                </div>
                <div className="col-md-3 order-md-2">
                    <img src="./images/pizza.jpeg" className="img-fluid rounded" alt="pizza" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div id="section1" className="p-4 border rounded mt-5">
                        <h2 className="mb-4">Reserve a Table</h2>
                        <hr className="my-3" />
                        <form action="" method="post">
                            <div className="mb-3">
                                {/* {% csrf_token %}
                                {{ form.as_p }} */}
                            </div>
                            <div className="d-grid">
                                <button type="submit" onclick="myFun()" className="btn btn-warning btn-lg">Confirm</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Home