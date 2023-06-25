import React from 'react';

const Testimonial = () => {
    return (
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
    );
};

export default Testimonial;