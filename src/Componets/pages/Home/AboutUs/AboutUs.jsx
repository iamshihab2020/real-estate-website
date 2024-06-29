
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import "./CSS/about.css";

const AboutUs = () => {
  return (
    <>
      <div className="py-20">
        <h1 className=" text-4xl lg:text-5xl font-bold text-center py-16">
          About Us
        </h1>

        <div className="swipeBody">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="min-h-screen bg-[url('https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-no-repeat bg-center bg-opacity-15 rounded-xl">
                <div className="bg-white bg-opacity-20 backdrop-blur-lg p-10 rounded-xl shadow-lg min-h-screen flex flex-col items-center justify-center">
                  <div className="">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      What are we?
                    </h2>
                    <p className=" text-white px-0 md:px-22 lg:px-36 text-center mt-2 text-2xl lg:text-3xl ">
                      Welcome to Sanctuary Real Estate. We specialize in
                      residential real estate internationally, offering
                      personalized service and expert guidance
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="min-h-screen bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat bg-center bg-opacity-15 rounded-xl">
                <div className="bg-white bg-opacity-20 backdrop-blur-lg p-10 rounded-xl shadow-lg min-h-screen flex flex-col items-center justify-center">
                  <div className="">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      What we can offers?
                    </h2>
                    <p className=" text-white px-0 md:px-22 lg:px-36 text-center mt-2 text-2xl lg:text-3xl ">
                      <b>1. Expert Guidance: </b>Specializing in personalized
                      service and expert advice.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="min-h-screen bg-[url('https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat bg-center bg-opacity-15 rounded-xl">
                <div className="bg-white bg-opacity-20 backdrop-blur-lg p-10 rounded-xl shadow-lg min-h-screen flex flex-col items-center justify-center">
                  <div className="">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      What we can offers?
                    </h2>
                    <p className=" text-white px-0 md:px-22 lg:px-36 text-center mt-2 text-2xl lg:text-3xl  ">
                      <b>2. Your Dream Home: </b>Contact us today to find the
                      perfect place to call home.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="min-h-screen bg-[url('https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat bg-center bg-opacity-15 rounded-xl">
                <div className="bg-white bg-opacity-20 backdrop-blur-lg p-10 rounded-xl shadow-lg min-h-screen flex flex-col items-center justify-center">
                  <div className="">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      What we can offers?
                    </h2>
                    <p className=" text-white px-0 md:px-22 lg:px-36 text-center mt-2 text-2xl lg:text-3xl ">
                      <b>3. Seamless Experience </b>Whether buying, selling, or
                      renting trust us to make it smooth and successful.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
