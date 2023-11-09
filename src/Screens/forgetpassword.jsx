import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import ResetGif from "../assets/reset.png";
import { useNavigate } from "react-router-dom";
import ShowPass from "../assets/show.png";
import Hide from "../assets/hide.png";
import axios from "axios";
import { toast } from "react-toastify";
import { Buttons, OtpComponent } from "../Utils";

const ForgetPassword = () => {
	const [modal, setModal] = useState("");
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	let [stateData, setStateData] = useState({
		email: "",
		token: "",
		password: "",
		confirmPassword: "",
	});
	let [loading, setLoading] = useState(false);
	let [message, setMessage] = useState("");
	let [message2, setMessage2] = useState(""),
		[code, setCode] = useState("");

	let navigate = useNavigate();

	let handleSubmit = async e => {
		e?.preventDefault();
		if (!stateData.email) return;
		setLoading(true);
		try {
			var res = await axios.put(`/api/v1/user/reset-password`, {
				email: stateData?.email,
			});
			// console.log({ res: res?.data });
			setMessage(res?.data.msg);
			toast.success(res?.data.msg, { autoClose: false });
		} catch (err) {
			let error = err.response?.data?.data;
			console.log({ err, error });
			if (error) {
				error.forEach(
					error =>
						error?.param &&
						error?.param !== "suggestion" &&
						toast.error(error.msg)
				);
			}
			if (err?.response?.status === 429 || err?.response?.status === 405)
				toast.error(err?.response?.data ? err?.response?.data : err?.message);
		}
		setLoading(false);
	};

	useEffect(() => {
		setActive(0);
	}, []);

	let handleSubmitNew = async e => {
		e?.preventDefault();
		console.log({ stateData, code });
		if (!code) return;
		if (!stateData.password) return;
		if (stateData.password !== stateData.confirmPassword)
			return toast.error("Password do not match");

		setLoading(true);
		try {
			let body = {
				otp: code,
				password: stateData.password,
			};
			let res = await axios.post(`/api/v1/user/reset-password`, body);
			// console.log({ data: res?.data });
			setMessage2(res?.data.msg);
			toast.success(res?.data.msg);
			setModal("reset");
		} catch (err) {
			let error = err.response?.data?.data;
			console.log({ err, error });
			if (error) {
				error.forEach(
					error =>
						error?.param &&
						error?.param !== "suggestion" &&
						toast.error(error.msg)
				);
			}
			if (err?.response?.status === 429 || err?.response?.status === 405)
				toast.error(err?.response?.data ? err?.response?.data : err?.message);
		}
		setLoading(false);
	};
	let [active, setActive] = useState(0);

	useEffect(() => {
		if (message) {
			setActive(++active);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [message]);

	useEffect(() => {
		if (message2) {
			navigate("/login");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [message2]);

	let textChange =
		name =>
		({ target: { value } }) => {
			setStateData({ ...stateData, [name]: value });
		};
	return (
		<div>
			<>
				{active === 0 ? (
					<PasswordBox
						handleSubmit={handleSubmit}
						loading={loading}
						stateData={stateData}
						textChange={textChange}
					/>
				) : active === 1 ? (
					<div className="fullHeight tw-flex tw-justify-center tw-items-center">
						<div className="" style={{ minWidth: "500px" }}>
							<VerifyMail
								code={code}
								setCode={setCode}
								setActive={setActive}
								handleSubmit={handleSubmit}
								text="confirm OTP"
								numInputs={5}
							/>
							<Buttons
								onClick={() => setActive(++active)}
								css="tw-bg-[#FBB100] tw-h-14 tw-w-80 tw-rounded tw-text-white tw-text-lg tw-font-bold"
								title="confirm OTP"
								type={"button"}
							/>
						</div>
					</div>
				) : active === 2 ? (
					<NewPasswordBox
						typePass={show}
						setTypePass={setShow}
						typePass2={show2}
						setTypePass2={setShow2}
						handleSubmit={handleSubmitNew}
						stateData={stateData}
						textChange={textChange}
						loading={loading}
						setActive={setActive}
						active={active}
					/>
				) : (
					<></>
				)}
			</>
			{modal === "reset" && <ResetModal handleClose={() => setModal("")} />}
		</div>
	);
};

const ResetModal = ({ handleClose }) => {
	const navigate = useNavigate();
	return (
		<div>
			<div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-items-center tw-justify-center">
				<div className="tw-h-96 tw-w-96 tw-bg-white ">
					<div className="tw-float-right tw-pr-6 tw-pt-6">
						<IoMdClose size={20} onClick={handleClose} />
					</div>
					<img src={ResetGif} alt="" className=" tw-mx-auto tw-mt-20" />
					<p className="tw-text-center tw-text-xl tw-font-normal tw-text-[#1b1b1bee] tw-pt-6">
						Your password has been reset successfully. Continue to{" "}
						<span
							onClick={() => navigate("/login")}
							className="tw-text-xl tw-font-normal tw-text-[#0f0bc7] tw-cursor-pointer">
							login.
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

const PasswordBox = ({ handleSubmit, loading, textChange, stateData }) => {
	return (
		<div className="fullHeight tw-flex tw-justify-center tw-items-center">
			<div className="" style={{ minWidth: "500px" }}>
				<small className="mb-4 d-block">Enter your email address </small>
				<form onSubmit={handleSubmit}>
					<div className="form-floating mb-3">
						<input
							type="email"
							required
							name="email"
							className="form-control"
							value={stateData?.email}
							onChange={textChange("email")}
						/>
						<label htmlFor="email">Email</label>
					</div>
					<Buttons
						onClick={handleSubmit}
						loading={loading}
						css="tw-bg-[#FBB100] tw-h-14 tw-w-80 tw-rounded tw-text-white tw-text-lg tw-font-bold"
						title="submit"
					/>
				</form>
			</div>
		</div>
	);
};

export const VerifyMail = ({ code, setCode, loading2, numInputs }) => {
	return (
		<>
			<small className="mb-4 d-block">Enter the OTP sent to your email</small>
			<div className="d-flex justify-content-center my-5 mx-auto">
				<OtpComponent
					stateData={code}
					textChange={data => {
						setCode(data);
					}}
					css="borderColor"
					loading={loading2}
					numInputs={numInputs}
				/>
			</div>
		</>
	);
};

const NewPasswordBox = ({
	typePass,
	setTypePass,
	typePass2,
	setTypePass2,
	handleSubmit,
	stateData,
	textChange,
	loading,
	setActive,
	active,
}) => {
	return (
		<>
			<div className="fullHeight tw-flex tw-justify-center tw-items-center">
				<div className="">
					<h6 className="tw-text-3xl tw-text-black tw-font-semibold Nunito">
						Reset Password
					</h6>
					<p className="tw-text-base tw-font-normal Nunito tw-text-[#667085] tw-pt-4">
						Reset your password here
					</p>
					<form className="tw-mt-8" onSubmit={handleSubmit}>
						<>
							<p
								htmlFor="password"
								className="tw-text-sm Inter tw-font-normal tw-text-[#344054] tw-capitalize">
								Enter new password
							</p>
							<div className="tw-h-12 tw-flex tw-items-center tw-justify-between tw-px-6 tw-w-96 tw-relative tw-border tw-rounded-lg tw-bg-white tw-mt-3 tw-border-[#344054]">
								<input
									style={{
										boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
									}}
									type={typePass ? "text" : "password"}
									className="tw-h-full tw-text-base tw-font-nomral Inter tw-text-[#667085] tw-w-64"
									onChange={textChange("password")}
									value={stateData?.password}
								/>
								<div>
									<img
										onClick={() => setTypePass(!typePass)}
										src={typePass ? Hide : ShowPass}
										alt=""
										className="tw-h-6"
									/>
								</div>
							</div>
						</>
						<>
							<p
								htmlFor="password"
								className="tw-text-sm Inter tw-font-normal tw-text-[#344054] tw-capitalize tw-pt-6">
								Confirm password
							</p>
							<div className="tw-h-12 tw-flex tw-items-center tw-justify-between tw-px-6 tw-w-96 tw-relative tw-border tw-rounded-lg tw-bg-white tw-mt-3 tw-border-[#344054]">
								<input
									style={{
										boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05)",
									}}
									type={typePass2 ? "text" : "password"}
									onChange={textChange("confirmPassword")}
									value={stateData?.confirmPassword}
									className="tw-h-full tw-text-base tw-font-nomral Inter tw-text-[#667085] tw-w-64"
								/>
								<div>
									<img
										onClick={() => setTypePass2(!typePass2)}
										src={typePass2 ? Hide : ShowPass}
										alt=""
										className="tw-h-6"
									/>
								</div>
							</div>
						</>
						<div className="tw-flex tw-justify-center tw-items-center tw-py-4">
							<div className="tw-flex tw-items-center tw-gap-2">
								<input type="checkbox" name="remember" className="" />
								<label
									htmlFor="remember"
									className="tw-text-sm tw-text-[#344054] tw-font-medium">
									Remember Password
								</label>
							</div>
						</div>
						<div className="tw-flex tw-justify-center">
							<Buttons
								onClick={handleSubmit}
								loading={loading}
								css="tw-bg-[#FBB100] tw-h-14 tw-w-80 tw-rounded tw-text-white tw-text-lg tw-font-bold"
								title="Reset Password"
							/>
						</div>
						<div className="d-flex justify-content-end align-items-center">
							<button
								type="button"
								onClick={() => setActive(--active)}
								className="btn">
								back
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default ForgetPassword;
