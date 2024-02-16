"use client"
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    company: "Company XYZ",
  },
  {
    id: 2,
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Jane Smith",
    company: "ABC Inc.",
  },
  // Add more testimonials as needed
];

const SlidingTestimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="mx-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">{testimonial.content}</p>
                <p className="text-gray-800 font-semibold mt-4">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlidingTestimonials;
