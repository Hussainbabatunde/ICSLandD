import React, { useContext, useState, useEffect } from "react";
import image from "../assets/amico-login.png";
import { motion } from "framer-motion";
import { Logo } from "../Components/Header";
import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../Data/Context";
import { Buttons } from "../Utils";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

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
			name =>
			({ target: { value } }) => {
				setStateData({ ...stateData, [name]: value });
			},
		[show, setShow] = useState(null);

	let handleSubmit = async e => {
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
				<div className="col-6 d-lg-flex d-none">
					<img
						src={image}
						alt="Login"
						className="img-fluid tw-w-1/2 tw-mx-auto m-auto"
					/>
				</div>
				<div
					className="col-md-6  py-3 py-md-5"
					style={{
						borderTopLeftRadius: "25px",
						borderBottomLeftRadius: "25px",
						background: "#070565",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
					}}>
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
						}}>
						<div className="text-center tw-flex tw-justify-center py-3 py-md-5">
							<Logo />
						</div>
						<div className="border-bottom-4-color  p-3 py-md-5 tw-text-center">
							<h2 className="text-capitalize fw-bold text-white">
								Welcome back!
							</h2>
							<p className="text-white pb-4">Sign in to continue learning</p>

							<form onSubmit={handleSubmit}>
								<div className="mb-4 w-75 mx-auto">
									<input
										type="email"
										className="form-control py-3 bg-transparent tw-text-white text-white"
										placeholder="Email"
										onChange={textChange("email")}
										value={stateData?.email}
									/>
								</div>
								<div className="mb-4 w-75 mx-auto tw-relative">
									<input
										type={show ? "text" : "password"}
										className="form-control py-3 bg-transparent tw-text-white text-white"
										placeholder="Password"
										onChange={textChange("password")}
										value={stateData?.password}
									/>
									<EyeToggler
										show={show}
										toggleShow={() => setShow(!show)}
										color={"white"}
									/>
								</div>
								<div className="mb-4 w-75 mx-auto">
									<Buttons
										onClick={handleSubmit}
										loading={loading}
										title={"sign in"}
										css="tw-h-14 tw-w-full tw-bg-[#FBB100] tw-text-white tw-mt-12 tw-rounded tw-text-lg tw-font-bold sansation text-capitalize hover:tw-bg-[#FBB100]"
									/>
								</div>
								<div className="tw-flex tw-justify-between w-75 tw-mx-auto tw-mt-8">
									<div className="tw-flex tw-items-center tw-gap-2">
										<input type="checkbox" name="remember" className="" />
										<label
											htmlFor="remember"
											className="tw-text-sm tw-text-white tw-font-medium">
											Remember Password
										</label>
									</div>
									<div>
										<p
											onClick={() => navigate("/forgetpassword")}
											className="tw-cursor-pointer tw-text-[12px] sansation tw-text-[#FBB100]">
											Forget password?
										</p>
										<p
											onClick={() => navigate("/otp")}
											className="tw-cursor-pointer tw-text-[12px] sansation tw-text-[#FFF] my-3">
											Verify mail?
										</p>
									</div>
								</div>
								<div className="mx-auto w-75 tw-mt-4">
									<p className="text-white pb-0 mb-0">Don't have an account?</p>
									<Link to="/register" className="d-block text-yellow">
										Sign up
									</Link>
								</div>
							</form>
						</div>
					</motion.div>
				</div>
			</div>
			{/* Mobile Login */}
			<div className="lg:tw-hidden tw-block tw-w-full tw-h-12 tw-bg-[#070565] fullHeight">
				<motion.div
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
					}}>
					<div className="tw-w-full tw-h-52 tw-pt-10 mobileLogin">
						<div className="tw-flex tw-justify-center ">
							<Logo />
						</div>
					</div>
					<div className="tw-pt-2">
						<h6 className="tw-text-2xl tw-font-bold tw-text-white sansation tw-text-center">
							Welcome Back
						</h6>
						<p className="tw-base tw-font-normal tw-text-white sansation tw-text-center tw-leading-4 tw-pt-2">
							Sign in to continue learning
						</p>
						<div className="tw-w-5/6 tw-mx-auto tw-mt-10">
							<form onSubmit={handleSubmit}>
								<input
									type="text"
									className="tw-h-14 tw-w-full tw-border tw-border-white tw-bg-transparent tw-text-base tw-font-normal sansation tw-text-[#ffffff] tw-rounded tw-pl-5"
									placeholder="Enter your Email"
									onChange={textChange("email")}
									value={stateData?.email}
								/>
								<div className="tw-relative">
									<input
										type={show ? "text" : "password"}
										className="tw-h-14 tw-w-full tw-mt-8 tw-border tw-border-white tw-bg-transparent tw-text-base tw-font-normal sansation tw-text-[#ffffff] tw-rounded tw-pl-5"
										placeholder="Password"
										onChange={textChange("password")}
										value={stateData?.password}
									/>
									<EyeToggler
										show={show}
										toggleShow={() => setShow(!show)}
										color={"white"}
										css="tw-mt-8"
									/>
								</div>
								<div className="tw-flex tw-justify-between tw-mt-8">
									<div>
										<p className="tw-text-[12px] tw-text-white sansation">
											Remember me
										</p>
									</div>
									<div>
										<p
											onClick={() => navigate("/forgetpassword")}
											className="tw-cursor-pointer tw-text-[12px] sansation tw-text-[#FBB100]">
											Forget password?
										</p>
										<p
											onClick={() => navigate("/otp")}
											className="tw-cursor-pointer tw-text-[12px] sansation tw-text-[#FFF] my-3">
											Verify mail?
										</p>
									</div>
								</div>
								<Buttons
									onClick={handleSubmit}
									loading={loading}
									title={"sign in"}
									css="tw-h-14 tw-w-full tw-bg-[#FBB100] tw-text-white tw-mt-12 tw-rounded tw-text-lg tw-font-bold sansation text-capitalize hover:tw-bg-[#FBB100]"
								/>
								<p className="tw-text-sm tw-font-normal tw-text-white Inter tw-text-center tw-pt-8">
									Don’t have an account yet?{" "}
									<span
										onClick={() => navigate("/register")}
										className="tw-text-[#fbb100]">
										Create one
									</span>
								</p>
							</form>
						</div>
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
			className={`tw-absolute tw-right-5 tw-top-4 tw-cursor-pointer tw-text-mainShade ${
				css || ""
			}`}
			onClick={toggleShow}>
			{!show ? (
				<AiFillEye size={"20px"} color={color || "black"} />
			) : (
				<AiFillEyeInvisible size={"20px"} color={color || "black"} />
			)}
		</span>
	);
};