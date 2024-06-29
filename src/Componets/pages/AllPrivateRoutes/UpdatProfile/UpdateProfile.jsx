import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {

      displayName: user.displayName || "",
      photoURL: user.photoURL || "",
    },
  });

  const onSubmit = async (data) => {
    await updateUserProfile( data.displayName, data.photoURL);
    // You can show a success message or redirect the user after updating the profile
  };

  return (
    <div className="animate__animated  animate__fadeInLeft flex items-center justify-center py-16 px-16 rounded-3xl bg-[url('https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
      <Helmet>
        <title>Sanctuary Real Estate | Update Profile</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="animate__animated animate__fadeInBottomRight w-96 py-10 px-10 rounded-3xl flex flex-col items-center justify-center bg-white/30 backdrop-blur-xl bg-opacity-50 shadow-2xl"
      >
        <div>
          <h1 className="text-3xl font-bold mb-6">Update Profile</h1>
        </div>

        <div className="w-full mb-4">
          <label className="form-control w-full min-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              className="input border-black border-spacing-3 border-2 w-full min-w-xs disabled"
              value={user.email}
              readOnly
            />
          </label>
        </div>

        <div className="w-full mb-4">
          <label className="form-control w-full min-w-xs">
            <div className="label">
              <span className="label-text">Display Name</span>
            </div>
            <input
              type="text"
              className="input border-black border-spacing-3 border-2 w-full min-w-xs"
              {...register("displayName", {
                required: "Display Name is required",
              })}
            />
            {errors.displayName && (
              <p className="text-red-500 mt-1">{errors.displayName.message}</p>
            )}
          </label>
        </div>

        <div className="w-full mb-6">
          <label className="form-control w-full min-w-xs">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              className="input border-black border-spacing-3 border-2 w-full min-w-xs"
              {...register("photoURL", {
                pattern: {
                  value:
                    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                  message: "Invalid URL format",
                },
              })}
            />
            {errors.photoURL && (
              <p className="text-red-500 mt-1">{errors.photoURL.message}</p>
            )}
          </label>
        </div>

        <div className="w-full">
          <input
            className="btn btn-success text-white w-full"
            type="submit"
            value="Update Profile"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
