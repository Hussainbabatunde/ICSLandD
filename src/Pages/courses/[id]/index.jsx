import React, { useState, useEffect, useContext } from "react";
import image from "../../../assets/amico1.png";
import image2 from "../../../assets/amico2.png";
import image3 from "../../../assets/graduation-cap.png";
import image4 from "../../../assets/character-1.png";
import user from "../../../assets/avatar3.png";
import { Rating } from "react-simple-star-rating";
import { Progress } from "reactstrap";
import quest from "../../../assets/graphic_design_header_venngage_blog.png";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { GlobalState } from "../../../Data/Context";
import { ModalComponents } from "../../../Components/DefaultHeader";
import { Buttons, Loader } from "../../../Utils";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const MainCourse = () => {
	let trending = [
		{
			bg: "radial-gradient(69.67% 69.67% at 26.75% 43.67%, #EBB5E9 0%, rgba(188, 66, 176, 0.8) 100%)",
			topic: "Business Analysis",
			start: "Starts from 01 May 2023",
			image,
		},
		{
			bg: "linear-gradient(143.47deg, #F0C11C -11.49%, rgba(240, 232, 28, 0.7) 78.72%)",
			topic: "Business Analysis",
			start: "Starts from 01 May 2023",
			image: image2,
		},
		{
			bg: "linear-gradient(143.47deg, #1CF0E3 -11.49%, rgba(28, 151, 240, 0.7) 78.72%)",
			topic: "Business Analysis",
			start: "Starts from 01 May 2023",
			image: image3,
		},
		{
			bg: "radial-gradient(69.67% 69.67% at 26.75% 43.67%, #F78F8F 0%, rgba(247, 13, 153, 0.8) 100%)",
			topic: "Business Analysis",
			start: "Starts from 01 May 2023",
			image: image4,
		},
	];

	let [getSearch] = useSearchParams(),
		{ course } = useContext(GlobalState),
		[state, setState] = useState(null);

	useEffect(() => {
		course?.data?.map(
			item => item?._id === getSearch?.get("course") && setState(item)
		);
	}, [getSearch, course?.data]);

	let tabViews = [
			"overview",
			"course-content",
			"additional-resources",
			"rating",
		],
		[active, setActive] = useState("overview");

	if (course?.isLoading) return <Loader />;

	if (!state) return;
	return (
		<div>
			<div className="fullHeight p-3 px-lg-5 pb-5">
				<div className="bg-white rounded p-3">
					<h3 className="tw-text-2xl tw-font-bold tw-text-black">
						{state?.title}
					</h3>
					<div className="row g-3 mx-0 mt-2">
						<div className="col-md-7" style={{ maxHeight: "30rem" }}>
							{state?.image?.url || state?.quest?.[0]?.image?.url ? (
								<img
									src={
										state?.image?.url ||
										state?.quest?.[0]?.image?.url ||
										require("../../../assets/image369(1).png")
									}
									alt={`Course: ${state?.title}`}
									className="img-fluid w-100 h-100"
								/>
							) : (
								<video
									src=""
									autoPlay={false}
									controls
									className="w-100 h-100"
								/>
							)}
						</div>
						<div className="col-md-5 tw-mt-4 tw-bg-white tw-shadow-xl tw-rounded-md tw-py-6">
							<p className="tw-text-xl tw-text-[#454657] tw-font-bold tw-pb-3">
								Trending courses
							</p>
							<div className="tw-grid tw-grid-cols-2 tw-gap-2">
								{trending?.map((item, i) => (
									<div className="" key={i}>
										<div
											className="rounded tw-shadow-xl py-4 px-2 text-center text-white d-flex tw-h-40 flex-column"
											style={{
												background: item?.bg,
												//   height: "200px",
											}}>
											<h6>{item?.topic}</h6>
											<small>{item?.start}</small>
											<div className="mt-auto">
												<img
													src={item?.image}
													alt={item?.topic}
													className="img-fluid mx-auto"
												/>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="d-flex align-items-center border-bottom">
						{tabViews?.map((item, i) => (
							<div
								key={i}
								onClick={() => setActive(item)}
								className={`btn rounded-0 text-capitalize ${
									active === item
										? "border-width-4-color border-width-4-2 text-main"
										: ""
								}`}>
								{item?.replace("-", " ")}
							</div>
						))}
					</div>

					<div
						className={`p-3 py-md-5 ${
							active === "additional-resources" ? "bg-light" : ""
						}`}
						style={{ minHeight: "40vh" }}>
						{active === "rating" ? (
							<Review state={state?.rating} />
						) : active === "course-content" ? (
							<CourseContent state={state} />
						) : active === "additional-resources" ? (
							<AdditionalResources state={state} />
						) : (
							<Overview state={state} />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainCourse;

let AdditionalResources = ({ state }) => {
	let articles = [
		{
			title: `Business Analysis Basics`,
			author: "Debbie Mary",
			link: "https://google.com",
			book: "20 things that makes up a Data Analyst",
			bg: "#7610A6",
			bgSec: "#A775E8",
		},
		{
			bgSec: "#4CA355",
			title: `Business Analysis Basics`,
			author: "Debbie Mary",
			book: "20 things that makes up a Data Analyst",
			link: "https://google.com",
			bg: "#069383",
		},
		{
			bgSec: "#4C5AA3",
			title: `Business Analysis Basics`,
			book: "20 things that makes up a Data Analyst",
			author: "Debbie Mary",
			link: "https://google.com",
			bg: "#0F0BC7",
		},
		{
			bgSec: "#fdcb53",
			book: "20 things that makes up a Data Analyst",
			title: `Business Analysis Basics`,
			author: "Debbie Mary",
			link: "https://google.com",
			bg: "#F0E81C",
		},
	];
	return (
		<>
			<div className="row mx-0 g-4">
				<div className="col-lg-8">
					<h5 className="text-uppercase fw-bold">BOOKS RECOMMENDED</h5>
					<div
						className="d-flex align-items-center pb-3 noScroll"
						style={{
							overflowX: "scroll",
						}}>
						{state?.resources
							?.filter(item => item?.type === "book")
							?.map((item, i) => (
								<div className="p-2" key={i}>
									<div
										className="rounded p-3"
										onClick={() => window.open(item?.link, "_blank")}
										style={{ background: articles?.[i]?.bgSec }}>
										<div
											className="p-3 rounded text-white"
											style={{
												background: articles?.[i]?.bg,
												width: "184px",
												height: "193px",
												fontSize: "24px",
											}}>
											{item?.book}
										</div>
										<small className="d-block Inter fontReduce text-white fw-bold">
											{item?.book}
										</small>
										<small className="text-white">Author: {item?.author}</small>
									</div>
								</div>
							))}
					</div>
					<div className="bg-white my-2 rounded p-3">
						<h5 className="text-uppercase fw-bold">
							LINKS TO WATCH RECOMMENDED VIDEOS ON COURSE
						</h5>
						<div className="row mx-0 g-4">
							{state?.resources
								?.filter(item => item?.type === "video")
								?.map((item, i) => (
									<p key={i} className="col-6">
										<a
											className="text-decoration-none text-main"
											href={item?.link}
											target="_blank"
											rel="noopener noreferrer">
											{item?.title || item?.link}
										</a>
									</p>
								))}
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<h4 className="py-3 text-uppercase fw-bold Inter">Articles</h4>
					{state?.resources
						?.filter(item => item?.type === "article")
						?.map((item, i) => (
							<div className="py-2" key={i}>
								<div className="bg-white rounded d-flex justify-content-between align-items-center p-2">
									<div>
										<h6 style={{ color: "#4DAC6C" }}>
											{item?.title || item?.link}
										</h6>
										<small className="text-muted">{item?.author}</small>
									</div>
									<button
										onClick={() => window.open(item?.link, "_blank")}
										className="btn btn-outline-primary">
										Read on site
									</button>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

let CourseContent = ({ state }) => {
	const navigate = useNavigate(),
		location = useLocation(),
		[isOpen, setIsOpen] = useState(-1);

	return (
		<>
			{state?.module?.map((item, i) => (
				<div className="card" key={i}>
					<div className="tw-border-b tw-border-t-black tw-border-b-black tw-p-5">
						<div
							onClick={() => setIsOpen(i === isOpen ? -1 : i)}
							className="tw-flex tw-cursor-pointer tw-justify-between tw-items-center">
							<span className="d-flex align-items-center">
								<span>{item?.title}</span>
							</span>
							<div>
								{isOpen === i ? (
									<BiChevronUp size={20} />
								) : (
									<BiChevronDown size={20} />
								)}
							</div>
						</div>
						{isOpen === i && (
							<>
								<div>
									<div className="card-body p-5">
										{item?.quest?.map((list, i) => (
											<div className="py-2" key={i}>
												<div
													style={{
														background: "#17217A",
													}}
													className="bg-main p-3 d-flex align-items-center justify-content-between text-white">
													<div className="d-lg-flex align-items-center justify-content-lg-between w-75">
														<img
															src={list?.image?.url || quest}
															alt={list?.title}
															style={{
																height: "7rem",
															}}
															className="img-fluid rounded"
														/>
														<div className="tw-w-96">
															<h6 className="text-capitalize mb-2">
																{list?.title}
															</h6>
															<Progress
																style={{ height: "4px" }}
																value={list?.progress}
																className="mb-3"
															/>
															<p>{list?.progress}%</p>
														</div>
													</div>
													<div className="">
														<button
															onClick={() =>
																navigate(
																	`/courses/module/${item?._id}${location?.search}&quest=${list?._id}&module=${item?._id}`
																)
															}
															className="btn btn-warning text-capitalize text-white">
															Resume Course
														</button>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							</>
						)}
					</div>
				</div>
			))}
		</>
	);
};

let Overview = ({ state }) => {
	return (
		<>
			<div className="py-4 border-bottom">
				<h3 className="Inter">About Course</h3>
				<p>{state?.title}</p>
				<p>{state?.caption}</p>
			</div>
			<div className="py-3 border-bottom row mx-0 textTrunc textTrunc5">
				<span className="col-2">Skill level: {state?.skillLevel}</span>
				<span className="col-2">Duration: {state?.courseDuration} week(s)</span>
				<span className="col-2">Language: {state?.language}</span>
				<span className="col-2">
					Lectures:{" "}
					{state?.module?.reduce((ac, i) => (ac += i?.quest?.length), 0)}
				</span>
				<span className="col-2">
					Play time: {Math.floor(state?.duration / 60).toFixed(0)}
					{" : "}
					{state?.duration % 60} mins
				</span>
			</div>
			<div className="py-3 border-bottom row mx-0 textTrunc textTrunc5">
				<span className="col-2">Description:</span>
				<span className="col-10">
					{state?.description ||
						`Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
					minima explicabo blanditiis cum quaerat quia, porro labore culpa ut
					nihil ratione, cumque excepturi dicta dolorem optio vero amet
					asperiores. Incidunt voluptate alias voluptatibus dolores omnis quae
					architecto mollitia, perspiciatis, ad consequuntur rerum. Nobis,
					eligendi blanditiis fugiat beatae distinctio, hic nesciunt aspernatur
					quo voluptas accusamus atque vel temporibus aperiam architecto
					inventore libero nam culpa rerum, quis veniam corporis. Cupiditate
					aliquam a ea. Unde optio hic iste et fugit. Voluptatum atque alias
					harum quasi animi. Similique impedit at vero sapiente aperiam amet
					dolore, qui praesentium minima atque aspernatur, quisquam doloribus
					eveniet voluptas!`}
				</span>
			</div>
			<div className="py-3 border-bottom row mx-0 textTrunc textTrunc5">
				<span className="col-2">Softwares:</span>
				<span className="col-10">
					{state?.softwares?.map((item, i) => (
						<span className="mx-1" key={i}>
							{item}
							{state?.softwares?.length - 1 !== i ? <> | </> : null}
						</span>
					))}
				</span>
			</div>
			<div className="py-3 border-bottom row mx-0 textTrunc textTrunc5">
				<span className="col-2">What you'll learn:</span>
				<span className="col-10">
					{state?.benefits?.map((item, i) => (
						<span className="d-block" key={i}>
							{item}
						</span>
					))}
				</span>
			</div>
		</>
	);
};

export let Review = ({ state, noHeader }) => {
	let [isRating, setIsRating] = useState(false);
	if (!state) return;
	return (
		<>
			{!noHeader && (
				<div
					className="py-3 border-bottom d-flex justify-content-between
      ">
					<span>Rating</span>
					<button className="btn btn-primary" onClick={() => setIsRating(true)}>
						Add
					</button>
				</div>
			)}
			{state?.length === 0
				? // <EmptyComponent />
				  null
				: state?.map((item, i) => (
						<div className="py-2" key={i}>
							<div className="rounded border row mx-0 py-3">
								<div className="col-1">
									<img
										src={item?.user?.avatar?.url || user}
										alt={`${item?.user?.privilege}: ${item?.user?.lastName}`}
										style={{
											height: "4rem",
											width: "4rem",
											objectFit: "cover",
											objectPosition: "center 15%",
										}}
										className="rounded-circle img-fluid mx-auto"
									/>
								</div>
								<div className="col-11">
									<h6>
										{item?.user?.lastName} {item?.user?.firstName}{" "}
										<span className="text-muted fw-thin fw-normal">
											({item?.user?.privilege})
										</span>
									</h6>
									<Rating
										initialValue={item?.rating}
										onClick={() => null}
										fillColor="#fdcb53"
										size={16}
										readonly
									/>
									<p>{item?.content}</p>
								</div>
							</div>
						</div>
				  ))}
			<AddRating isOpen={isRating} toggle={() => setIsRating(false)} />
		</>
	);
};
// const ResumeCourse = () => {
//   return (
//     <div>
//       <div className="tw-w-full tw-h-96 tw-mt-6 tw-bg-black"></div>
//     </div>
//   );
// };

export const AddRating = ({ toggle, isOpen }) => {
	let { course, manageCourses } = useContext(GlobalState),
		init = { content: "", rating: 0 },
		[state, setState] = useState(init),
		[submit, setSubmit] = useState(false),
		[loading, setLoading] = useState(false),
		[getSearch] = useSearchParams(),
		handleSubmit = async () => {
			if (!state?.rating) return;
			setLoading(true);
			await manageCourses(
				{ course: getSearch?.get("course"), ...state },
				"/rating"
			);
			setLoading(false);
			setSubmit(true);
		};

	let handleRating = rate => {
		setState({ ...state, rating: rate });
	};

	useEffect(() => {
		if (course?.isUpdated && submit) {
			toggle();
			setState(init);
			setSubmit(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [course?.isUpdated, submit]);

	return (
		<ModalComponents isOpen={isOpen} back={toggle} title={"Add a rating"}>
			<form onSubmit={handleSubmit} className="tw-mt-4">
				<p>Rating</p>
				<Rating
					initialValue={state?.rating}
					onClick={handleRating}
					fillColor="#fdcb53"
					className="mb-3"
				/>
				<textarea
					name=""
					style={{
						resize: "none",
						height: "10rem",
					}}
					value={state?.content}
					onChange={e => setState({ content: e.target.value })}
					className="tw-bg-[#F5F5FF] tw-w-full tw-h-32 tw-p-3 tw-text-base tw-font-light tw-text-[#898A93]"
					placeholder="Write about course"
				/>
				<Buttons
					onClick={handleSubmit}
					loading={loading}
					css={
						"tw-border tw-h-9 tw-float-right tw-w-20 tw-rounded tw-text-base tw-font-normal tw-mt-2 segoe tw-text-[#0F0BC7] tw-border-[#0F0BC7] text-capitalize hover:tw-border-[#0F0BC7]"
					}
					width={"ms-auto"}
					title={"post"}
					loadCss={"#0f0bc7"}
				/>
			</form>
		</ModalComponents>
	);
};
