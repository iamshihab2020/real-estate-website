import PropTypes from "prop-types";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CSS/testimonial.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TestiSlider = ({ testimonials }) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className=" p-10 card-side bg-base-100 shadow-xl flex items-center flex-col md:flex-row lg:flex-row">
              <figure className="w-full md:w-1/2 lg:w-1/2 rounded-xl">
                <img
                  src={testimonial.image_url}
                  alt="Movie"
                  className="max-h-80 lg:h-full object-cover"
                />
              </figure>
              <div className="card-body w-full md:w-1/2 lg:w-1/2">
                <div>
                  <h2 className="card-title">{testimonial.name}</h2>
                  <p className=" label label-text ">{testimonial.occupation}</p>
                </div>
                <p className="text-justify">{testimonial.testimonial_description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


TestiSlider.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.object),
};

export default TestiSlider;
