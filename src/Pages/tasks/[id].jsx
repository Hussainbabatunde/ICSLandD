import React, { useState, useContext, useEffect } from "react";
import DoneModal from "../../Components/DoneModal";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalState } from "../../Data/Context";
import { Buttons, Loader } from "../../Utils";
import moment from "moment";

const AddTask = ({ handleClose }) => {
	const [modal, setModal] = useState("");
	let { id } = useParams(),
		navigate = useNavigate(),
		{ tasks, manageTasks } = useContext(GlobalState),
		[state, setState] = useState(null),
		[loading, setLoading] = useState(false),
		[submit, setSubmit] = useState(false),
		[answer, setAnswer] = useState(""),
		handleSubmit = async e => {
			e?.preventDefault();
			if (!answer) return;
			setLoading(true);
			await manageTasks({ task: id, answer }, `?task=${id}`);
			setLoading(false);
			setSubmit(true);
		};

	useEffect(() => {
		if (submit && tasks?.isUpdated) {
			setSubmit(false);
			setAnswer("");
			navigate(-1);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [submit, tasks?.isUpdated]);

	useEffect(() => {
		tasks?.data?.map(item => item?._id === id && setState(item));
	}, [id, tasks?.data]);

	if (tasks?.isLoading) return <Loader />;

	if (!state) return <></>;

	return (
		<div>
			<div className="">
				<p className="tw-text-xl tw-font-medium tw-capitalize Nunito tw-border-l-4 tw-border-l-[#0f0bc7] tw-pl-8">
					Submit a task
				</p>
				<form onSubmit={handleSubmit} className="tw-mt-4 tw-pl-8">
					<textarea
						name="task"
						value={answer}
						onChange={e => setAnswer(e.target.value)}
						className="tw-h-40 tw-w-full tw-border tw-border-[#2A5AFF]"
						style={{ resize: "none", height: "10rem" }}
					/>
					<Buttons
						width={"auto"}
						loading={loading}
						onClick={handleSubmit}
						css="tw-mt-6 tw-bg-[#0F0BC7] tw-h-10 tw-w-28 tw-rounded tw-text-sm tw-font-bold tw-text-white tw-font-sans"
						title={"Submit"}
					/>
				</form>
				<div className=" tw-bg-white tw-w-full tw-px-5 tw-mt-8 tw-pb-12">
					<h6 className="tw-text-sm tw-font-bold tw-text-black tw-capitalize tw-py-5 tw-border-b tw-border-[#ccc]">
						New assignments
					</h6>
					<h6 className="tw-text-sm tw-font-medium tw-text-black Nunito tw-pt-5">
						Assignment Question
					</h6>
					<div className="tw-h-36 tw-w-full tw-border tw-border-[#ccc] tw-rounded-xl tw-py-10 tw-px-4 tw-mt-6">
						<p className="tw-text-sm Nunito tw-font-normal">
							{state?.question}
						</p>
					</div>
					<div className="tw-mt-10">
						<h6 className="tw-font-bold tw-text-sm tw-text-[#1b1b1b] Sansation tw-capitalize">
							submission details
						</h6>
						<p className="tw-pt-6 tw-text-sm tw-font-normal tw-text-[#1b1b1bcc] tw-w-2/3 text-capitalize">
							{state?.mode}
							<span className="fw-bold d-block">
								Module: {state?.module?.title}
							</span>
						</p>
						<p className="tw-pt-3 tw-text-[#1b1b1bcc] Nunito tw-text-sm tw-font-normal">
							Once you are done,
							<span className="tw-text-[#6FCF97] tw-text-sm">
								{" "}
								Copy link for assignment and send, your assignment will be
								graded appropriately.
							</span>
						</p>
						<div className="tw-flex tw-w-1/2 tw-justify-between tw-mt-8">
							<p className="tw-text-sm tw-font-normal Nunito submitText">
								Date: {moment().format("DD/MM/YYYY")}
							</p>
							<p className="tw-text-sm tw-font-normal Nunito tw-text-[#EB5757]">
								Deadline: {moment(state?.deadline).format("DD/MM/YYYY")}
							</p>
						</div>
					</div>
				</div>
			</div>
			{modal === "done" ? (
				<DoneModal
					handleClose={() => setModal("")}
					children="Your task has been submitted successfully!"
				/>
			) : null}
		</div>
	);
};

export default AddTask;
