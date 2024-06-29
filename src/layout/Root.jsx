import { Outlet } from "react-router-dom";
import Navbar from "../Componets/shared/Navbar";
import Footer from "../Componets/shared/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Root;
