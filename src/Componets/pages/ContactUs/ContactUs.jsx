import { Helmet } from "react-helmet-async";
import "animate.css/animate.min.css";

const ContactUs = () => {

  return (
    <>
      <Helmet>
        <title>Sanctuary Real Estate | Contact Us</title>
      </Helmet>
      <div className="hero min-h-screen animate__animated  animate__fadeInLeft pb-16">
        <div className="hero-content flex-col">
          <h1 className="text-4xl lg:text-5xl font-bold text-center py-16">
            Contact Us
          </h1>

          <div className="card shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Message"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success text-white">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;