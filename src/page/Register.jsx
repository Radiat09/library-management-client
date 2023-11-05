import { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showHide, setShowHide] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const { createUser, user, updateUser } = useAuth();
  const passwordValidator = /(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/;
  // console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setEmail(data.email);
    setPassword(data.password);
    setUsername(data.username);
    setPhotoUrl(data.photo);

    // console.log(email, password);
    console.log(username, photoUrl);

    if (password.length < 6) {
      return toast.error("Password must be 6 characters long");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must have at least one Capital letter");
    }
    if (!passwordValidator.test(password)) {
      return toast.error("Password must have a special character");
    }

    const toastId = toast.loading("Logging in..");

    try {
      await createUser(email, password);
      await updateUser(username, photoUrl)
        .then(() => {
          // Profile updated!
          toast.success("Profile Updated");
          // ...
        })
        .catch((error) => {
          // An error occurred
          toast.error(error);
          // ...
        });
      toast.success("Logged in...", { id: toastId });
      navigate("/");
    } catch (err) {
      toast.error(err.message, { id: toastId });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col gap-14 w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-red-500">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body pb-0" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <div className="w-full">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                placeholder="Your username..."
                className="input input-bordered w-full"
                // defaultValue="demo@demo.com"
                {...register("username", { required: true })}
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                placeholder="Your photo URL..."
                className="input input-bordered w-full"
                // defaultValue="demo@demo.com"
                {...register("photo", { required: true })}
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                placeholder="Your email..."
                className="input input-bordered w-full"
                // defaultValue="demo@demo.com"
                {...register("email", { required: true })}
              />
            </div>
            {/* include validation with required or other standard HTML validation rules */}
            <div className="w-full relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showHide ? "text" : "password"}
                placeholder="Your password..."
                // defaultValue="demodemo"
                className="input input-bordered w-full"
                {...register("password", { required: true })}
              />
              <span
                className="absolute bottom-4 right-6 md:right-10 lg:right-5   2xl:right-10"
                onClick={() => setShowHide(!showHide)}
              >
                {showHide ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-red-500 hover:text-red-500 hover:border-red-500 text-white hover:bg-white"
              >
                Register
              </button>
            </div>
          </form>
          <div className="mt-5">
            <p className="felx text-center items-center whitespace-nowrap">
              Already have an Account?
              <Link to="/login">
                <span className="text-red-500 ml-2 font-bold">Login</span>
              </Link>
            </p>
          </div>
          <div className="divider w-4/5 mx-auto">OR</div>
          <div className="felx justify-center mx-auto pb-8">
            <button className="btn text-red-500 border-red-500 bg-white hover:bg-white hover:border-red-500">
              <FcGoogle></FcGoogle>
              <span>Google</span>
            </button>
          </div>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Register;
