import React, { useContext } from "react";
import Img from "../../assets/certicatesimg.png";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../Data/Context";

const Certificates = () => {
	const { certificate } = useContext(GlobalState);
	const navigate = useNavigate();
	// const CertificateList = [
	//   {
	//     id: 1,
	//     course: "Data Analysis Certification",
	//     score: "90%",
	//     grade: "Excellent",
	//   },
	//   {
	//     id: 2,
	//     course: "Data Analysis Certification",
	//     score: "90%",
	//     grade: "Excellent",
	//   },
	//   {
	//     id: 3,
	//     course: "Data Analysis Certification",
	//     score: "55%",
	//     grade: "Average",
	//   },
	//   {
	//     id: 4,
	//     course: "Data Analysis Certification",
	//     score: "90%",
	//     grade: "Excellent",
	//   },
	//   {
	//     id: 5,
	//     course: "Data Analysis Certification",
	//     score: "55%",
	//     grade: "Average",
	//   },
	// ];
	return (
		<div>
			<div className="">
				<h4 className="tw-text-base tw-font-bold tw-uppercase tw-border-l-4 tw-border-l-[#0f0bc7] lg:tw-pl-8 tw-pl-3 segoe">
					certificates
				</h4>
				<p className="lg:tw-text-[15px] tw-text-sm tw-text-center lg:tw-text-left tw-font-normal tw-text-black tw-pt-3 lg:tw-pl-8 segoe">
					On your completion of a course, your certificate will be readily
					available. For your just concluded course.{" "}
					<span className="tw-text-[#070bc7] segoe">
						<a href="#top"> Click here</a>
					</span>{" "}
					to download certificate.
				</p>
				<p className="tw-text-base tw-font-bold tw-text-[#1b1b1b] tw-uppercase tw-pt-6 segoe tw-pl-9">
					certificates received
				</p>
				<div className="tw-mt-4 tw-space-y-3 lg:tw-pl-8">
					{certificate?.data?.map((list, id) => (
						<div
							key={id}
							className="tw-flex lg:tw-w-5/6 lg:tw-px-5 tw-px-2 lg:tw-gap-0 tw-gap-3 lg:tw-justify-between lg:tw-items-center tw-h-32 tw-border-2 tw-border-[#cccccc]">
							<div className="tw-flex lg:tw-gap-16 tw-gap-6 tw-items-center">
								<img
									src={Img}
									alt="certificate"
									className="tw-w-20 tw-h-24 lg:tw-w-fit lg:tw-h-fit"
								/>
								<div className="lg:tw-space-y-4 tw-space-y-2">
									<h6 className="tw-text-sm tw-font-bold tw-text-[#1b1b1b]">
										Course: {list.course}
									</h6>
									<p className="tw-text-sm tw-font-bold tw-text-[#1b1b1b]">
										Grade: {list.score}{" "}
										<span
											className={
												list.grade === "Excellent"
													? "tw-text-[#2a5aff] tw-pl-4"
													: list.grade === "Average"
													? "tw-text-[#069383] tw-pl-4"
													: null
											}>
											{list.grade}
										</span>
									</p>
									<button
										onClick={() => navigate(`/certificates/${id}`)}
										className="tw-bg-[#ffd600] tw-block lg:tw-hidden tw-h-7 tw-w-28 tw-rounded-md tw-text-sm tw-font-normal tw-text-black">
										Download
									</button>
								</div>
							</div>
							<button
								onClick={() => navigate(`/certificates/${id}`)}
								className="tw-bg-[#ffd600] lg:tw-block tw-hidden tw-h-7 tw-w-28 tw-rounded-md tw-text-sm tw-font-normal tw-text-black">
								Download
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Certificates;
