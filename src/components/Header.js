function Header() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="{% url 'home' %}">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                                Menu
                            {/* </a> */}
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#menu1">Sushi</a></li>
                                <li><a className="dropdown-item" href="#menu2">Momo</a></li>
                                <li><a className="dropdown-item" href="#menu3">Korean Cuisine</a></li>
                                <li><a className="dropdown-item" href="#menu4">Pizza</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            {/* <a classNameName="nav-link" href="#"> */}
                                Shop
                            {/* </a> */}
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header