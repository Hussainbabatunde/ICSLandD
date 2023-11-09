import { useState, useContext, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import { Buttons } from "../Utils"
import { GlobalState } from "../Data/Context"
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3"
import { usePaystackPayment } from "react-paystack"

const Checkout = () => {
	let [state, setState] = useState({
			email: "",
			phone_number: "",
			name: "",
			firstName: "",
			lastName: "",
			telephone: "",
			password: "",
			confirmPassword: "",
			// userType: "",
		}),
		[provider, setProvider] = useState(""),
		catArr = ["existing", "new"],
		[studentCat, setStudentCat] = useState(catArr?.[0]),
		[getSearch] = useSearchParams(),
		[loading, setLoading] = useState(false),
		[proceed, setProceed] = useState(false),
		[paymentData, setPaymentData] = useState(false),
		{ plan, course, numberWithCommas } = useContext(GlobalState),
		navigate = useNavigate();

	let handleConfirmation = async e => {
		e?.preventDefault();
		let data = {
			plan: getSearch?.get("plan"),
			course: getSearch?.get("course"),
			provider,
			...state,
		};

		if (!data?.email || !data?.course || !data?.plan) return;
		if (
			!plan?.data
				?.find(item => item?._id === getSearch?.get("plan"))
				?.name?.toLowerCase()
				?.includes("pay later")
		)
			if (!data?.provider) return;
		setLoading(true);
		try {
			var res = await axios.post(
				"/api/v1/transactions/generate-transaction-reference",
				{ ...data, studentType: studentCat }
			);

			toast.success(res.data.msg);
			setProceed(res?.data?.data);
			setLoading(false);
		} catch (err) {
			console.log({ err });
			let error = err.response?.data?.data;
			if (error) {
				error.forEach(error => toast.error(error.msg));
			}
			if (err?.response?.status === 429) toast.error(err?.response?.data);
			setLoading(false);
			setProceed(false);
		}
		setLoading(false);
	};

	useEffect(() => {}, [paymentData]);

	let configFlutter = {
			public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY,
			tx_ref: proceed?.reference,
			amount: proceed?.total,
			currency: "NGN",
			payment_options: "card",
			customer: {
				email: proceed?.user?.email || state?.email,
				phone_number: proceed?.user?.telephone || state?.phone_number,
				name:
					proceed?.user?.lastName + " " + proceed?.user?.firstName ||
					state?.name,
			},
			customizations: {
				title: "BCT " + getSearch?.get("title"),
				description: "Course Payment",
				logo: process.env.REACT_APP_IMAGE_URL,
			},
		},
		handleFlutterPayment = useFlutterwave(configFlutter);

	let configPaystack = {
			email: proceed?.user?.email || state?.email,
			amount: Number(proceed?.total * 100),
			publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
			metadata: {
				name:
					proceed?.user?.lastName + " " + proceed?.user?.firstName ||
					state?.name,
				phone: proceed?.user?.telephone || state?.phone_number,
			},
			reference: proceed?.reference
				? proceed?.reference
						?.toString()
						?.split("|")
						?.join("")
						?.split(" ")
						?.join("")
				: "",
		},
		initializePayment = usePaystackPayment(configPaystack);

	let handleSuccess = async ref => {
		setLoading(true);
		// await manageFundWalletFlutterwave(ref, "paystack");
		try {
			var res = await axios.post(
				`/api/v1/transactions/manage-${
					!proceed?.toPay ? "learn-now-pay-later" : provider
				}`,
				{
					payment_data: ref,
					plan: getSearch?.get("plan"),
					course: getSearch?.get("course"),
					provider,
					...state,
				}
			);

			toast.success(res.data.msg);
			setLoading(false);
			setPaymentData(null);
			setProceed(null);
			navigate("/login");
		} catch (err) {
			console.log({ err });
			let error = err.response?.data?.data;
			if (error) {
				error.forEach(error => toast.error(error.msg));
			}

			if (err?.response?.status === 429) toast.error(err?.response?.data);
			setLoading(false);
			setProceed(false);
		}
		setLoading(false);
		// setSubmit(true);
	};

	useEffect(() => {
		if (paymentData) handleSuccess(paymentData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [paymentData]);

	// you can call this function anything
	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log("closed");
	};

	const onSuccess = ref => {
		// console.log({ ref });
		setPaymentData(ref);
	};

	if (!plan?.data || !course?.data) return;

	return (
		<div className="container tw-py-20">
			<div className="mb-4 w-75 mx-auto">
				<h1 className="text-uppercase sansation mb-3">payment details</h1>
				<p className="text-capitalize border-bottom d-flex justify-content-between py-3">
					<span>Course: </span>
					<span className="fontInherit Lexend">
						{
							course?.data?.find(item => item?._id === getSearch?.get("course"))
								?.title
						}
					</span>{" "}
				</p>
				<p className="text-capitalize border-bottom d-flex justify-content-between py-3">
					<span>Learning mode: </span>
					<span className="fontInherit Lexend">
						{
							plan?.data?.find(item => item?._id === getSearch?.get("plan"))
								?.name
						}
					</span>{" "}
				</p>
				<p className="text-capitalize border-bottom d-flex justify-content-between py-3 mb-3">
					<span>Course Amount: </span>
					<span className="fontInherit Lexend">
						NGN{" "}
						{numberWithCommas(
							course?.data?.find(item => item?._id === getSearch?.get("course"))
								?.amount || 0
						)}
					</span>{" "}
				</p>
				{catArr?.map((item, i) => (
					<div
						key={i}
						onClick={() => setStudentCat(item)}
						className={`btn rounded-0 text-capitalize fw-bold ${
							studentCat === item
								? "border-width-4-color border-width-4-2 tw-text-xl tw-font-bold"
								: "text-muted tw-font-normal"
						}`}>
						{item?.replace("-", " ")} student
					</div>
				))}
				<div className="row mx-0 g-3">
					{studentCat === "new" && (
						<>
							<div className="col-md-6">
								<input
									type="text"
									className="form-control py-3 my-4"
									placeholder="Your First Name"
									onChange={e =>
										setState({ ...state, firstName: e.target.value })
									}
									value={state?.firstName}
								/>
							</div>
							<div className="col-md-6">
								<input
									type="text"
									className="form-control py-3 my-4"
									placeholder="Your Last Name"
									onChange={e =>
										setState({ ...state, lastName: e.target.value })
									}
									value={state?.lastName}
								/>
							</div>
						</>
					)}
					<div className="col-12">
						<input
							type="email"
							className="form-control py-3 my-4"
							placeholder="Your Email"
							onChange={e => setState({ ...state, email: e.target.value })}
							value={state?.email}
						/>
					</div>
					{studentCat === "new" && (
						<>
							{/* <div className="col-md-6">
								<select
									onChange={e =>
										setState({ ...state, userType: e.target.value })
									}
									value={state?.userType}
									className="form-control py-3 form-select text-capitalize my-4"
									placeholder="User Type">
									<option value="">Please select student type</option>
									{auth?.userType?.map((item, i) => (
										<option value={item?._id} key={i}>
											{item?.title} {item?.type}
										</option>
									))}
								</select>
							</div> */}
							<div className="col-md-6">
								<input
									type="tel"
									className="form-control py-3 my-4"
									placeholder="0800 000 0000"
									onChange={e =>
										setState({ ...state, telephone: e.target.value })
									}
									value={state?.telephone}
									maxLength={11}
								/>
							</div>
							<div className="col-md-6"></div>
							<div className="col-md-6">
								<input
									type="password"
									className="form-control py-3 my-4"
									placeholder="Password"
									onChange={e =>
										setState({ ...state, password: e.target.value })
									}
									value={state?.password}
								/>
							</div>
							<div className="col-md-6">
								<input
									type="password"
									className="form-control py-3 my-4"
									placeholder="Confirm password"
									onChange={e =>
										setState({ ...state, confirmPassword: e.target.value })
									}
									value={state?.confirmPassword}
									maxLength={11}
								/>
							</div>
						</>
					)}
				</div>
				{!plan?.data
					?.find(item => item?._id === getSearch?.get("plan"))
					?.name?.toLowerCase()
					?.includes("pay later") && (
					<>
						<h2>Select Payment Method</h2>
						<div className="row g-3">
							{process.env.REACT_APP_PAYSTACK_PUBLIC_KEY && (
								<div className="col-md-6">
									<input
										type="radio"
										name="provider"
										id="paystack"
										className="form-control form-check-inline form-check-input form-check"
										value={provider}
										onChange={e => setProvider(e.target.title)}
										checked={provider === "paystack"}
										title="paystack"
									/>
									<label htmlFor="paystack">
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Paystack_Logo.png/1200px-Paystack_Logo.png?20200430170057"
											alt="Paystack"
											className="img-fluid h-auto w-50"
										/>
									</label>
								</div>
							)}
							{process.env.REACT_APP_FLUTTERWAVE_PUBLIC_KEY && (
								<div className="col-md-6">
									<input
										type="radio"
										name="provider"
										id="flutterwave"
										className="form-control form-check-inline form-check-input form-check"
										value={provider}
										onChange={e => setProvider(e.target.title)}
										checked={provider === "flutterwave"}
										title="flutterwave"
									/>
									<label htmlFor="flutterwave">
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flutterwave_Logo.png/1200px-Flutterwave_Logo.png?20220812092224"
											alt="Flutterwave"
											className="img-fluid h-auto w-50"
										/>
									</label>
								</div>
							)}
						</div>
					</>
				)}
				{proceed && proceed?.toPay && (
					<>
						<p className="text-capitalize border-bottom d-flex justify-content-between py-3">
							<span>Amount: </span>
							<span className="fontInherit Lexend fw-bold">
								NGN {numberWithCommas(proceed?.amount)}
							</span>{" "}
						</p>
						<p className="text-capitalize border-bottom d-flex justify-content-between py-3">
							<span>Charges: </span>
							<span className="fontInherit Lexend fw-bold">
								NGN {numberWithCommas(proceed?.charges)}
							</span>{" "}
						</p>
						<p className="text-capitalize border-bottom d-flex justify-content-between py-3">
							<span>Total: </span>
							<span className="fontInherit Lexend fw-bold">
								NGN {numberWithCommas(proceed?.total)}
							</span>{" "}
						</p>
					</>
				)}
				<Buttons
					onClick={
						!proceed
							? handleConfirmation
							: !proceed?.toPay
							? () => handleSuccess()
							: () => {
									if (provider === "flutterwave") {
										handleFlutterPayment({
											callback: response => {
												console.log(response);
												setPaymentData(response);
												closePaymentModal();
											},
											onClose: () => {},
										});
									} else {
										initializePayment(onSuccess, onClose);
									}
							  }
					}
					loading={loading}
					title={
						proceed
							? !proceed?.toPay
								? "enroll now"
								: "make payment"
							: "confirm status"
					}
					css="tw-h-14 tw-w-full tw-bg-[#FBB100] tw-text-white tw-mt-12 tw-rounded tw-text-lg tw-font-bold sansation text-capitalize hover:tw-bg-[#FBB100]"
				/>
			</div>
		</div>
	);
}

export default Checkout
