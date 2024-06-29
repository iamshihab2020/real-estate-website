
import { useContext, useState } from "react";
import { EstateContext } from "../../../../providers/EstateProvider";
import Estates from "./Estates";

const Estate = () => {
  const estates = useContext(EstateContext); 
  const [selectedStatus, setSelectedStatus] = useState("All");


  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const filteredEstates =
    selectedStatus === "All"
      ? estates
      : estates.filter(
          (estate) =>
            estate.status.toLowerCase() === selectedStatus.toLowerCase()
        );

  return (
    <div className="font-pop animate__animated animate__fadeInLeft">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold text-center py-16">
          Our Estates
        </h1>
      </div>
      <div className="flex items-center justify-center gap-5 pb-16">
        <button
          className={`btn btn-accent rounded-badge px-8 text-white border-0 ${
            selectedStatus === "All" ? "bg-warning shadow-lg" : ""
          }`}
          onClick={() => handleStatusChange("All")}
        >
          All
        </button>
        <button
          className={`btn btn-primary rounded-badge px-8 text-white border-0 ${
            selectedStatus === "Sale" ? "bg-warning shadow-lg" : ""
          }`}
          onClick={() => handleStatusChange("Sale")}
        >
          Sell
        </button>
        <button
          className={`btn btn-secondary rounded-badge px-8 text-white border-0 ${
            selectedStatus === "Rent" ? "bg-warning shadow-lg" : ""
          }`}
          onClick={() => handleStatusChange("Rent")}
        >
          Rent
        </button>
      </div>
      <div className="animate__animated animate__fadeInLeft grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center justify-center pb-20 text-textColorMain">
        {filteredEstates.map((estate) => (
          <Estates key={estate.id} estate={estate} />
        ))}
      </div>
    </div>
  );
};

export default Estate;
