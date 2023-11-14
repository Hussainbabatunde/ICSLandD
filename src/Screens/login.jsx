import React, { useContext, useState, useEffect } from "react";
import image from "../assets/amico-login.png";
import { motion } from "framer-motion";
import { Logo } from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../Data/Context";
import { Buttons } from "../Utils";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import login_image from "../assets/image22.png";

const Login = () => {
  const { loginUser, auth } = useContext(GlobalState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let init = {
      email: "",
      password: "",
    },
    [stateData, setStateData] = useState(init),
    [loading, setLoading] = useState(false),
    [submit, setSubmit] = useState(false),
    navigate = useNavigate(),
    textChange =
      (name) =>
      ({ target: { value } }) => {
        setStateData({ ...stateData, [name]: value });
      },
    [show, setShow] = useState(null);

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (!stateData?.password || !stateData?.email) return;
    setLoading(true);
    await loginUser(stateData);
    setLoading(false);
    setSubmit(true);
  };

  useEffect(() => {
    if (submit && auth?.isLoggedIn) {
      setSubmit(false);
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit, auth?.isLoggedIn]);

  return (
    <div className="">
      <div className="lg:tw-flex tw-hidden mx-0 fullHeight">
        <div className="col-9 d-lg-flex d-none">
          {/* <h2> Welcome Back!</h2>
          <p>Sign in to continue learning</p>
          <img
            src={image}
            alt="Login"
            className="img-fluid tw-w-1/2 tw-mx-auto m-auto"
          /> */}

          <motion.div
            className="m-auto w-100 h-100"
            style={{
              maxWidth: "550px",
            }}
            initial={{
              x: 250,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 1,
              type: "tween",
            }}
          >
            <div className="text-center tw-flex tw-justify-center py-3 py-md-5">
              <Logo />
            </div>
            <div className="border-bottom-4-color  p-3 py-md-5 ">
              <div className="mb-4 w-75 mx-auto">
                <h2 className="text-capitalize fw-bold text-black">
                  Welcome back!
                </h2>
                <p className="text-black pb-4">
                  Sign in to continue learning game
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4 w-75 mx-auto">
                  <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                    Email Address
                  </p>
                  <input
                    type="email"
                    className="form-control py-3 bg-transparent tw-text-black"
                    placeholder="Email"
                    onChange={textChange("email")}
                    value={stateData?.email}
                  />
                </div>
                <div className="mb-4 w-75 mx-auto tw-relative">
                  <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                    Password
                  </p>
                  <input
                    type={show ? "text" : "password"}
                    className="form-control py-3 bg-transparent tw-text-black"
                    placeholder="Password"
                    onChange={textChange("password")}
                    value={stateData?.password}
                  />
                  <EyeToggler
                    show={show}
                    toggleShow={() => setShow(!show)}
                    color={"black"}
                  />
                </div>
                <div className="tw-flex tw-justify-between w-75 tw-mx-auto tw-mt-8  ">
                  <div className="tw-flex tw-items-center tw-gap-2">
                    <input type="checkbox" name="remember" className="" />
                    <label
                      htmlFor="remember"
                      className="tw-text-sm tw-text-black tw-font-medium "
                    >
                      Remember Password
                    </label>
                  </div>
                  <div>
                    <p
                      onClick={() => navigate("/forgetpassword")}
                      className="tw-cursor-pointer tw-text-[12px] sansation tw-text-black"
                    >
                      Forget password?
                    </p>
                    {/* <p
                      onClick={() => navigate("/otp")}
                      className="tw-cursor-pointer tw-text-[12px] sansation tw-text-[#FFF] my-3"
                    >
                      Verify mail?
                    </p> */}
                  </div>
                </div>
                <div className="mb-4 w-75 mx-auto">
                  <Buttons
                    onClick={handleSubmit}
                    loading={loading}
                    title={"sign in"}
                    css="tw-h-14 tw-w-full tw-bg-[#0B2239] tw-text-white tw-mt-12 tw-rounded-[40px] tw-text-lg  sansation text-capitalize  font-medium"
                  />
                </div>

                <div className="mx-auto w-75 tw-mt-4 text-black tw-text-center">
                  <span className=" pb-0 mb-0">Don't have an account?</span>
                  <Link
                    to="/register"
                    className=" f tw-font-bold tw-text-sm tw-underline"
                  >
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
        {/* <div
          className="col-md-6  py-3 py-md-5 debug tw-w-full"
          style={{
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "25px",
            backgroundImage: `url(${login_image})`,
            background: "white",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
          }}
        >
          <img src={login_image} alt="" className="w-[100%] " />

          <p>sm</p>
        </div> */}

        <div
          className="col-md-3 py-3 py-md-5  tw-w-full"
          style={{
            background: "white",
            backgroundImage: `url(${login_image})`,
            backgroundSize: "contain", // Ensure the background image covers the entire container
            // You can also use backgroundPosition and other background properties as needed
          }}
        ></div>
      </div>
      {/* Mobile Login */}
      <div className="lg:tw-hidden tw-block tw-w-full tw-h-12 tw-bg-white fullHeight">
        <motion.div
          className="m-auto w-100 h-100"
          style={{
            maxWidth: "550px",
          }}
          initial={{
            x: 250,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 1,
            type: "tween",
          }}
        >
          <div className="text-center tw-flex tw-justify-center py-3 py-md-5">
            <Logo />
          </div>
          <div className="border-bottom-4-color  p-3 py-md-5 ">
            <div className="mb-4 w-75 mx-auto">
              <h2 className="text-capitalize fw-bold text-black">
                Welcome back!
              </h2>
              <p className="text-black pb-4">
                Sign in to continue learning game
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 w-75 mx-auto">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  Email Address
                </p>
                <input
                  type="email"
                  className="form-control py-3 bg-transparent tw-text-black"
                  placeholder="Email"
                  onChange={textChange("email")}
                  value={stateData?.email}
                />
              </div>
              <div className="mb-4 w-75 mx-auto tw-relative">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  Password
                </p>
                <input
                  type={show ? "text" : "password"}
                  className="form-control py-3 bg-transparent tw-text-black"
                  placeholder="Password"
                  onChange={textChange("password")}
                  value={stateData?.password}
                />
                <EyeToggler
                  show={show}
                  toggleShow={() => setShow(!show)}
                  color={"black"}
                />
              </div>
              <div className="tw-flex tw-justify-between w-75 tw-mx-auto tw-mt-8  ">
                <div className="tw-flex tw-items-center tw-gap-2">
                  <input type="checkbox" name="remember" className="" />
                  <label
                    htmlFor="remember"
                    className="tw-text-sm tw-text-black tw-font-medium "
                  >
                    Remember Password
                  </label>
                </div>
                <div>
                  <p
                    onClick={() => navigate("/forgetpassword")}
                    className="tw-cursor-pointer tw-text-[12px] sansation tw-text-black"
                  >
                    Forget password?
                  </p>
                  {/* <p
                      onClick={() => navigate("/otp")}
                      className="tw-cursor-pointer tw-text-[12px] sansation tw-text-[#FFF] my-3"
                    >
                      Verify mail?
                    </p> */}
                </div>
              </div>
              <div className="mb-4 w-75 mx-auto">
                <Buttons
                  onClick={handleSubmit}
                  loading={loading}
                  title={"sign in"}
                  css="tw-h-14 tw-w-full tw-bg-[#0B2239] tw-text-white tw-mt-12 tw-rounded-[40px] tw-text-lg  sansation text-capitalize  font-medium"
                />
              </div>

              <div className="mx-auto w-75 tw-mt-4 text-black tw-text-center">
                <span className=" pb-0 mb-0">Don't have an account?</span>
                <Link
                  to="/register"
                  className=" f tw-font-bold tw-text-sm tw-underline"
                >
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;

export const EyeToggler = ({ toggleShow, show, color, css }) => {
  return (
    <span
      className={`tw-absolute tw-right-5 tw-top-9 tw-cursor-pointer tw-text-mainShade ${
        css || ""
      }`}
      onClick={toggleShow}
    >
      {!show ? (
        <AiFillEye size={"20px"} color={color || "black"} />
      ) : (
        <AiFillEyeInvisible size={"20px"} color={color || "black"} />
      )}
    </span>
  );
};
