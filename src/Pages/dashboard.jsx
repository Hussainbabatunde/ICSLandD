import React, { useContext } from "react";
import img from "../assets/image376.png";
import image from "../assets/image369(1).png";
import avatar from "../assets/avatar3.png";
import moment from "moment";
import { BiBookmark } from "react-icons/bi";
import { Progress } from "reactstrap";
import { IoIosAdd } from "react-icons/io";
// import { progressList } from "../progressList";
import { GlobalState } from "../Data/Context";
import { useNavigate } from "react-router-dom";
import { EmptyComponent, Loader } from "../Utils";
import Enroll from "./enroll";

const Dashboard = () => {
  let { course, notification, discussion, tasks } = useContext(GlobalState),
    navigate = useNavigate();

  if (course?.isLoading) return <Loader />;
console.log({ tasks });
return (
	<section className="fullHeight px-3 px-lg-5 pb-5">
		{course?.data?.length > 0 ? (
			<>
				{" "}
				<div className="border-left py-3">
					<h3>All Courses</h3>
				</div>
				<div
					className="tw-flex tw-items-center pb-3 noScroll"
					style={{
						overflowX: "scroll",
					}}>
					{course?.data?.slice(0, 10)?.map((item, i) => (
						<div
							className="p-2"
							key={i}
							onClick={() =>
								navigate(
									`/courses/${item?.title?.replace(/[/]/g, "_")}?course=${
										item?._id
									}`
								)
							}>
							<div
								className="tw-bg-white lg:py-2 tw-shadow-xl lg:tw-w-80 tw-w-60"
								style={{
									borderRadius: "25px",
									// height: "393px",
								}}>
								<div className="position-relative bg-transparent">
									<img
										src={item?.image?.url || image}
										alt={item?.title}
										className="img-fluid lg:tw-h-56 tw-h-36"
										style={{
											width: "100%",
											// height: "291px",
											borderRadius: "16px",
										}}
									/>
									<button
										style={{
											bottom: "0",
											left: "50%",
											transform: "translate(-50%,-50%)",
											backdropFilter: "blur(10px)",
										}}
										className="btn tw-absolute rounded-pill lg:px-4 text-white py-2 tw-whitespace-nowrap bg-transparent border Inter">
										<span className="Inter tw-text-sm">
											{Math.floor(item?.duration / 60).toFixed(0)}
											{" : "}
											{item?.duration % 60} : 00
										</span>
									</button>
								</div>
								<div className="py-2 px-4">
									<div className="d-flex align-items-center justify-content-between">
										<div className="w-100 py-2">
											<h4 className="text-capitalize Inter tw-font-semibold lg:tw-text-xl tw-text-sm tw-text-[#272727]">
												{item?.title}
											</h4>
											<div
												className="d-flex align-items-center Inter"
												style={{ color: "#107C41", fontWeight: "100" }}>
												<Progress style={{ height: "5px" }} value={50} />
											</div>
										</div>
										<img
											src={item?.user?.url || avatar}
											alt={item?.user?.lastName}
											style={{
												height: "3.5rem",
												width: "3.5rem",
												objectFit: "cover",
												objectPosition: "center 15%",
											}}
											className="rounded-circle img-fluid mx-md-3"
										/>
									</div>
								</div>
							</div>
						</div>
					))}
					{course?.data?.length < 2 && <Enroll noFormat />}
				</div>
				<div className="tw-grid lg:tw-grid-cols-2 tw-gap-6 tw-w-full">
					<div className="">
						<div className="border-left py-3">
							<h5 className="tw-font-bold tw-text-xl Inter tw-text-black">
								All Tasks
							</h5>
						</div>
						<div
							style={{
								height: "420px",
								overflowY: "auto",
							}}
							className="p-3 bg-white noScroll tw-rounded-3xl">
							{tasks?.data?.length > 0 ? (
								tasks?.data?.map((item, i) => (
									<div className="p-2 py-1 my-2" key={i}>
										<div className="tw-flex tw-gap-4 tw-items-center tw-justify-between">
											<div className="w-75 Inter d-flex align-items-center">
												<div className="w-25">
													<img
														src={item?.image || img}
														alt={`Tutor`}
														style={{
															height: "5rem",
															width: "5rem",
															objectFit: "cover",
															objectPosition: "center 15%",
														}}
														className="rounded img-fluid mx-md-3"
													/>
												</div>
												<div className="w-75">
													<h5 className="Inter tw-text-base tw-font-semibold tw-text-[#1b1b1b]">
														{item?.topic}
													</h5>
													<p className="my-0 Inter tw-text-sm tw-text-[#929294] font-medium textTrunc textTrunc5">
														{item?.question}
													</p>
												</div>
											</div>
											<div>
												<h5
													className="tw-text-base tw-text-[#FF9966] tw-font-semibold"
													style={{ color: "#FF9966" }}>
													Deadline
												</h5>
												<p className="my-0 Inter">
													{moment().format("DD/MM/YYYY")}
												</p>
											</div>
										</div>
									</div>
								))
							) : (
								<EmptyComponent />
							)}
						</div>
					</div>
					<div className="">
						<div className="border-left py-3 tw-flex tw-pr-4 tw-justify-between">
							<h5 className="tw-font-bold tw-text-xl Inter tw-text-black">
								Frequently Asked Questions
							</h5>
							<button
								className="bg-primary tw-text-white w-p-1 tw-px-2 tw-flex tw-items-center tw-gap-1"
								data-bs-target="#askQuestionModal"
								data-bs-toggle="modal">
								<span>
									<IoIosAdd />
								</span>
								Add
							</button>
						</div>
						<div
							style={{
								borderRadius: "10px",
								height: "180px",
								overflowY: "auto",
							}}
							className="p-2 bg-white noScroll">
							{discussion?.data?.length > 0 ? (
								discussion?.data?.map((item, i) => (
									<div className="tw-px-4 tw-bg-[#F5F5FF] my-2 py-2" key={i}>
										<div className="d-flex align-items-center justify-content-between">
											<div className="w-75 Inter">
												<p className="Inter tw-text-[12px] tw-text-[#454657] tw-font-normal">
													{item?.content}
												</p>
												<p className="my-0 Inter tw-text-[10px] tw-font-normal pt-2">
													Posted on {moment().format("DD/MM/YYYY")}
												</p>
											</div>
											<div className="">
												<BiBookmark
													size={20}
													className="d-block mx-auto mb-2"
												/>
												<div className="btn-group">
													<button className="btn bg-white">
														{moment().format("HH")}
													</button>
													<button className="btn border">
														{moment().format("mm")}
													</button>
												</div>
											</div>
										</div>
									</div>
								))
							) : (
								<EmptyComponent />
							)}
						</div>
						<div className="border-left py-3">
							<h5 className="tw-font-bold tw-text-xl Inter tw-text-black">
								Notifications
							</h5>
						</div>
						<div
							style={{
								borderRadius: "10px",
								height: "180px",
								overflowY: "auto",
							}}
							className="p-2 bg-white noScroll">
							{notification?.all?.length > 0 ? (
								notification?.all?.map((item, i) => (
									<div className="tw-px-4 tw-bg-[#F5F5FF] my-2 py-2" key={i}>
										<div className="d-flex align-items-center justify-content-between">
											<div className="w-75 Inter">
												<p className="Inter tw-text-[12px] tw-text-[#454657] tw-font-normal">
													{item?.message}
												</p>
												<p className="my-0 Inter tw-text-[10px] tw-font-normal pt-2">
													{moment(item?.createdAt).fromNow()}
												</p>
											</div>
											<div className="">
												<img
													src={item?.user?.url || avatar}
													alt={item?.user?.lastName}
													style={{
														height: "3.5rem",
														width: "3.5rem",
														objectFit: "cover",
														objectPosition: "center 15%",
													}}
													className="rounded-circle img-fluid mx-md-3"
												/>
											</div>
										</div>
									</div>
								))
							) : (
								<EmptyComponent />
							)}
						</div>
					</div>
					<div
						style={{
							boxShadow: "0px 10px 10px -10px rgba(15, 11, 199, 0.25)",
						}}
						className="tw-h tw-bg-white tw-py-12 tw-px-4 tw-gap-12">
						<div className="">
							<p className="tw-text-xl tw-text-[#454657] tw-font-semibold tw-text-center">
								Courses Completed
							</p>
						</div>
						{/* <div className="tw-w-full tw-space-y-6 ">

						<div className="md:tw-w-1/3 md:tw-float-left">
							<div className="tw-bg-white md:tw-float-left tw-h-32 tw-w-32 tw-border-[8px] tw-rounded-full tw-mt-4 tw-flex tw-justify-center tw-items-center tw-border-[#F3359C] tw-grid-rows-6">
								<p
									className="tw-text-4xl tw-font-black tw-text-[#454657]"
									style={{}}>
									6
								</p>
							</div>
						</div>
						{progressList?.map(progress => (
							<div
								key={progress.id}
								className="md:tw-w-1/3 mx-1 md:tw-float md:tw-inline-block w-32">
								<div className="">
									<p className="tw-text-base tw-font-normal tw-text-[#5C5D6B] tw-capitalize">
										{progress.courses}
									</p>
									<p className="tw-text-[12px] tw-text-[#A1A2A9] tw-font-normal tw-pt">
										{progress.progress} course progress
									</p>
									<Progress
										style={{
											height: "6px",
										}}
										value={60}
										barStyle={{
											color: "#000000",
										}}
										color="#F3359C"
									/>
								</div>
							</div>
						))}
					</div> */}
					</div>
					<div
						style={{
							boxShadow: "0px 10px 10px -10px rgba(15, 11, 199, 0.25)",
						}}
						className="tw-h tw-bg-white tw-py-12 tw-px-4 tw-gap-12">
						<div className="">
							<p className="tw-text-xl tw-text-[#454657] tw-font-semibold tw-text-center">
								Courses in Progress
							</p>
						</div>
						{/* <div className="tw-w-full tw-space-y-6 ">
						<div className="md:tw-w-1/3 md:tw-float-left">
							<div className="tw-bg-white md:tw-float-left tw-h-32 tw-w-32 tw-border-[8px] tw-rounded-full tw-mt-4 tw-flex tw-justify-center tw-items-center tw-border-[#BA68C8] tw-grid-rows-6">
								<p
									className="tw-text-4xl tw-font-black tw-text-[#454657]"
									style={{}}>
									4
								</p>
							</div>
						</div>
						{progressList?.map(progress => (
							<div
								key={progress.id}
								className="md:tw-w-1/3 mx-1 md:tw-float md:tw-inline-block">
								<div className="">
									<p className="tw-text-base tw-font-normal tw-text-[#5C5D6B] tw-capitalize">
										{progress.courses}
									</p>
									<p className="tw-text-[12px] tw-text-[#A1A2A9] tw-font-normal tw-pt">
										{progress.progress} course progress
									</p>
									<Progress
										style={{
											height: "6px",
											width: "100%",
										}}
										value={60}
										color="#BA68C8"
									/>
								</div>
							</div>
						))}
					</div> */}
					</div>
				</div>
			</>
		) : (
			<Enroll />
		)}
	</section>
);
};

export default Dashboard;
