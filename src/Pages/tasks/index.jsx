import React, { useContext } from "react";
import { useState } from "react";
import image from "../../assets/avatar3.png";
import moment from "moment";
import {
	//  BsTrash, BsPen,
	BsCheck,
} from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import {
	//  useAsyncError,
	useNavigate,
} from "react-router-dom";
import Feedback from "../../assets/feedback.png";
import Addcomment from "../../assets/addcomment.png";
import { GlobalState } from "../../Data/Context";
// import { useNavigate } from "react-router-dom";
import img from "../../assets/image376.png";

const Tasks = () => {
	let tabViews = ["pending", "in-progress", "completed"],
		[active, setActive] = useState("pending");

	return (
		<div className="p-3 py-5 bg-white rounded">
			<div className="tw-flex tw-items-center tw-pb-4">
				{tabViews?.map((item, i) => (
					<div
						key={i}
						onClick={() => setActive(item)}
						className={`btn rounded-0 text-capitalize fw-bold ${
							active === item
								? "border-width-4-color border-width-4-2 tw-text-xl tw-font-bold"
								: "text-muted tw-font-normal"
						}`}>
						{item?.replace("-", " ")} tasks
					</div>
				))}
			</div>
			<div className="" style={{ minHeight: "40vh" }}>
				{active === "pending" ? <All /> : null}
				{active === "in-progress" ? <InProgress /> : null}

				{active === "completed" ? <Submitted /> : null}
			</div>
		</div>
	);
};

export default Tasks;

const InProgress = () => {
	const { tasks } = useContext(GlobalState);

	// let tasksArr = [
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	// ];

	return (
		<div>
			<div className="">
				<p className="tw-text-sm tw-font-medium tw-text-black pb-2">
					Recent Task
				</p>
				{tasks?.data?.map((item, i) => (
					<div className="py-2" key={i}>
						<div className="py-2 row mx-0 g-3" key={i}>
							<div className="col-1">
								<img
									src={
										item?.module?.quest?.[0]?.image?.url ||
										item?.course?.image?.url ||
										img
									}
									alt={item?.question}
									className="img-fluid rounded-circle"
									style={{
										width: "3rem",
										height: "3rem",
									}}
								/>
							</div>
							<div className="col-11">
								<div className="d-flex align-items-center justify-content-between py-2">
									<div>
										<h5 className="fw-bold">
											Uploaded by {item?.user?.lastName} {item?.user?.firstName}
										</h5>
										<div className="tw-flex tw-gap-32 tw-mt-4">
											<h6 className="tw-text-sm tw-font-normal tw-text-black">
												{item?.question}{" "}
											</h6>
											<span className="ps-md-5 tw-text-sm tw-font-normal tw-text-black">
												{moment(item?.createdAt).fromNow()}
											</span>
										</div>
									</div>
								</div>
								<p className="tw-text-[12px] tw-font-normal tw-text-black fw-bold">
									{item?.module?.title}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const Submitted = () => {
	const { tasks } = useContext(GlobalState);

	const [modal, setModal] = useState("");
	const navigate = useNavigate();
	// let submitted = [
	//   {
	//     course: "Data Analysis",
	//     tutor: "Debbie Adeoye",
	//     task: "Task",
	//     due: moment().subtract(15, "days"),
	//     submission: moment().subtract(10, "days"),
	//     minimum: "70",
	//     score: 80,
	//   },
	//   {
	//     course: "Data Analysis",
	//     tutor: "Debbie Adeoye",
	//     task: "Task",
	//     due: moment().subtract(25, "days"),
	//     submission: moment().subtract(20, "days"),
	//     minimum: "70",
	//     score: 80,
	//   },
	//   {
	//     course: "Data Analysis",
	//     tutor: "Debbie Adeoye",
	//     task: "Task",
	//     due: moment().subtract(10, "days"),
	//     submission: moment().subtract(10, "days"),
	//     minimum: "70",
	//     score: 50,
	//   },
	//   {
	//     course: "Data Analysis",
	//     tutor: "Debbie Adeoye",
	//     task: "Task",
	//     due: moment().subtract(7, "days"),
	//     submission: moment().subtract(12, "days"),
	//     minimum: "70",
	//     score: 80,
	//   },
	// ];
	return (
		<>
			<div className="d-none d-md-flex row mx-0 py-3 px-0 text-capitalize bg-light">
				<div className="col textTrunc  fontReduce fw-bold Lexend">
					module name
				</div>
				<div className="col textTrunc fontReduce fw-bold Lexend">
					tutor name
				</div>
				<div className="col textTrunc fontReduce fw-bold Lexend">task</div>
				<div className="col textTrunc fontReduce fw-bold Lexend">due date</div>
				<div className="col textTrunc fontReduce fw-bold Lexend">
					submission date
				</div>
				<div className="col textTrunc fontReduce fw-bold Lexend">
					minimum score
				</div>
				<div className="col textTrunc fontReduce fw-bold Lexend">
					your score
				</div>
				<div className="col textTrunc fontReduce fw-bold Lexend">status</div>
				<div className="col textTrunc fontReduce fw-bold Lexend">action</div>
			</div>
			<div className="row mx-0 g-4 py-4">
				{tasks?.data?.map((item, i) => (
					<div
						key={i}
						className={`tw-flex tw-justify-between twic mx-0 py-3 border-bottom px-0 ${
							i % 2 !== 0 ? "bg-light" : ""
						}`}>
						<div className="col textTrunc my-auto d-flex tw-text-base tw-whitespace-nowrap fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0">
							<span className="fontReduce d-md-none Lexend tw-text-sm">
								module name:
							</span>
							{item?.module?.title}
						</div>
						<div className="col textTrunc my-auto d-flex fontReduceMini tw-text-base tw-whitespace-nowrap myCursor align-items-center justify-content-between py-1 py-md-0">
							<span className="fontReduce d-md-none Lexend">tutor name:</span>
							{item?.user?.lastName} {item?.user?.firstName}
						</div>
						<div className="col textTrunc my-auto d-flex fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0">
							<span className="fontReduce d-md-none Lexend">task:</span>

							{item?.question}
						</div>
						<div className="col textTrunc my-auto d-flex fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0">
							<span className="fontReduce d-md-none Lexend">Due:</span>
							{moment(item?.deadline).format("DD-MMM-YYYY")}
						</div>
						<div className="col textTrunc my-auto d-flex fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0">
							<span className="fontReduce d-md-none Lexend">Submission:</span>
							{item?.students?.submission &&
								moment(item?.students?.submission).format("DD-MMM-YYYY")}
						</div>
						<div className="col textTrunc my-auto d-flex fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0">
							<span className="fontReduce d-md-none Lexend">minimum:</span>
							{item?.minimumGrade}
						</div>
						<div className="col textTrunc my-auto d-flex fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0">
							<span className="fontReduce d-md-none Lexend">score:</span>
							{item?.students?.score && item?.students?.score / 100}
						</div>
						<div className="col textTrunc my-auto fontReduceMini myCursor py-1 py-md-0 textTrunc2">
							{/* <span className="fontReduce d-md-none Lexend">status:</span> */}
							{item?.students?.score ? (
								Number(item?.minimumGrade) > Number(item?.students?.score) ? (
									<div className="tw-flex tw-items-center tw-gap-2">
										<div className="">
											<FaTimes color="red" />
										</div>
										<p className="tw-text-base tw-font-semibold tw-text-[#ff0000]">
											Fail
										</p>
									</div>
								) : (
									<div className="tw-flex tw-items-center tw-gap-2">
										<div className="">
											<BsCheck />
										</div>
										<p className="tw-text-base tw-font-semibold tw-text-[#097252]">
											Pass
										</p>
									</div>
								)
							) : null}
						</div>{" "}
						<div className="col tw-flex tw-items-center tw-gap-2">
							<img
								onClick={() => navigate("/task/comment")}
								src={Addcomment}
								alt=""
								className="tw-cursor-pointer"
							/>
							<img
								onClick={() => setModal("performance")}
								src={Feedback}
								alt=""
								className="tw-cursor-pointer"
							/>
						</div>
					</div>
				))}
			</div>
			{modal === "performance" && (
				<Performance handleClose={() => setModal("")} />
			)}
		</>
	);
};

const All = () => {
	const { tasks } = useContext(GlobalState);

	// let tasksArr = [
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	//   {
	//     image,
	//     title: "Title",
	//     user: {
	//       name: "Tutor Name",
	//     },
	//     task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
	//   },
	// ];
	const navigate = useNavigate();
	return (
		<>
			<p className="tw-text-sm tw-font-medium tw-text-black pb-2">
				Recent Task
			</p>
			{tasks?.data?.map((item, i) => (
				<div className="py-2" key={i}>
					<div className="py-2 row mx-0 g-3" key={i}>
						<div className="col-1">
							<img
								src={
									item?.module?.quest?.[0]?.image?.url ||
									item?.course?.image?.url ||
									img
								}
								alt={item?.question}
								className="img-fluid rounded-circle"
								style={{
									width: "3rem",
									height: "3rem",
								}}
							/>
						</div>
						<div className="col-11">
							<div className="d-flex align-items-center justify-content-between py-2">
								<div>
									<h5 className="fw-bold">
										Uploaded by {item?.user?.lastName} {item?.user?.firstName}
									</h5>
									<div className="tw-flex tw-gap-32 tw-mt-4">
										<h6 className="tw-text-sm tw-font-normal tw-text-black">
											{item?.question}{" "}
										</h6>
										<span className="ps-md-5 tw-text-sm tw-font-normal tw-text-black">
											{moment(item?.createdAt).fromNow()}
										</span>
									</div>
								</div>
								{!item?.students?.isSubmitted && (
									<button
										onClick={() =>
											navigate(`/tasks/${item?._id}?task=${item?.question}`)
										}
										className="btn text-main text-capitalize fw-bold">
										go to task
									</button>
								)}
							</div>
							<p className="tw-text-[12px] tw-font-normal tw-text-black fw-bold">
								Module: {item?.module?.title}
							</p>
						</div>
					</div>
				</div>
			))}
			<div>
				{/* <SubmitTask /> */}
				{/* <TaskComment /> */}
			</div>
		</>
	);
};

const Performance = ({ handleClose }) => {
	const performanceArr = [
		{
			id: 1,
			type: "overall performance",
			percentage: "90",
			comment: "Get badge for this achievement",
		},
		{
			id: 2,
			type: "Efficiency",
			percentage: "95",
			comment: "5% better than last grade",
		},
		{
			id: 3,
			type: "timeliness",
			percentage: "85",
			comment: "13% better than last grade",
		},
	];
	return (
		<div>
			<div
				onClick={handleClose}
				className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-justify-center tw-items-center">
				<div className="tw-w-2/3 tw-mx-auto tw-bg-white tw-p-8 tw-grid tw-grid-cols-3 tw-gap-10">
					{performanceArr?.map(item => (
						<div
							key={item.id}
							style={{
								border: "1px solid #cccccc",
								// filter: "drop-shadow(0px 4px 4px rgba(0,0,0, 0.25))",
							}}
							className="tw-h-40 tw-p-3 tw-drop-shadow-md">
							<h6 className="tw-text-lg tw-text-black tw-font-bold tw-capitalize tw-pt-3 Nunito">
								{item.type}
							</h6>
							<p className="tw-text-2xl tw-font-normal tw-text-black tw-pt-3 Nunito">
								{item.percentage}%
							</p>
							<p
								className={`tw-pt-4 ${
									item.percentage === "90"
										? "tw-text-[#2D9CDB]"
										: item.percentage === "95"
										? "tw-text-[#BB6BD9]"
										: item.percentage === "85"
										? "tw-text-[#6FCF97]"
										: null
								}`}>
								{item.comment}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export const TaskComment = () => {
	let tasksArr = [
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
		},
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
		},
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga.`,
		},
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga.`,
		},
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga.`,
		},
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
		},
		{
			image,
			title: "Title",
			user: {
				name: "Tutor Name",
			},
			task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
		},
	];
	return (
		<div>
			<div className="tw-mt-6">
				<p className="tw-text-xl tw-font-medium tw-capitalize Nunito tw-border-l-4 tw-border-l-[#0f0bc7] tw-pl-8">
					Add Comment
				</p>
				<form className="tw-mt-4 tw-pl-8">
					<textarea
						name="task"
						className="tw-h-16 tw-w-full tw-border tw-border-[#2A5AFF]"></textarea>
					<button className="tw-mt-6 tw-bg-[#0F0BC7] tw-h-10 tw-w-28 tw-rounded tw-text-sm tw-font-bold tw-text-white tw-font-sans">
						Send
					</button>
				</form>
				{tasksArr?.map((item, i) => (
					<div className="py-2" key={i}>
						<div className="py-2 row mx-0 g-3" key={i}>
							<div className="col-1">
								<img
									src={item?.image}
									alt={item?.title}
									className="img-fluid rounded-circle"
									style={{
										width: "3rem",
										height: "3rem",
									}}
								/>
							</div>
							<div className="col-11">
								<div className="d-flex align-items-center justify-content-between py-2">
									<div>
										<h5 className="fw-bold">Uploaded by {item?.user?.name}</h5>
										<div className="tw-flex tw-gap-32 tw-mt-4">
											<h6 className="tw-text-sm tw-font-normal tw-text-black">
												{item?.title}{" "}
											</h6>
											<span className="ps-md-5 tw-text-sm tw-font-normal tw-text-black">
												{moment().fromNow()}
											</span>
										</div>
									</div>
								</div>
								<p className="tw-text-[12px] tw-font-normal tw-text-black">
									{item?.task}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
