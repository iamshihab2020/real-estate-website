import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";


const AllSchedule = ({ estate, onDelete }) => {
  const { id, image, estate_title, location, status, price } = estate;

  const handleDeleteClick = () => {
    // Call the onDelete function with the id of the estate to be deleted
    onDelete(id);
  };

  return (
    <tr className="animate__animated  animate__fadeInLeft">
      <th>
        <label></label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{estate_title}</div>
            <div className="text-sm opacity-50">{location}</div>
          </div>
        </div>
      </td>
      <td>
        <span
          className={`badge ${
            status === "sale" ? "badge-primary" : "badge-secondary"
          }  capitalize font-bold`}
        >
          {status}
        </span>
      </td>
      <td>{price}</td>
      <th>
        <Link to={`/estate-details/${id}`}>
          <button className="btn btn-accent btn-xs">Details</button>
        </Link>
      </th>
      <th>
        <button
          className="btn btn-error btn-xs text-white"
          onClick={handleDeleteClick}
        >
          <AiFillDelete />
        </button>
      </th>
    </tr>
  );
};



AllSchedule.propTypes = {
  estate: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired, //
};

export default AllSchedule;

