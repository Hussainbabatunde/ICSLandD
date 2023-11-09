import React, { useContext, useState } from "react";
import Banner from "../../assets/banner.png";
import Banner2 from "../../assets/Banner2.png";
import AskQuestionModal from "../../Components/askQuestionModal";
import SuccessModal from "../../Components/successModal";
// import { FaChevronRight } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../Data/Context";

const Enroll = ({ noFormat }) => {
	const [modal, setModal] = useState(false);
	return (
		<section className={`px-3 px-lg-5 ${!noFormat ? "fullHeight pb-5" : ""}`}>
			<div
				// style={{
				//   background: `url(${Banner})`,
				//   backgroundPosition: "center",
				//   backgroundSize: "cover",
				// }}
				className={`${
					!noFormat ? "tw-mt-8 tw-h-96 tw-w-full" : ""
				} tw-h-fit tw-w-full tw-relative`}>
				<img
					src={noFormat ? Banner2 : Banner}
					alt=""
					className="tw-h-52 lg:tw-h-full tw-w-full"
				/>
				<button
					onClick={() => setModal(true)}
					style={{
						background: "linear-gradient(180deg, #3D27EC 0%, #292E6D 100%)",
					}}
					className={`${
						noFormat ? "tw-w-80" : "tw-w-56"
					} tw-h-14 lg:tw-absolute tw-bottom-16 tw-mt-8 lg:tw-mt-0 tw-left-1/2 tw-font-bold tw-text-xl tw-text-white segoe tw-uppercase`}>
					{noFormat ? "REGISTER FOR A NEW COURSE" : "enroll now"}
				</button>
			</div>
			{modal && <EnrollModal handleclose={() => setModal(false)} />}
			<AskQuestionModal />
			<SuccessModal message={"DONE!"} />
		</section>
	);
};
export const EnrollModal = ({ handleclose }) => {
	// eslint-disable-next-line no-unused-vars
	const [active, setActive] = useState(null);
	let { enroll } = useContext(GlobalState);
	const navigate = useNavigate();
	// const Courses = [
	//   {
	//     id: 1,
	//     category: "Data and Analytics",
	//     courses: [
	//       "data analysis",
	//       "business analysis",
	//       "python programming",
	//       "big data analysis",
	//     ],
	//   },
	//   {
	//     id: 2,
	//     category: "Design",
	//     courses: ["web design", "web development"],
	//   },
	//   {
	//     id: 3,
	//     category: "Software Development",
	//     courses: ["fullstack development", "software testing"],
	//   },
	//   {
	//     id: 4,
	//     category: "Product Management",
	//     courses: ["product management"],
	//   },
	//   {
	//     id: 5,
	//     category: "Information and Security",
	//     courses: ["server engineering", "devops"],
	//   },
	// ];

	if (!enroll?.data) return <></>;

	return (
		<div>
			<div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-60 tw-flex tw-items-center tw-justify-center">
				<div
					style={{
						overflowY: "scroll",
					}}
					data-aos="zoom-up"
					data-aos-duration="1000"
					className="tw-bg-[#070565] tw-py-6 tw-px-6 tw-w-96 tw-h-96 noScroll">
					<div className="tw-flex tw-justify-between tw-items-center tw-px-4">
						<h6 className="sansation tw-font-bold tw-text-lg tw-text-white tw-uppercase">
							All Categories
						</h6>
						<IconContext.Provider value={{ color: "#fff" }}>
							<div onClick={handleclose} className="tw-cursor-pointer">
								<IoMdClose size={20} />
							</div>
						</IconContext.Provider>
					</div>
					<div className="tw-space-y-3 tw-mt-6">
						{enroll?.data?.map(item => (
							<div key={item?._id}>
								<div
									onClick={() =>
										navigate(
											`/enroll/${item?._id}?course=${item?._id}&title=${item?.title}`
										)
									}
									className={
										active === item?._id
											? "tw-flex tw-items-center tw-justify-between tw-bg-white tw-px-4 tw-py-2 tw-cursor-pointer tw-rounded-lg"
											: "tw-flex tw-items-center tw-justify-between tw-bg-transparent tw-px-4 tw-py-2 tw-rounded-lg tw-cursor-pointer"
									}>
									<p
										className={`${
											active === item?._id
												? "tw-text-[#080766]"
												: "tw-text-white"
										} tw-text-[13px] tw-font-normal Nunito`}>
										{item?.title}
									</p>
									{/* <IconContext.Provider
										value={
											active === item?._id
												? { color: "#080766" }
												: { color: "#fff" }
										}>
										<div>
											{active === item?._id ? (
												<FaChevronDown />
											) : (
												<FaChevronRight />
											)}
										</div>
									</IconContext.Provider> */}
								</div>
								{/* {item?.module?.map((module, i) => (
									<div key={i} className="tw-pl-6 tw-mt-2 tw-space-y-6">
										{active === item?._id ? (
											<p
												onClick={() =>
													navigate(
														`/enroll/${item?._id}?course=${item?._id}&title=${item?.title}`
													)
												}
												data-aos="flip-up"
												data-aos-duration="500"
												className="tw-text-sm tw-cursor-pointer tw-text-white Nunito tw-font-normal tw-capitalize">
												{module?.title}
											</p>
										) : null}
									</div>
								))} */}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Enroll;
