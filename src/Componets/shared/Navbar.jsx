import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./CSS/navbar.css";
import { AuthContext } from "../../providers/AuthProviders";
import "animate.css/animate.min.css";
import Toast from "./Toast/Toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [toast, setToast] = useState(null);

  const showToast = (message, isSuccess) => {
    setToast({ message, isSuccess });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        showToast("You have logged out", false);
      })
      .catch(() =>
        showToast("An error occurred. Please try again later.", false)
      );
  };

  const navLinks = (
    <>
      <li>
        {" "}
        <NavLink
          className={`no-underline lgfont-semibold uppercase text-textColorMain rounded-full`}
          to={`/`}
        >
          Home
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          className={`no-underline font-semibold uppercase text-textColorMain rounded-full`}
          to={"/contact"}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={`no-underline font-semibold uppercase text-textColorMain rounded-full`}
          to={`/team`}
        >
          Our Team
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          className={`no-underline font-semibold uppercase text-textColorMain rounded-full`}
          to={`/schedule`}
        >
          Scheduled Tour
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      {toast && <Toast message={toast.message} isSuccess={toast.isSuccess} />}

      <div className="navbar bg-base-100 font-pop py-5 px-5 relative z-[100] animate__animated animate__delay-1s animate__fadeInDown">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4"
            >
              {navLinks}
            </ul>
          </div>
          <Link to={`/`}>
            <img src="/Logo.png" alt="Logo" className="w-32 md:w-full" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
        </div>

        <div className="navbar-end gap-3  md:flex">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <acronym title={`${user.displayName}`}>
                    <img alt={user.displayName} src={user.photoURL} />
                  </acronym>
                </div>
              </div>

              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p>{user.displayName}</p>
                </li>
                <li>
                  <Link to={`/update-profile`} className="justify-between">
                    Profile
                  </Link>
                </li>
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link
                to={`/login`}
                className="uppercase px-5 lg:px-7 py-0 h-2 btn bg-bgColor1 text-white hover:text-textColorMain rounded-full  border-p2"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
