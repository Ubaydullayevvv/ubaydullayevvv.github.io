import React, {FunctionComponent} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

type TestimonialProps = {
    aosDelayTime: number,
    name: string,
    rating: number
    socialNetworkLogo?: string,
    socialNetworkLink?: string,
    feedback: string,
}
const Testimonial: FunctionComponent<TestimonialProps> = ({
                                                              aosDelayTime,
                                                              name,
                                                              rating,
                                                              socialNetworkLogo,
                                                              socialNetworkLink,
                                                              feedback,
                                                          }) => {

    // Prepare an array to contain the stars
    const stars = [];

    // Fill in the solid stars
    for (let i = 0; i < rating; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="rating-color"/>);
    }

    // If there are less than 5 stars, fill in the rest with regular stars
    for (let i = rating; i < 5; i++) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar}/>);
    }


    return (
        <>
            <div
                className="col-md-6 col-lg-4 mb-5 mb-lg-0"
                data-aos="fade"
                data-aos-delay={aosDelayTime}
            >
                <div className="person">
                    <h2>{name}</h2>
                    <div className="d-flex justify-content-between">
                        <div className="ratings">{stars}</div>
                        <a href={socialNetworkLink}>
                            <img src={socialNetworkLogo} alt="social-network-logo"
                                 className="social-network-logo mb-3"/>
                        </a>
                    </div>
                    <p className="mb-4 text-justify">
                        {feedback}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Testimonial;