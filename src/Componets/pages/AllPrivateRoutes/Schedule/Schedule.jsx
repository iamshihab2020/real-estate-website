import { Helmet } from "react-helmet-async";
import AllSchedule from "./AllSchedule."; // Assuming AllSchedule is the component to render each scheduled estate
import { useState } from "react";

const Schedule = () => {
  // Define scheduledEstates as a state variable
  const [scheduledEstates, setScheduledEstates] = useState(
    JSON.parse(localStorage.getItem("scheduledEstates")) || []
  );

  // Function to handle delete action
  const handleDelete = (id) => {
    // Filter out the estate with the provided id
    const updatedEstates = scheduledEstates.filter(
      (estate) => estate.id !== id
    );
    // Update the list of scheduled estates in state
    setScheduledEstates(updatedEstates);
    // Update the list of scheduled estates in LocalStorage
    localStorage.setItem("scheduledEstates", JSON.stringify(updatedEstates));
  };

  return (
    <>
      <Helmet>
        <title>Sanctuary Real Estate | Schedule Visit</title>
      </Helmet>

      <div>
        <h1 className="text-3xl lg:text-5xl font-bold text-center py-16 animate__animated  animate__fadeInLeft">
          Your Scheduled Tour
        </h1>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label></label>
                </th>
                <th>Title</th>
                <th>Status</th>
                <th>Price</th>
                <th>See Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {scheduledEstates.map((estate, index) => (
                <AllSchedule
                  key={index}
                  estate={estate}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Schedule;
