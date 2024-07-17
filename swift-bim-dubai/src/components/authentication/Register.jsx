import { Button, Input } from "@material-tailwind/react";
import bim from "../../assets/bim_register.jpeg";

import { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { useAuth } from "../../context/AuthContext";
import { FaArrowLeft } from "react-icons/fa";

const Register = () => {
  const { signupData, setSignupData, signup, loading, isAuthenticated } =
    useAuth();
  const [togglePassword, setTogglePassword] = useState(false);
  const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className="w-screen bg-black/30 grid relative place-items-center h-screen">
      <Link
        className="absolute flex items-center gap-4 text-blue-800 bg-white py-1 px-2 rounded-sm left-20 top-10"
        to={"/"}
      >
        <FaArrowLeft />
        Go to Home
      </Link>
      <div className="flex gap-5 w-[90%] md:w-[80%] items-center bg-white rounded-xl">
        <div className="rounded-xl mx-auto bg-white my-auto text-black md:w-[500px] md:px-8 md:py-8 dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-wrap items-center">
            <div className="w-full border-stroke dark:border-strokedark">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <h2 className="mb-9 text-2xl font-bold  dark:text-white sm:text-3xl text-center">
                  Register
                </h2>

                <form onSubmit={signup}>
                  <div className="mb-4">
                    <div className="relative">
                      <Input
                        size="lg"
                        color="blue"
                        value={signupData.first_name}
                        name="first_name"
                        onChange={handleChange}
                        type="text"
                        label="First Name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-4 pr-10 outline-none focus:border-blue-500 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <BiUser className="absolute right-4 top-3 opacity-50" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="relative">
                      <Input
                        size="lg"
                        color="blue"
                        value={signupData.last_name}
                        name="last_name"
                        onChange={handleChange}
                        type="text"
                        label="Last Name"
                        className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-4 pr-10 outline-none focus:border-blue-500 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <BiUser className="absolute right-4 top-3 opacity-50" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="relative">
                      <Input
                        size="lg"
                        color="blue"
                        value={signupData.email}
                        name="email"
                        onChange={handleChange}
                        type="email"
                        label="Email"
                        className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-4 pr-10 outline-none focus:border-blue-500 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <MdOutlineMailOutline className="absolute right-4 top-3 opacity-50" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="relative">
                      <Input
                        size="lg"
                        color="blue"
                        name="phone_number"
                        value={signupData.phone_number}
                        onChange={handleChange}
                        type="tel"
                        label="Phone Number"
                        className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-4 pr-10 outline-none focus:border-blue-500 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      <MdOutlineLocalPhone className="absolute right-4 top-3 opacity-50" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="relative">
                      <Input
                        size="lg"
                        value={signupData.password}
                        name="password"
                        onChange={handleChange}
                        type={togglePassword ? "text" : "password"}
                        label="Password"
                        color="blue"
                        className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-4 pr-10 outline-none focus:border-blue-500 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      {!togglePassword ? (
                        <BsEye
                          className="absolute right-4 top-3 opacity-50 cursor-pointer"
                          onClick={() => setTogglePassword(!togglePassword)}
                        />
                      ) : (
                        <BsEyeSlash
                          className="absolute right-4 top-3 opacity-50 cursor-pointer"
                          onClick={() => setTogglePassword(!togglePassword)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="relative">
                      <Input
                        size="lg"
                        value={signupData.confirm_password}
                        name="confirm_password"
                        onChange={handleChange}
                        type={toggleConfirmPassword ? "text" : "password"}
                        label="Confirm Password"
                        color="blue"
                        className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-4 pr-10 outline-none focus:border-blue-500 focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />

                      {!toggleConfirmPassword ? (
                        <BsEye
                          className="absolute right-4 top-3 opacity-50 cursor-pointer"
                          onClick={() =>
                            setToggleConfirmPassword(!toggleConfirmPassword)
                          }
                        />
                      ) : (
                        <BsEyeSlash
                          className="absolute right-4 top-3 opacity-50 cursor-pointer"
                          onClick={() =>
                            setToggleConfirmPassword(!toggleConfirmPassword)
                          }
                        />
                      )}
                    </div>
                  </div>

                  <div className="mb-2 md:mb-5">
                    <Button
                      type="submit"
                      loading={loading}
                      disabled={loading}
                      placeholder={""}
                      className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-2 font-medium bg-blue-600 text-white transition hover:bg-opacity-90"
                    >
                      Signup
                      {/* {loading ? "Logging in..." : "Log in"} */}
                    </Button>
                  </div>

                  {/* <a href="/login1"> */}
                  {/* <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke  p-2 font-medium hover:bg-opacity-70 dark:border-strokedark bg-gray-200 dark:bg-meta-4 dark:hover:bg-opacity-70"
                >
                  <span className="text-xl">
                    <FcGoogle />
                  </span>
                  Continue with Google
                </button> */}
                  {/* </a> */}

                  <div className="mt-2 text-center">
                    <p className="font-medium">
                      Already have an account?
                      <Link to="/login" className="text-blue-600 px-1">
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="border-l-2 hidden xl:block w-[700px]">
          <img
            src={bim}
            alt="bim login"
            className="w-[600px] h-[600px] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
