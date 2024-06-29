import { Helmet } from "react-helmet-async";
import { EstateContext } from "../../../../providers/EstateProvider";
import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { RiLandscapeFill } from "react-icons/ri";
import { FaMoneyCheckAlt } from "react-icons/fa";

const EstateDetails = () => {
  const [currentImage, setCurrentImage] = useState("");
  const estates = useContext(EstateContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const estate = estates.find((estate) => estate.id === parseInt(id));

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
    more_img,
  } = estate;


  const handleScheduleTour = () => {
    const scheduledEstates =
      JSON.parse(localStorage.getItem("scheduledEstates")) || [];
    scheduledEstates.push(estate);
    localStorage.setItem("scheduledEstates", JSON.stringify(scheduledEstates));
    navigate("/schedule");
  };

  return (
    <>
      <Helmet>
        <title>Sanctuary | Estate Details</title>
      </Helmet>

      <div className="px-6 pb-16 flex flex-col gap-10 lg:flex-row">
        <div className="w-full lg:w-2/3 animate__animated animate__fadeInLeft">
          <div>
            <div>
              <img
                src={currentImage || image}
                alt=""
                className="animate__animated animate__fadeIn lg:h-[450px] min-w-full rounded-xl lg:rounded-2xl object-cover"
              />
            </div>
            <div className="mt-2 flex gap-3 flex-wrap">
              {more_img.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className="animate__animated animate__fadeIn max-h-12 md:max-h-16 lg:max-h-24 max-w-32 border rounded-lg lg:rounded-2xl"
                  onClick={() => setCurrentImage(img)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 animate__animated animate__fadeInRight">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold ">
            Details
          </h2>
          <div className="my-5">
            <h3 className=" text-xl md:text-4xl lg:text-4xl font-semibold">
              {estate_title}
            </h3>
            <p className="text-lg mt-2">{segment_name}</p>
            <div className="flex items-center gap-2">
              <p>Open For </p>
              <div
                className={`badge ${
                  status === "sale" ? "badge-primary" : "badge-secondary"
                }  capitalize font-bold`}
              >
                {status}
              </div>
            </div>
          </div>
          <p className="text-justify mb-3">
            <b>Description:</b> {description}
          </p>

          <p className="flex items-center gap-2">
            <RiLandscapeFill />
            <b>Area :</b>
            <div className="badge badge-info gap-2 text-white font-semibold">
              {area} sq. ft.
            </div>
          </p>

          <p className="flex items-center gap-2">
            <IoLocationSharp />
            <b>Location :</b>
            <div className="badge badge-success gap-2 text-white font-semibold">
              {location}
            </div>
          </p>

          <p className="flex items-center gap-2">
            <FaMoneyCheckAlt />
            <b>Price :</b>
            <div className="badge badge-error gap-2 text-white font-semibold">
              {price}
            </div>
          </p>

          <div>
            <p className="font-bold mt-2">Facilities:</p>
            <ul className=" list-disc ml-10 ">
              {facilities.map((facility, index) => (
                <li className=" capitalize " key={index}>
                  {facility}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <button className="btn btn-primary" onClick={handleScheduleTour}>
              Schedule Tour
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EstateDetails;
