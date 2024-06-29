import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { TeamContext } from "../../../providers/TeamProvider";
import Team from "./Team";
import "animate.css/animate.min.css";

const Teams = () => {
  const teams = useContext(TeamContext);

  return (
    <>
      <Helmet>
        <title>Sanctuary Real Estate | Teams</title>
      </Helmet>
      <div className="animate__animated  animate__fadeInRight">
        <h1 className="text-4xl lg:text-5xl font-bold text-center py-16">
          Our Team
        </h1>
        <div className="px-8 grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center justify-center pb-20 text-textColorMain">
          {teams.map((team, index) => (
            <Team key={index} team={team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;