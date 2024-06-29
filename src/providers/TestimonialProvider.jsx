import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
export const TestimonialContext = createContext();

export const TestimonialProvider = ({ children }) => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/testimonial.json`);
        const data = await response.json();
        setTestimonial(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <TestimonialContext.Provider value={testimonial}>{children}</TestimonialContext.Provider>
  );
};

TestimonialProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
