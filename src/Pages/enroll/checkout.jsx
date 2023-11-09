import { useState, useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Buttons } from "../../Utils";
import { GlobalState } from "../../Data/Context";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { usePaystackPayment } from "react-paystack";

const Checkout = () => {
	let [provider, setProvider] = useState(""),
		[getSearch] = useSearchParams(),
		[loading, setLoading] = useState(false),
		[proceed, setProceed] = useState(false),
		[paymentData, setPaymentData] = useState(false),
		{ plan, enroll, numberWithCommas, auth, getCourses, getCoursesToEnroll } =
			useContext(GlobalState),
		navigate = useNavigate();

	let handleConfirmation = async e => {
		e?.preventDefault();
		let data = {
			plan: getSearch?.get("plan"),
			course: getSearch?.get("course"),
			provider,
			email: auth?.user?.email,
			name: `${auth?.user?.lastName} ${auth?.user?.firstName}`,
			telephone: auth?.user?.telephone,
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
				{ ...data }
			);

			toast.success(res.data.msg);
			setProceed(res?.data?.data);
			setLoading(false);
			console.log({ data, res: res?.data });
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
				email: auth?.user?.email,
				phone_number: auth?.user?.telephone,
				name: `${auth?.user?.lastName} ${auth?.user?.firstName}`,
			},
			customizations: {
				title: "BCT " + getSearch?.get("title"),
				description: "Course Payment",
				logo: process.env.REACT_APP_IMAGE_URL,
			},
		},
		handleFlutterPayment = useFlutterwave(configFlutter);

	let configPaystack = {
			email: auth?.user?.email,
			amount: Number(proceed?.total * 100),
			publicKey: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
			metadata: {
				phone: auth?.user?.telephone,
				name: `${auth?.user?.lastName} ${auth?.user?.firstName}`,
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
					email: auth?.user?.email,
					name: `${auth?.user?.lastName} ${auth?.user?.firstName}`,
					telephone: auth?.user?.telephone,
				}
			);

			toast.success(res.data.msg);
			setLoading(false);
			setPaymentData(null);
			setProceed(null);
			navigate("/dashboard");
			await getCourses();
			await getCoursesToEnroll();
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

	if (!plan?.data || !enroll?.data) return;

	return (
		<div className="container tw-py-20">
			<div className="mb-4 w-75 mx-auto">
				<h1 className="text-uppercase sansation mb-3">payment details</h1>
				<p className="text-capitalize border-bottom d-flex justify-content-between py-3">
					<span>Course: </span>
					<span className="fontInherit Lexend">
						{
							enroll?.data?.find(item => item?._id === getSearch?.get("course"))
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
							enroll?.data?.find(item => item?._id === getSearch?.get("course"))
								?.amount || 0
						)}
					</span>{" "}
				</p>
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
};

export default Checkout;
