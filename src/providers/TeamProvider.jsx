import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [team, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/team.json`);
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <TeamContext.Provider value={team}>{children}</TeamContext.Provider>
  );
};

TeamProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
