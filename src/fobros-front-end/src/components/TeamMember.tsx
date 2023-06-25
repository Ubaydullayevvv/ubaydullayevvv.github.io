import React, {FunctionComponent} from 'react';

type TestimonialProps = {
    aosDelayTime: number,
    name: string,
    position: string,
    phoneNumber?: string,
    email?: string,
    info: string,
}
const Testimonial: FunctionComponent<TestimonialProps> = ({
                                                              aosDelayTime,
                                                              name,
                                                              position,
                                                              phoneNumber,
                                                              email,
                                                              info,
                                                          }) => {

    return (
        <>
            <div
                className="col-md-6 col-lg-4 mb-5 mb-lg-0"
                data-aos="fade"
                data-aos-delay={aosDelayTime}
            >
                <div className="person">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h3>{name}</h3>
                            <p className="position text-muted">{position}</p>
                        </div>
                        <ul className="ul-social-circle">
                            <li>
                                <a href={`tel:${phoneNumber}`}>
                                    <span className="icon-phone"/>
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${email}`}>
                                    <span className="icon-envelope"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p className="mb-4">
                        {info}
                    </p>

                </div>
            </div>
        </>
    );
};

export default Testimonial;