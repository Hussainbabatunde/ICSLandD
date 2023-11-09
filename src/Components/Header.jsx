import { RxDashboard } from "react-icons/rx";
import logo from "../assets/logo2.png";
import Logo2 from "../assets/logo.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";
import { CourseModal } from "../Screens/home";

const Header = ({ handleCourses, courses }) => {
	let [showNav, setShowNav] = useState(false);
	const [modal, setModal] = useState(false);

	// const handleNav = () => {
	//   setShowNav((showNav = !showNav));
	// };

	// const closeNav = () => {
	//   setShowNav(false);
	// };

	let navigate = useNavigate();
	return (
		<motion.div
			initial={{
				y: -250,
			}}
			animate={{
				y: 0,
			}}
			transition={{
				duration: 1,
				delay: 0.5,
				stiffness: 50,
				type: "spring",
			}}
			className="">
			<div className="tw-flex tw-justify-between tw-items-center tw-h-12 lg:tw-h-20">
				<div>
					<LogoDark />
				</div>
				<div
					className="lg:tw-hidden tw-absolute tw-right-8 tw-z-50"
					onClick={() => setShowNav(true)}>
					<button>
						<IoIosMenu size={30} />
					</button>
				</div>
				<div className="tw-hidden lg:tw-flex tw-gap-10 tw-items-center">
					<p className="tw-text-2xl tw-font-bold tw-text-[#14126d]">
						<Link to="/" className="tw-text-base tw-font-medium">
							Home
						</Link>
					</p>
					<div
						onClick={handleCourses}
						className="tw-cursor-pointer tw-flex tw-gap-1">
						<div className="tw-mt-2">
							<IconContext.Provider value={{ color: "#14126d" }}>
								<RxDashboard size={15} />
							</IconContext.Provider>
						</div>
						<p className="tw-text-2xl tw-font-bold tw-text-[#14126d]">
							<Link className="tw-text-base tw-font-medium krub">Courses</Link>
						</p>
					</div>
					<p className="tw-text-2xl tw-font-bold tw-text-[#14126d]">
						<Link to="/contactus" className="tw-text-base tw-font-medium">
							Contact Us
						</Link>
					</p>
					<p className="tw-text-2xl tw-font-bold tw-text-[#14126d]">
						<Link to="/blog" className="tw-text-base tw-font-medium">
							Blog
						</Link>
					</p>
				</div>
				<div className="md:tw-flex tw-hidden">
					<Link
						to="/login"
						className="mx-1 btn rounded-pill py-2 tw-text-base krub tw-font-medium px-md-4 px-3 tw-text-[#14126d] text-capitalize">
						sign in
					</Link>
					<Link
						to="/register"
						className=" btn tw-bg-[#0f0bc7] rounded-pill tw-text-[12px] py-2 px-md-4 px-3 tw-text-white text-capitalize">
						get started
					</Link>
				</div>
			</div>
			{/* mobile nav */}

			{showNav && (
				<div
					data-aos="fade-down"
					data-aos-duration="1500"
					className="tw-fixed tw-inset-0 tw-z-10 lg:tw-hidden tw-flex">
					<div className="tw-w-full tw-px-12 tw-py-10 tw-bg-[#030A49] tw-h-screen">
						<div className="tw-flex tw-justify-between tw-mb-8">
							<LogoDark />
							<button
								className="text-white p-4"
								onClick={() => setShowNav(false)}>
								<IoMdClose size={40} />
							</button>
						</div>

						<div className="lg:tw-block tw-space-y-6 mt-8">
							<p className="tw-text-xl tw-font-bold tw-text-white">
								<Link className="tw-text-xl">Home</Link>
							</p>
							<div className="lg:tw-block tw-space-y-4" onClick={handleCourses}>
								{/* <IconContext.Provider value={{ color: "#ffffff" }}>
                {" "}
                <RxDashboard />
              </IconContext.Provider> */}

								<p className="tw-text-2xl tw-font-bold tw-text-white">
									<Link className="tw-text-xl">Courses</Link>
								</p>
							</div>
							<p className="tw-text-2xl tw-font-bold tw-text-white">
								<Link to="/contactus" className="tw-text-xl">
									Contact Us
								</Link>
							</p>
							<p className="tw-text-2xl tw-font-bold tw-text-white">
								<Link to="/blog" className="tw-text-xl">
									Blog
								</Link>
							</p>
							<div className="tw-flex tw-gap-4">
								<button
									onClick={() => navigate("/login")}
									className="tw-h-12 tw-w-32 tw-bg-orange-400 tw-rounded-lg tw-text-white tw-text-xl tw-font-bold">
									Sign In
								</button>
								<button
									onClick={() => navigate("/register")}
									className="tw-h-12 tw-w-32 tw-bg-orange-400 tw-rounded-lg tw-text-white tw-text-xl tw-font-bold">
									Get Started
								</button>
							</div>
						</div>
						{showNav && (
							<div className="md:tw-hidden">
								<div className="md:tw-flex tw-hidden">
									<Link
										to="/login"
										className="mx-1 btn rounded-pill py-2 px-md-4 px-3 tw-text-[#070565] text-capitalize">
										sign in
									</Link>
									<Link
										to="/register"
										className=" btn tw-bg-white rounded-pill tw-text-[12px] py-2 px-md-4 px-3 tw-text-[#0f0bc7] text-capitalize">
										get started
									</Link>
								</div>
							</div>
						)}
						{modal && <CourseModal />}
					</div>
					{/* <div

    className={`tw-bg-black tw-w-2/5 tw-h-screen tw-opacity-25`}
    onClick={handleNav}
  ></div> */}
				</div>
			)}
			{/* <div className="tw-flex tw-justify-between tw-items-center tw-h-16">
        <div className="">
          <Logo />
        </div>
        <div className="tw-flex tw-gap-5 tw-items-center">
          <p className="tw-text-sm tw-font-bold tw-text-[#14126d]">
            Home
          </p>
          <div className="tw-flex tw-h-12 tw-items-center">
        
          </div>
        </div>

        <div className="ms-auto">
          <Link
            to="/login"
            className="mx-1 btn rounded-pill py-2 px-md-4 px-3 tw-text-[#070565] text-capitalize"
          >
            sign in
          </Link>
          <Link
            to="/register"
            className="mx-1 btn tw-bg-[#0f0bc7] rounded-pill tw-text-[12px] py-2 px-md-4 px-3 tw-text-white text-capitalize"
          >
            get started
          </Link>
        </div>
      </div> */}
			{modal && <CourseModal handleclose={() => setModal(false)} />}
		</motion.div>
	);
};

export default Header;

export const Logo = ({ position }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/home")} className="tw-cursor-pointer">
      <img
        src={logo}
        alt="logo"
        className={`logo lg:tw-h-16 tw-h-8 ${position}`}
      />
    </div>
  );
};
export const LogoDark = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/home")} className="tw-cursor-pointer">
        <img src={Logo2} alt="logo" className={`logo lg:tw-h-16 tw-h-12`} />
      </div>
    </div>
  );
};
