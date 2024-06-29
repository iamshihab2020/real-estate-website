import { Link } from "react-router-dom";


const ErrorRoute = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('https://i.pinimg.com/originals/8c/e9/f7/8ce9f7609ae1b68e2e76c50198c7b2ef.jpg')] bg-cover bg-cent ">
      <div className="px-10 md:px-52 lg:px-56">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-black text-white ">4O4</h1>
        <p className="text-4xl font-bold font-pop text-white bg-red-500 p-2 rounded-full">
          Oops! This Page Could Not Be Found
        </p>
        <p className="text-base text-white bg-red-800 p-2 rounded-full">
          SORRY BUT THE PAGE YOU ARE LOOKING FOR DOES NOT EXIST, HAVE BEEN
          REMOVED. NAME CHANGED OR IS TEMPORARILY UNAVAILABLE
        </p>
        <Link
          to={`/`}
          className=" btn bg-red-600 hover:bg-red-950 text-white  hover:text-red-50 hover:shadow-2xl hover:shadow-rose-500 rounded-full"
        >
          Go To Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorRoute;