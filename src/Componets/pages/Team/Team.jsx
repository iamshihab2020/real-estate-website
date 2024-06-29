import PropTypes from "prop-types";

const Team = ({ team }) => {
  const { name, image, position, comment } = team;
  return (
    <div>
      <div className="card w-96 min-h-[550px] bg-base-100 shadow-xl ">
        <figure>
          <img src={image} alt={name} className=" h-58 " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-accent text-white py-3">{position}</div>
          </h2>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

Team.propTypes = {
  team: PropTypes.object.isRequired,
};

export default Team;