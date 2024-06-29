import { useContext } from "react";
import TestiSlider from "./TestiSlider";
import { TestimonialContext } from "../../../../providers/TestimonialProvider";

const Testimonial = () => {
  const testimonials = useContext(TestimonialContext);

  return (
    <div className="pb-10">
      <h1 className=" text-4xl lg:text-5xl font-bold text-center py-16">
        Testimonials
      </h1>
      <TestiSlider testimonials={testimonials} />
    </div>
  );
};

export default Testimonial;
