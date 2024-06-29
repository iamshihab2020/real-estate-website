// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CSS/banner.css";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "animate.css/animate.min.css";


const Banner = () => {
  return (
    <div className=" z-10 animate__animated  animate__fadeInUp animate__delay-1s">
      <Swiper
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-2"
      >
        <SwiperSlide>
          <div className="flex justify-evenly gap-10 items-center flex-col md:flex-col lg:flex-row w-full py-10">
            <div className="w-full lg:w-2/4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Find Your Dream Place in City
              </h1>
              <Link
                to={`/register`}
                className="mt-5 uppercase px-5 lg:px-7 py-0 h-2 btn bg-bgColor1 text-white hover:text-textColorMain rounded-full border-p2"
              >
                {" "}
                Explore
              </Link>
            </div>
            <div className="w-full lg:w-2/3">
              <img
                src="https://images.pexels.com/photos/1330753/pexels-photo-1330753.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="w-full h-64 object-cover rounded-3xl"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="flex justify-evenly gap-10 items-center flex-col md:flex-col lg:flex-row w-full py-10">
            <div className="w-full lg:w-1/3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Explore our complex and set appointment
              </h1>
              <Link
                to={`/register`}
                className="uppercase px-5 mt-5 lg:px-7 py-0 h-2 btn bg-bgColor1 text-white hover:text-textColorMain rounded-full border-p2 font-pop"
              >
                {" "}
                Explore
              </Link>
            </div>
            <div className="w-full lg:w-2/3">
              <img
                src="https://th.bing.com/th/id/R.56a742cc276d0cc41a6fa2047e352111?rik=XcGGP%2bdMIyjQBg&pid=ImgRaw&r=0"
                alt=""
                className="w-full h-64 rounded-3xl"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="flex justify-evenly gap-10 items-center flex-col md:flex-col lg:flex-row w-full py-10">
            <div className="w-full lg:w-1/3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Live peacefully
              </h1>
              <Link
                to={`/register`}
                className="uppercase mt-5 px-5 lg:px-7 py-0 h-2 btn bg-bgColor1 text-white hover:text-textColorMain rounded-full border-p2"
              >
                {" "}
                Explore
              </Link>
            </div>
            <div className="w-full lg:w-2/3">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_640.jpg"
                alt=""
                className="w-full h-64 rounded-3xl"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;


