import { motion } from "framer-motion";
import bg from "../assets/Rectangle8.png";
import { Logo } from "../Components/Header";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState, useContext } from "react";
import { GlobalState } from "../Data/Context";
import { Buttons } from "../Utils";
import { EyeToggler } from "./login";

const Register = () => {
  const { registerUser, auth } = useContext(GlobalState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let init = {
      firstName: "",
      lastName: "",
      telephone: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: "",
    },
    [state, setState] = useState(init),
    [loading, setLoading] = useState(false),
    [submit, setSubmit] = useState(false),
    navigate = useNavigate(),
    textChange =
      (name) =>
      ({ target: { value } }) => {
        setState({ ...state, [name]: value });
      },
    [show, setShow] = useState(null),
    [show1, setShow1] = useState(null);

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !state?.password ||
      !state?.email ||
      !state?.firstName ||
      !state?.lastName ||
      !state?.telephone
    )
      return toast.info("Please fill out all fields");
    if (state?.password !== state?.confirmPassword)
      return toast.error("Password do not match");

    if (
      !/\d/.test(state?.password) ||
      // eslint-disable-next-line no-useless-escape
      !/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(state?.password) ||
      state?.password?.length < 8
    )
      return toast.error(
        `Password must be at least 8 characters long, contains at least 1 number, 1 uppercase, 1 lowercase letter and 1 special character`
      );
    setLoading(true);
    await registerUser(state);
    setLoading(false);
    setSubmit(true);
  };

  useEffect(() => {
    if (submit && auth?.isRegistered) {
      navigate("/otp");
      setSubmit(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit, auth?.isRegistered, auth?.regCase]);
  return (
    <div>
      <div
        className="fullHeight lg:tw-flex tw-hidden bg-white  "
        style={
          {
            //   background: `url(${bg}), linear-gradient(90.18deg, #423FC1 -52.19%, #1A17B4 81.92%`,
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "cover",
          }
        }
      >
        <motion.div
          className="m-auto w-100 h-100 "
          style={{
            maxWidth: "550px",
          }}
          initial={{
            x: -250,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 2,
            delay: 1,
            type: "tween",
          }}
        >
          {/* <div className="text-center py-3 py-md-5 tw-mx-auto">
            <Logo position="tw-mx-auto" />
          </div> */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid #0B2239",
              backdropFilter: "blur(7px)",
              borderRadius: "20px",
            }}
            className="border-bottom-4-color  p-3 py-md-5"
          >
            <h2 className="text-center text-uppercase fw-bold  pb-1 text-[#0B2239]">
              sign up
            </h2>

            <p className="text-center   pb-4 text-[#0B2239]">
              Sign in to continue learning
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 w-75 mx-auto">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  First Name
                </p>
                <input
                  type="text"
                  className="form-control py-3"
                  placeholder="First Name"
                  onChange={textChange("firstName")}
                  value={state?.firstName}
                />
              </div>
              <div className="mb-4 w-75 mx-auto">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  Last Name
                </p>
                <input
                  type="text"
                  className="form-control py-3"
                  placeholder="Last Name"
                  onChange={textChange("lastName")}
                  value={state?.lastName}
                />
              </div>
              <div className="mb-4 w-75 mx-auto">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  Email Address
                </p>
                <input
                  type="email"
                  className="form-control py-3"
                  placeholder="Email"
                  onChange={textChange("email")}
                  value={state?.email}
                />
              </div>
              <div className="mb-4 w-75 mx-auto">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  Phone Address
                </p>{" "}
                <input
                  type="tel"
                  className="form-control py-3"
                  placeholder="Telephone"
                  onChange={textChange("telephone")}
                  value={state?.telephone}
                  maxLength={11}
                />
              </div>
              <div className="mb-4 w-75 mx-auto tw-relative">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  Password
                </p>
                <input
                  type={show ? "text" : "password"}
                  className="form-control py-3"
                  placeholder="Password"
                  onChange={textChange("password")}
                  value={state?.password}
                />
                <EyeToggler
                  show={show}
                  toggleShow={() => setShow(!show)}
                  // color={"white"}
                />
              </div>
              <div className="mb-4 w-75 mx-auto tw-relative">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  Password
                </p>{" "}
                <input
                  type={show1 ? "text" : "password"}
                  className="form-control py-3"
                  placeholder="Confirm Password"
                  onChange={textChange("confirmPassword")}
                  value={state?.confirmPassword}
                />
                <EyeToggler
                  show={show1}
                  toggleShow={() => setShow1(!show1)}
                  // color={"white"}
                />
              </div>
              {/* <div className="mb-5 w-75 mx-auto">
                <select
                  className="form-control py-3 form-select text-capitalize"
                  placeholder="User Type"
                  onChange={textChange("userType")}
                  value={state?.userType}
                >
                  <option value="">Please select student type</option>
                  {auth?.userType?.map((item, i) => (
                    <option value={item?._id} key={i}>
                      {item?.title} {item?.type}
                    </option>
                  ))}
                </select>
              </div> */}
              <div className="mb-4 w-75 mx-auto">
                <Buttons
                  onClick={handleSubmit}
                  loading={loading}
                  title={"create an account"}
                  css="form-control btn btn-yellow rounded-pill py-3 text-white text-uppercase hover:tw-bg-[#0B2239] "
                />
              </div>
            </form>
            <p className="tw-text-base tw-font-medium tw-text-black Inter tw-text-center tw-pt-6">
              Have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className=" f tw-font-bold tw-text-sm tw-underline"
              >
                Log in
              </span>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="lg:tw-hidden tw-block tw-w-full tw-h-100 tw-bg-white fullHeight tw-pb-10">
        <motion.div
          className="m-auto w-100 h-100 "
          style={{
            maxWidth: "550px",
          }}
          initial={{
            x: -250,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 2,
            delay: 1,
            type: "tween",
          }}
        >
          {/* <div className="text-center py-3 py-md-5 tw-mx-auto">
            <Logo position="tw-mx-auto" />
          </div> */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "1px solid #0B2239",
              backdropFilter: "blur(7px)",
              borderRadius: "20px",
            }}
            className="border-bottom-4-color  p-3 py-md-5"
          >
            <h2 className="text-center text-uppercase fw-bold  pb-1 text-[#0B2239]">
              sign up
            </h2>

            <p className="text-center   pb-4 text-[#0B2239]">
              Sign in to continue learning
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 w-75 mx-auto">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  First Name
                </p>
                <input
                  type="text"
                  className="form-control py-3"
                  placeholder="First Name"
                  onChange={textChange("firstName")}
                  value={state?.firstName}
                />
              </div>
              <div className="mb-4 w-75 mx-auto">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  Last Name
                </p>
                <input
                  type="text"
                  className="form-control py-3"
                  placeholder="Last Name"
                  onChange={textChange("lastName")}
                  value={state?.lastName}
                />
              </div>
              <div className="mb-4 w-75 mx-auto">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  Email Address
                </p>
                <input
                  type="email"
                  className="form-control py-3"
                  placeholder="Email"
                  onChange={textChange("email")}
                  value={state?.email}
                />
              </div>
              <div className="mb-4 w-75 mx-auto">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  Phone Address
                </p>{" "}
                <input
                  type="tel"
                  className="form-control py-3"
                  placeholder="Telephone"
                  onChange={textChange("telephone")}
                  value={state?.telephone}
                  maxLength={11}
                />
              </div>
              <div className="mb-4 w-75 mx-auto tw-relative">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  Password
                </p>
                <input
                  type={show ? "text" : "password"}
                  className="form-control py-3"
                  placeholder="Password"
                  onChange={textChange("password")}
                  value={state?.password}
                />
                <EyeToggler
                  show={show}
                  toggleShow={() => setShow(!show)}
                  // color={"white"}
                />
              </div>
              <div className="mb-4 w-75 mx-auto tw-relative">
                <p className="t tw-text-left tw-font-medium tw-text-sm tw-text-black">
                  Password
                </p>{" "}
                <input
                  type={show1 ? "text" : "password"}
                  className="form-control py-3"
                  placeholder="Confirm Password"
                  onChange={textChange("confirmPassword")}
                  value={state?.confirmPassword}
                />
                <EyeToggler
                  show={show1}
                  toggleShow={() => setShow1(!show1)}
                  // color={"white"}
                />
              </div>
              {/* <div className="mb-5 w-75 mx-auto">
                <select
                  className="form-control py-3 form-select text-capitalize"
                  placeholder="User Type"
                  onChange={textChange("userType")}
                  value={state?.userType}
                >
                  <option value="">Please select student type</option>
                  {auth?.userType?.map((item, i) => (
                    <option value={item?._id} key={i}>
                      {item?.title} {item?.type}
                    </option>
                  ))}
                </select>
              </div> */}
              <div className="mb-4 w-75 mx-auto">
                <Buttons
                  onClick={handleSubmit}
                  loading={loading}
                  title={"create an account"}
                  css="form-control btn btn-yellow rounded-pill py-3 text-white text-uppercase hover:tw-bg-[#0B2239] "
                />
              </div>
            </form>
            <p className="tw-text-base tw-font-medium tw-text-black Inter tw-text-center tw-pt-6">
              Have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className=" f tw-font-bold tw-text-sm tw-underline"
              >
                Log in
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
