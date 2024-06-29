import PropTypes from "prop-types";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Estates = ({ estate }) => {
  const { id, estate_title, segment_name, status, location, image } = estate;
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="card max-w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={`${estate_title} Image`}
            className="h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title flex items-start">
            {estate_title}
            <div
              className={`badge ${
                status === "sale" ? "badge-primary" : "badge-secondary"
              }  capitalize font-bold`}
            >
              {status}
            </div>
          </h2>
          <p className="font-semibold underline-offset-4 underline">
            {segment_name}
          </p>
          <p className="flex items-center gap-1">
            <IoLocationSharp />
            {location}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/estate-details/${id}`}>
              <button className="btn btn-success text-white">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Estates.propTypes = {
  estate: PropTypes.object.isRequired,
};

export default Estates;
