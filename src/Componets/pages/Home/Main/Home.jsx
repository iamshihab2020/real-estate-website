import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import AboutUs from "../AboutUs/AboutUs";
import Estate from "../Estate/Estate";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sanctuary Real Estate | Home</title>
      </Helmet>
      <div className="font-pop px-2 md:px-7 lg:px-10">
        <Banner />
        <AboutUs />
        <Estate />
        <Testimonial/>
      </div>
    </>
  );
};
export default Home;


// framerMotion, gsap
