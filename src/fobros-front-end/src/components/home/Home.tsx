import React, {useState} from 'react';
import {Button, Dropdown, Form, FormControl, InputGroup} from 'react-bootstrap';
import './DropdownInput.css';

const Home = () => {

    const [showPickupLocation, setShowPickupLocation] = useState(false);
    const [showDeliveryLocation, setShowDeliveryLocation] = useState(false);
    const [selectedPickupLocation, setSelectedPickupLocation] = useState('');
    const [selectedDeliveryLocation, setSelectedDeliveryLocation] = useState('');
    const [cities, setCities] = useState([
        "City 1",
        "City 2",
        "City 3",
        "City 4",
        "Aa City 1",
        "Aa City 2",
        "Aa City 3",
        "Aa City 4",
        "Bb City 1",
        "Bb City 2",
        "Bb City 3",
        "Bb City 4",
        "Cc City 1",
        "Cc City 2",
        "Cc City 3",
        "Cc City 4",
        "Dd City 4",
        "Ee City 5",
        "Ff City 6",
        "Gg City 7",
        "Hh City 8",
    ]);
    const handleSelectPickupLocation = (selectedValue: string | null) => {
        if (selectedValue) {
            setSelectedPickupLocation(selectedValue);
            setShowPickupLocation(false);
        }
    };

    const handleSelectDeliveryLocation = (selectedValue: string | null) => {
        if (selectedValue) {
            setSelectedDeliveryLocation(selectedValue);
            setShowDeliveryLocation(false);
        }
    };

    const filteredItemsPickup = cities.filter(
        city => city.toLowerCase().includes(selectedPickupLocation.toLowerCase())
    );

    const filteredItemsDelivery = cities.filter(
        city => city.toLowerCase().includes(selectedDeliveryLocation.toLowerCase())
    );


    function autocompleteStates() {
        console.log("autocompleteStates working...")
    }

    return (
        <>
            <div className="marquee">
              <span>
                Ship your vehicle safely and securely with Fobros Group LLC. Get a <a href="quote.html"
                                                                                      style={{color: "#F89D13FF"}}>Quote</a> now and experience hassle-free auto transport services
              </span>
            </div>
            <div className="site-wrap">
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"/>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>
                {/* -- HEADER -- */}
                <header className="site-navbar py-3" role="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-11 col-xl-2">
                                <h1 className="mb-0">
                                    <a href="index.html" className="text-white h2 mb-0">
                                        Fobros Group
                                    </a>
                                </h1>
                            </div>
                            <div className="col-12 col-md-10 d-none d-xl-block">
                                <nav
                                    className="site-navigation position-relative text-right"
                                    role="navigation"
                                >
                                    <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                        <li className="active">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li className="has-children">
                                            <a href="#">Company</a>
                                            <ul className="dropdown">
                                                <li>
                                                    <a href="#">Reviews</a>
                                                </li>
                                                <li>
                                                    <a href="#">Vision and Mission</a>
                                                </li>
                                                <li>
                                                    <a href="#">Leadership Team</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="industries.html">Industries</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                        <li id="quote-btn">
                                            <a href="quote.html">Get a Quote</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div
                                className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                                style={{position: "relative", top: 3}}
                            >
                                <a href="#" className="site-menu-toggle js-menu-toggle text-white">
                                    <span className="icon-menu h3"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div
                    className="site-blocks-cover overlay"
                    style={{backgroundImage: "url(./src/assets/images/home-page.jpg)"}}
                    data-aos="fade"
                    data-stellar-background-ratio="0.5"
                >
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-8" data-aos="fade-up" data-aos-delay={400}>
                                <h1 className="text-white font-weight-light mb-5 text-uppercase font-weight-bold">
                                    Worldwide Freight Services
                                </h1>
                                <p>
                                    <a href="quote.html" className="btn btn-primary py-3 px-5 text-white">
                                        Get Quote!
                                    </a>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <div className="form-panel">
                                    <Form>
                                        <p style={{color: "#666"}}>Start your Free Quote</p>
                                        {/* === PICKUP LOCATION === */}
                                        <Form.Group className="mb-3" controlId="quoteFrom.pickupLocation">
                                            <Form.Label>Pickup location</Form.Label>
                                            <InputGroup onClick={() => setShowPickupLocation(!showPickupLocation)}>
                                                <FormControl
                                                    style={{fontSize: 12}}
                                                    placeholder="Enter zip code or city"
                                                    value={selectedPickupLocation}
                                                    onChange={(e) => setSelectedPickupLocation(e.target.value)}
                                                />
                                                <InputGroup>
                                                    <Dropdown show={showPickupLocation}
                                                              onSelect={handleSelectPickupLocation}>
                                                        {/*<Dropdown.Toggle split variant="outline-secondary" id="dropdown-split-basic" />*/}

                                                        <Dropdown.Menu className="dropdown-scrollable">
                                                            {filteredItemsPickup.map((item, idx) => (
                                                                <Dropdown.Item eventKey={item} key={idx}>
                                                                    {item}
                                                                </Dropdown.Item>
                                                            ))}
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </InputGroup>
                                            </InputGroup>
                                        </Form.Group>
                                        {/* === DELIVERY LOCATION === */}
                                        <Form.Group className="mb-3" controlId="quoteFrom.deliveryLocation">
                                            <Form.Label>Delivery location</Form.Label>
                                            <InputGroup onClick={() => setShowDeliveryLocation(!showDeliveryLocation)}>
                                                <FormControl
                                                    style={{fontSize: 12}}
                                                    placeholder="Enter zip code or city"
                                                    value={selectedDeliveryLocation}
                                                    onChange={(e) => setSelectedDeliveryLocation(e.target.value)}
                                                />
                                                <InputGroup>
                                                    <Dropdown show={showDeliveryLocation}
                                                              onSelect={handleSelectDeliveryLocation}>
                                                        <Dropdown.Menu className="dropdown-scrollable">
                                                            {filteredItemsDelivery.map((item, idx) => (
                                                                <Dropdown.Item eventKey={item} key={idx}>
                                                                    {item}
                                                                </Dropdown.Item>
                                                            ))}
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </InputGroup>
                                            </InputGroup>
                                        </Form.Group>
                                        <div className="question">
                                            <label>Select Transport type</label>
                                            <div className="question-answer">
                                                <div className="d-flex">
                                                    <div className="col-md-4">
                                                        <input
                                                            type="radio"
                                                            defaultValue="none"
                                                            id="radio_1"
                                                            name="transportType"
                                                        />
                                                        <label htmlFor="radio_1" className="radio">
                                                            <span>Open</span>
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input
                                                            type="radio"
                                                            defaultValue="none"
                                                            id="radio_2"
                                                            name="transportType"
                                                        />
                                                        <label htmlFor="radio_2" className="radio">
                                                            <span>Enclosed</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-block">
                                            <button type="submit">
                                                SUBMIT
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*todo: write more content*/}
                {/* SECTIONS */}
                <div className="site-section border-bottom">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-7 text-center border-primary">
                                <h2 className="font-weight-light text-primary">Testimonials</h2>
                            </div>
                        </div>
                        <div className="slide-one-item home-slider owl-carousel">
                            <div>
                                <div className="testimonial">
                                    <figure className="mb-4">
                                        <img
                                            src="./src/assets/images/person_3.jpg"
                                            alt="Image"
                                            className="img-fluid mb-3"
                                        />
                                        <p>John Smith</p>
                                    </figure>
                                    <blockquote>
                                        <p>
                                            “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae
                                            explicabo animi minima fuga beatae illum eligendi incidunt
                                            consequatur. Amet dolores excepturi earum unde iusto.”
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <div>
                                <div className="testimonial">
                                    <figure className="mb-4">
                                        <img
                                            src="./src/assets/images/person_2.jpg"
                                            alt="Image"
                                            className="img-fluid mb-3"
                                        />
                                        <p>Christine Aguilar</p>
                                    </figure>
                                    <blockquote>
                                        <p>
                                            “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae
                                            explicabo animi minima fuga beatae illum eligendi incidunt
                                            consequatur. Amet dolores excepturi earum unde iusto.”
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <div>
                                <div className="testimonial">
                                    <figure className="mb-4">
                                        <img
                                            src="./src/assets/images/person_4.jpg"
                                            alt="Image"
                                            className="img-fluid mb-3"
                                        />
                                        <p>Robert Spears</p>
                                    </figure>
                                    <blockquote>
                                        <p>
                                            “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae
                                            explicabo animi minima fuga beatae illum eligendi incidunt
                                            consequatur. Amet dolores excepturi earum unde iusto.”
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                            <div>
                                <div className="testimonial">
                                    <figure className="mb-4">
                                        <img
                                            src="./src/assets/images/person_5.jpg"
                                            alt="Image"
                                            className="img-fluid mb-3"
                                        />
                                        <p>Bruce Rogers</p>
                                    </figure>
                                    <blockquote>
                                        <p>
                                            “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae
                                            explicabo animi minima fuga beatae illum eligendi incidunt
                                            consequatur. Amet dolores excepturi earum unde iusto.”
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*    FOOTER   */}
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h2 className="footer-heading mb-4">Quick Links</h2>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Services</a>
                                            </li>
                                            <li>
                                                <a href="#">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <h2 className="footer-heading mb-4">Products</h2>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Services</a>
                                            </li>
                                            <li>
                                                <a href="#">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <h2 className="footer-heading mb-4">Features</h2>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Services</a>
                                            </li>
                                            <li>
                                                <a href="#">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <h2 className="footer-heading mb-4">Follow Us</h2>
                                        <a href="#" className="pl-0 pr-3">
                                            <span className="icon-facebook"/>
                                        </a>
                                        <a href="#" className="pl-3 pr-3">
                                            <span className="icon-twitter"/>
                                        </a>
                                        <a href="#" className="pl-3 pr-3">
                                            <span className="icon-instagram"/>
                                        </a>
                                        <a href="#" className="pl-3 pr-3">
                                            <span className="icon-linkedin"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
                                <form action="#" method="post">
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control border-secondary text-white bg-transparent"
                                            placeholder="Enter Email"
                                            aria-label="Enter Email"
                                            aria-describedby="button-addon2"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-primary text-white"
                                                type="button"
                                                id="button-addon2"
                                            >Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row pt-5 mt-5 text-center">
                            <div className="col-md-12">
                                <div className="border-top pt-5">
                                    <p>Copyright © All rights reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>

        </>
    );
};

export default Home;