import React, { useState, useContext, useEffect } from "react";
import Profile from "../../../assets/moduleprofile.png";
// import Video from "../../../assets/video.png";
import Trophy from "../../../assets/trophy.png";
import Done from "../../../assets/coursedone.png";
import Done1 from "../../../assets/done1.png";
import CommentAvatar from "../../../assets/commentavatar.png";
import Reply from "../../../assets/reply.png";
import CommentImg from "../../../assets/comment.png";
import Emoji from "../../../assets/emoji.png";
// import Media from "../../../assets/media.png";
// import Microphone from "../../../assets/microphone.png";
import Send from "../../../assets/send.png";
import DoneModal from "../../../Components/DoneModal";
import TrophyGif from "../../../assets/trophy-winner.gif";
import { GlobalState } from "../../../Data/Context";
import { useSearchParams } from "react-router-dom";
import { Review } from "../[id]";
import { Buttons, Loader } from "../../../Utils";
import { ModalComponents } from "../../../Components/DefaultHeader";
import { Rating } from "react-simple-star-rating";
import ReactHlsPlayer from "react-hls-player";
import { useNavigate } from "react-router-dom";

const ID = () => {
	let [getSearch] = useSearchParams(),
		{ course, manageCourses } = useContext(GlobalState),
		[state, setState] = useState(null),
		[sub, setSub] = useState(null),
		[thisQuest, setThisQuest] = useState(null),
		[main, setMain] = useState(null),
		[content, setContent] = useState(""),
		[submit, setSubmit] = useState(false),
		[loading, setLoading] = useState(false),
		handleSubmit = async () => {
			if (!content) return;
			setLoading(true);
			await manageCourses(
				{ quest: getSearch?.get("quest"), content },
				"/discussion"
			);
			setLoading(false);
			setSubmit(true);
		},
		navigate = useNavigate();

	useEffect(() => {
		if (course?.isUpdated && submit) {
			setContent("");
			setSubmit(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [course?.isUpdated, submit]);

	useEffect(() => {
		let findCourse = course?.data?.find(
			item => item?._id === getSearch?.get("course")
		);
		let datum = findCourse?.module?.find(
			item => item?._id === getSearch?.get("module")
		);
		setSub(datum);
		setMain(findCourse);
		let questI = datum?.quest?.find(
			item => item?._id === getSearch?.get("quest")
		);
		setThisQuest(questI);
		setState(datum?.quest);
	}, [getSearch, course?.data]);

	const [modal, setModal] = useState("");

	if (course?.isLoading) return <Loader />;

	if (!state || !main || !sub) return <></>;

	return (
		<div>
			<div className="tw-flex tw-flex-col lg:tw-flex-row tw-w-full lg:tw-px-10 tw-gap-4">
				<div className="tw-bg-transparent lg:tw-w-[60%]">
					<div className="lg:tw-p-8 tw-p-2 tw-bg-white segoe">
						<div className="tw-flex tw-items-center tw-justify-between">
							<div className="">
								<h5 className="tw-text-xl tw-font-semibold tw-text-[#1b1b1b] segoe">
									{main?.title}: {sub?.title}
								</h5>
								<p className="tw-text-base tw-font-normal tw-text-[#838594] segoe">
									{main?.user?.lastName} {main?.user?.firstName} / {main?.title}
								</p>
							</div>
							<img
								src={main?.user?.avatar?.url || Profile}
								alt={main?.user?.lastName}
								style={{ height: "3rem", width: "3rem" }}
								className="img-fluid rounded-circle"
							/>
						</div>
						<div style={{ height: "30rem" }} className="tw-mt-4 tw-w-full">
							{thisQuest?.videoLink ? (
								<ReactHlsPlayer
									src={
										thisQuest?.videoLink?.url ||
										thisQuest?.videoLink?.playback_url
									}
									autoPlay={true}
									controls={true}
									width="100%"
									height="100%"
									loop
									hlsConfig={{
										maxLoadingDelay: 4,
										minAutoBitrate: 0,
										lowLatencyMode: true,
									}}
									title={thisQuest?.title}
								/>
							) : (
								<iframe
									style={{ height: "30rem" }}
									width={"100%"}
									height="100%"
									src={thisQuest?.link}
									title={thisQuest?.title}
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowfullscreen
								/>
							)}
							{/* <img src={Video} alt="" className="" /> */}
						</div>
						<div className="tw-mt-6 tw-bg-[#F5F5F5] tw-py-6 tw-px-8">
							<h6 className="segoe tw-text-sm tw-font-semibold tw-text-[#1b1b1be6] tw-capitalize">
								additional notes
							</h6>
							<ul className="tw-mt-3 tw-list-disc tw-list-inside">
								<li className="tw-text-[#1b1b1bcc] tw-text-[12px] tw-font-normal segoe">
									{main?.description}
								</li>
								<li className="tw-text-[#1b1b1bcc] tw-text-[12px] tw-font-normal segoe tw-pt-1">
									{sub?.description}
								</li>
								<li className="tw-text-[#1b1b1bcc] tw-text-[12px] tw-font-normal segoe tw-pt-1">
									{thisQuest?.description}
								</li>
							</ul>
						</div>
					</div>
					<div className="tw-mt-8 tw-bg-white tw-rounded-lg ">
						<div className="tw-flex tw-justify-between tw-items-center tw-px-4 tw-border-b-2 tw-h-16 tw-border-b-[#77788333]">
							<h6 className="tw-text-xl tw-text-semibold tw-text-[#454657] segoe">
								Reviews
							</h6>
							<button
								onClick={() => setModal("review")}
								className="tw-border tw-h-9 tw-w-20 tw-rounded tw-text-base tw-font-normal segoe tw-text-[#0F0BC7] tw-border-[#0F0BC7]">
								+ Add
							</button>
						</div>
						<Review state={sub?.review || []} noHeader />
					</div>
				</div>
				<div className="lg:tw-w-[40%] tw-bg-transparent">
					<div className="lg:tw-float-right tw-h-8 tw-flex tw-gap-2 tw-items-center">
						<img src={Trophy} alt="" className="" />
						<h6 className="tw-text-[12px] tw-font-normal tw-text-[#0f0bc7] poppins">
							Your Progress
						</h6>
					</div>
					<div className="tw-py-2 tw-mt-12 tw-rounded tw-w-full tw-bg-[#0f0bc7] tw-pl-8">
						<h6 className="segoe tw-text-base tw-font-semibold tw-text-white">
							{sub?.title}
						</h6>
					</div>
					<div
						style={{
							overflowX: "scroll",
						}}
						className="tw-h-96">
						{state?.map((item, i) => (
							<div
								key={i}
								onClick={() =>
									navigate(
										`/courses/module/${sub?._id}?course=${main?._id}&quest=${item?._id}&module=${sub?._id}&courseTitle=${main?.title}`
									)
								}
								className="tw-py-4 tw-border-b-[0.5px] tw-bg-white tw-border-black tw-flex tw-justify-between tw-items-center tw-pl-8 tw-pr-4 tw-cursor-pointer">
								<div className="">
									<h6
										className={
											getSearch?.get("quest") === item?._id
												? "segoe tw-text-[11px] tw-font-normal tw-text-[#0f0bc7]"
												: "segoe tw-text-[11px] tw-font-normal tw-text-black"
										}>
										{item.number}
									</h6>
									<p
										className={
											getSearch?.get("quest") === item?._id
												? "segoe tw-text-[10px] tw-font-normal tw-text-[#0f0bc7]"
												: "segoe tw-text-[10px] tw-font-normal tw-text-black"
										}>
										{item?.title}
									</p>
								</div>
								{item?.done ? (
									<img src={i === 0 ? Done : Done1} alt="" className="tw-h-4" />
								) : null}
							</div>
						))}
					</div>

					<div className="tw-mt-12 tw-py-4 tw-w-full tw-bg-[#D1D8FF] tw-rounded">
						<h6 className="tw-text-base tw-font-semibold tw-text-[#0F0BC7] tw-text-center segoe">
							Discussions
						</h6>
					</div>
					<div
						style={{
							overflowX: "scroll",
						}}
						className="noScroll tw-h-80 tw-pl-10">
						{thisQuest?.discussion?.map((comment, i) => (
							<div key={i} className="tw-py-4">
								<div className="tw-flex tw-gap-4 tw-items-center">
									<img
										src={comment.user?.avatar?.url || CommentAvatar}
										alt={comment?.user?.lastName}
										className=""
									/>
									<h6 className="tw-text-[10px] tw-font-semibold segoe tw-text-black">
										{comment.user?.lastName} {comment?.user?.firstName}
									</h6>
								</div>
								<p className="tw-text-[8px] tw-pt-1 tw-font-normal segoe tw-text-[#3F3F3F] tw-w-1/2">
									{comment.content}
								</p>
								<div className="tw-w-32 tw-flex tw-justify-between">
									<div className="tw-flex tw-gap-1 tw-mt-1 tw-items-center">
										<img src={Reply} alt="" className="" />
										<p className="tw-text-[6px] tw-font-normal tw-text-[#929292]">
											Comment
										</p>
									</div>
									<div className="tw-flex tw-gap-1 tw-mt-1 tw-items-center">
										<img src={CommentImg} alt="" className="" />
										<p className="tw-text-[6px] tw-font-normal tw-text-[#929292]">
											Replies
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="tw-mt-4 tw-px-2 tw-relative tw-w-[90%] tw-float-right tw-h-8 tw-flex tw-items-center tw-gap-2 tw-bg-[#D1D8FF] tw-rounded-full">
						<img src={Emoji} alt="" className="" />
						<input
							type="text"
							value={content}
							onChange={e => setContent(e.target.value)}
							className="tw-w-72 tw-h-full tw-text-[7px] tw-bg-transparent tw-text-[#696969] tw-font-normal"
							placeholder="Type messsage here"
						/>
						<div className="tw-flex tw-gap-1">
							{/* <img src={Media} alt="" className="" /> */}
							{/* <img src={Microphone} alt="" className="" /> */}
							<Buttons
								title={"."}
								loading={loading}
								onClick={handleSubmit}
								loadCss={"#0f0bc7"}
								width={"auto"}>
								<img src={Send} alt="" className="" />
							</Buttons>
						</div>
					</div>
				</div>
			</div>

			<AddModal isOpen={modal === "review"} toggle={() => setModal("")} />
			{modal === "done" ? <DoneModal handleClose={() => setModal("")} /> : null}
			{modal === "points" ? (
				<PointModal
					handleBadge={() => setModal("badge")}
					// handleClose={() => setModal("")}
				/>
			) : null}
			{modal === "badge" ? (
				<BadgeModal handleClose={() => setModal("")} />
			) : null}
			{/* <PointModal /> */}
			<div className="tw-flex tw-justify-center tw-mt-10">
				<button
					onClick={() => setModal("points")}
					className="tw-h-10 tw-w-36 tw-bg-[#0f0bc7] Nunito tw-text-xl tw-text-white tw-rounded-lg">
					Points
				</button>
			</div>
		</div>
	);
};

const AddModal = ({ toggle, isOpen }) => {
  let { course, manageCourses } = useContext(GlobalState),
		init = { content: "", rating: 0 },
		[state, setState] = useState(init),
		[submit, setSubmit] = useState(false),
		[loading, setLoading] = useState(false),
		[getSearch] = useSearchParams(),
		handleSubmit = async () => {
			if (!state?.content) return;
			setLoading(true);
			await manageCourses({ module: getSearch?.get("module"), ...state });
			setLoading(false);
			setSubmit(true);
		};

    let handleRating = rate => {
			setState({ ...state, rating: rate });
		};

  useEffect(() => {
    if (course?.isUpdated && submit) {
      toggle();
      setState(init)
      setSubmit(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course?.isUpdated, submit]);

  return (
		<ModalComponents isOpen={isOpen} back={toggle} title={"Add a review"}>
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

const PointModal = ({ handleBadge, handleClose }) => {
  return (
    <div>
      <div
        onClick={handleClose}
        className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-justify-center tw-items-center"
      >
        <div className="tw-bg-white tw-mx-auto tw-py-20 tw-px-28">
          <h6 className="tw-text-2xl tw-font-normal sansation tw-text-center tw-text-[#1b1b1b] tw-max-w-sm tw-mx-auto">
            For your outstanding performance in Course - Intro to Data Analysis,
            you’ve been awarded this badge.
          </h6>
          <div className="tw-mx-auto tw-mt-5">
            <img src={TrophyGif} alt="" className="tw-mx-auto" />
          </div>
          <h6 className="tw-text-2xl tw-font-normal sansation tw-text-center tw-text-[#1b1b1b] tw-pt-5 tw-max-w-sm tw-mx-auto">
            <span
              onClick={handleBadge}
              className="tw-text-2xl tw-font-normal sansation tw-text-center tw-text-[#0f0bc7] tw-cursor-pointer"
            >
              Click here
            </span>{" "}
            to view your badge for your overall performance in course.
          </h6>
        </div>
      </div>
    </div>
  );
};

const BadgeModal = ({ handleClose }) => {
  const BadgeArr = [
    {
      id: 1,
      task: "Assignment Completion",
      performance: "38/40",
    },
    {
      id: 2,
      task: "Classes",
      performance: "69/70",
    },
    {
      id: 3,
      task: "Tasks Completion",
      performance: "34/35",
    },
    {
      id: 4,
      task: "Activeness",
      performance: "09/10",
    },
  ];
  return (
    <div>
      <div
        onClick={handleClose}
        className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-justify-center tw-items-center"
      >
        <div className="tw-bg-white tw-mx-auto tw-p-12">
          <div className="tw-w-[900px] tw-h-[450px] tw-bg-[#D7ECFF] tw-rounded-[152px] tw-flex tw-gap-20">
            <div className="tw-h-full tw-w-[30%] tw-bg-[#BCD7FF] tw-rounded-[152px] tw-flex tw-justify-center tw-items-center">
              <div className="tw-space-y-10">
                {BadgeArr.map((item) => (
                  <div key={item.id}>
                    <h6 className="tw-text-center tw-text-xl tw-font-bold tw-text-black segoe">
                      {item.task}
                    </h6>
                    <p className="tw-text-center tw-text-xl tw-font-bold tw-text-[#4D5CAC] segoe">
                      {item.performance}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="tw-flex tw-items-center">
              <div className="">
                <h6 className="tw-text-4xl tw-text-[#1b1b1bee] tw-text-center tw-font-bold">
                  Welldone DEBBIE!
                </h6>
                <div className="tw-h-96 tw-w-96 tw-rounded-full tw-bg-[#BCD7FF] tw-mt-4 tw-flex tw-items-center tw-justify-center">
                  <div className="tw-h-72 tw-w-72 tw-bg-[#4D5CAC] tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <div
                      // style={{
                      //   background:
                      //     "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 102, 255, 0.2) 99.99%), rgba(77, 126, 172, 0.4)",
                      //   transform: "rotate(-90deg)",
                      // }}
                      className=""
                    >
                      <h6 className="tw-text-5xl tw-font-bold tw-text-[#f5f5f5] segoe tw-text-center">
                        RANK
                      </h6>
                      <p className="tw-text-white tw-text-9xl tw-font-bold segoe tw-text-center">
                        10
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ID;
