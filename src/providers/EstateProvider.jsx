import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
export const EstateContext = createContext();

export const EstateProvider = ({ children }) => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/estate.json`);
        const data = await response.json();
        setEstates(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 
  return (
    <EstateContext.Provider value={estates}>{children}</EstateContext.Provider>
  );
};


EstateProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};