// import { Header } from "../Components";
import { HiLocationMarker } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import Map from "../assets/map.png";
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaInstagram,
} from "react-icons/fa";
import Img from "../assets/contact.png";
import { PageHeader } from "./blog";
import { useState, useEffect } from "react";
import { CourseModal } from "./home";
import axios from "axios";
import { toast } from "react-toastify";
import { Buttons } from "../Utils";

const ContactUs = () => {
	const [modal, setModal] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	let init = {
			fullname: "",
			email: "",
			telephone: "",
			subject: "",
			message: "",
			address: "",
		},
		[stateData, setStateData] = useState(init);

	let [loading, setLoading] = useState(false);

	let handleSubmit = async e => {
		e.preventDefault();
		if (!stateData.fullname || !stateData.email || !stateData.message) {
			return toast.warn("Please fill out your name, email and the message");
		}
		setLoading(true);
		try {
			let res = await axios.post("/api/v1/feedback", { ...stateData });
			toast.success(res.data.msg, { autoClose: 5000 });
			setLoading(false);
			setStateData(init);
		} catch (err) {
			let error = err.response?.data?.error;
			if (error) {
				error.forEach(error => toast.error(error.msg));
			}
			setLoading(false);
		}
	};

	let textChange =
		name =>
		({ target: { value } }) => {
			setStateData({ ...stateData, [name]: value });
		};
	return (
		<div>
			<PageHeader handleCourses={() => setModal(true)} />
			<div className="tw-w-full tw-bg-[#f4f9ff]">
				<div className="tw-py-10 tw-items-center container tw-bg-[#f4f9ff] tw-flex lg:tw-justify-between tw-justify-center">
					<div className="">
						<h6 className="tw-text-3xl tw-font-bold tw-text-[#0c0048] tw-uppercase tw-leading-[56px] tw-tracking-[-0.022em]">
							contact us
						</h6>
						<div className="tw-border-l-[3px] tw-border-l-[#0c0048] tw-pl-8 tw-mt-8">
							<p className="tw-text-lg tw-font-normal sansation tw-text-[#0c0048cc] tw-capitalize">
								have any questions ?
							</p>
							<p className="tw-text-lg tw-font-normal sansation tw-text-[#0c0048cc] tw-capitalize">
								reach out to us below
							</p>
						</div>
					</div>
					<div>
						<img src={Img} alt="" className="md:tw-block tw-hidden" />
					</div>
				</div>
			</div>
			<div className="tw-mt-20 container tw-rounded tw-bg-[#070565] tw-grid lg:tw-grid-cols-2 tw-gap-16 tw-py-20 tw-mb-20">
				<div className="tw-bg-[#e4f1ff] tw-p-10 lg:-tw-ml-16 tw-flex tw-justify-center">
					<div>
						<h6 className="tw-text-5xl tw-font-bold segoe tw-text-[31b1b1bcc] tw-capitalize">
							get in touch
						</h6>
						<div className="tw-mt-8 tw-space-y-4">
							<div className="tw-flex tw-gap-3 tw-items-center">
								<HiLocationMarker />
								<p className="tw-text-sm tw-font-normal tw-text-[#1b1b1bcc]">
									10, Olusoji Idowu Street,Ilupeju, <br /> Obanikoro, Lagos.
								</p>
							</div>
							<div className="tw-flex tw-gap-3 tw-items-center">
								<HiPhone />
								<p className="tw-text-sm tw-font-normal tw-text-[#1b1b1bcc]">
									09088315020
								</p>
							</div>
							<div className="tw-flex tw-gap-3 tw-items-center">
								<HiOutlineMail />
								<p className="tw-text-sm tw-font-normal tw-text-[#1b1b1bcc]">
									info@bcodestech.com
								</p>
							</div>
						</div>
						<img src={Map} alt="" className="tw-mt-8" />
						<div className="tw-mt-6 tw-flex tw-gap-8">
							<a href="#top">
								<FaFacebookF size={20} />
							</a>
							<a href="#top">
								<FaTwitter size={20} />
							</a>
							<a href="#top">
								<FaLinkedinIn size={20} />
							</a>
							<a href="#top">
								<FaInstagram size={20} />
							</a>
						</div>
					</div>
				</div>
				<div className="">
					<h3 className="tw-text-xl tw-font-medium tw-uppercase tw-font-sans tw-text-white">
						contact us
					</h3>
					<div className="tw-mt-4 lg:tw-w-5/6 tw-grid tw-grid-cols-2 tw-gap-16">
						<input
							type="text"
							placeholder="Full name*"
							className="tw-text-white tw-text-sm tw-font-normal tw-font-sans tw-bg-transparent tw-border-b-[1px] tw-border-b-white tw-h-16 tw-focus:border-0"
							value={stateData?.fullname}
							onChange={textChange("fullname")}
						/>
						<input
							value={stateData?.email}
							onChange={textChange("email")}
							type="text"
							placeholder="Email*"
							className="tw-text-white tw-text-sm tw-font-normal tw-font-sans tw-bg-transparent tw-border-b-[1px] tw-border-b-white tw-h-16 tw-focus:border-0"
						/>
					</div>
					<div className="tw-mt-4 lg:tw-w-5/6 tw-grid tw-grid-cols-2 tw-gap-16">
						<input
							type="text"
							placeholder="Phone*"
							className="tw-text-white tw-text-sm tw-font-normal tw-font-sans tw-bg-transparent tw-border-b-[1px] tw-border-b-white tw-h-16 tw-focus:border-0"
							value={stateData?.telephone}
							onChange={textChange("telephone")}
							maxLength={11}
						/>
						<input
							value={stateData?.address}
							onChange={textChange("address")}
							type="text"
							placeholder="Address*"
							className="tw-text-white tw-text-sm tw-font-normal tw-font-sans tw-bg-transparent tw-border-b-[1px] tw-border-b-white tw-h-16 tw-focus:border-0"
						/>
					</div>
					<input
						type="text"
						value={stateData?.subject}
						onChange={textChange("subject")}
						placeholder="Subject*"
						className="tw-text-white tw-text-sm tw-mt-4 tw-font-normal tw-font-sans tw-bg-transparent tw-border-b-[1px] tw-border-b-white tw-h-16 tw-focus:border-0"
					/>
					<div className="tw-mt-12">
						<textarea
							type="text"
							value={stateData?.message}
							onChange={textChange("message")}
							placeholder="How can we help you ?"
							className="tw-bg-transparent tw-border-[1px] tw-border-white tw-h-24 tw-w-3/4 tw-rounded-lg tw-px-4 tw-py-4 tw-text-white tw-text-sm"
						/>
					</div>
					<div className="tw-flex tw-justify-center tw-mt-4 tw-w-3/4">
						<Buttons
							title={"Submit"}
							loading={loading}
							onClick={handleSubmit}
							css="tw-h-16 tw-w-48 tw-bg-[#FBB100] tw-rounded tw-text-base tw-font-semibold tw-text-white"
							width={"auto"}
						/>
					</div>
				</div>
			</div>
			{modal && <CourseModal handleclose={() => setModal(false)} />}
		</div>
	);
};

export default ContactUs;
