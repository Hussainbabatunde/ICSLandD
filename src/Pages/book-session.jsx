import { useState, useContext, useEffect } from "react";
// import Sessionimg from "../assets/session.png";
import Icon1 from "../assets/sessionicon1.png";
// import Icon2 from "../assets/sessionicon2.png";
// import Icon3 from "../assets/sessionicon3.png";
// import Icon4 from "../assets/sessionicon4.png";
// import Done from "../assets/done.png";
import Dropdown from "../assets/dropdown.png";
import Line from "../assets/line.png";
import Calendar from "../assets/calendar.png";
import Minical from "../assets/minical.png";
import Miniclock from "../assets/miniclock.png";
import Successgif from "../assets/sessiondone.gif";
// import DoneModal from "../Components/DoneModal";
import Approved from "../assets/approved.png";
import Cancel from "../assets/cancel.png";
import Review from "../assets/review.png";
import { GlobalState } from "../Data/Context";
import { PopupModal, useCalendlyEventListener } from "react-calendly";
import { Buttons, EmptyComponent, MainPaginate, MainRanger } from "../Utils";
import moment from "moment";

const BookSession = () => {
	const { course, auth, session, manageSession } = useContext(GlobalState);

	const // [modal, setModal] = useState(""),
		[isOpen, setIsOpen] = useState(false),
		[selectedCourse, setCourse] = useState(""),
		prefill = {
			email: auth?.user?.email,
			firstName: auth?.user?.firstName,
			lastName: auth?.user?.lastName,
			name: `${auth?.user?.firstName} ${auth?.user?.lastName}`,
		},
		[loading, setLoading] = useState(false),
		[submit, setSubmit] = useState(false),
		handleSubmit = async e => {
			setLoading(true);
			await manageSession("post", { course: selectedCourse, payload: e });
			setLoading(false);
			setSubmit(true);
		};

	useEffect(() => {
		if (session?.isAdded && submit) {
			setCourse("");
			setSubmit(false);
		}
	}, [session?.isAdded, submit]);

	useCalendlyEventListener({
		onEventScheduled: e => {
			console.log({ data: e?.data?.payload });
			handleSubmit(e.data?.payload);
			setTimeout(() => {
				setIsOpen(false);
			}, 1000);
		},
	});

	let [state, setState] = useState(null);
	// navigate = useNavigate();

	useEffect(() => {
		setState(session?.data);
	}, [session?.data]);

	let [range, setRange] = useState(10);

	const [itemOffset, setItemOffset] = useState(0);
	const endOffset = itemOffset + range;

	if (!state) return;

	const currentItems = state.slice(itemOffset, endOffset);
	const pageCount = Math.ceil(state.length / range);

	const handlePageClick = event => {
		const newOffset = (event.selected * range) % state.length;
		setItemOffset(newOffset);
	};

	return (
		<div className="">
			<p className="lg:tw-text-base  tw-text-sm tw-font-bold tw-uppercase tw-border-l-4 tw-border-l-[#0f0bc7] tw-pl-8">
				book a session
			</p>
			{/* <div
        className="tw-overflow-visible tw-mt-12 lg:tw-w-11/12 tw-w-full lg:tw-py-32 tw-py-8 lg:tw-px-10 tw-px-4 lg:tw-ml-8 lg:tw-mt-8 tw-grid tw-grid-cols-2 tw-gap-4"
        style={{
          background: "linear-gradient(90deg, #17217A 0%, #094E83 100%)",
        }}
      >
        <div className="">
          <h6 className="lg:tw-text-3xl tw-text-base tw-font-bold tw-text-white tw-capitalize source tw-hidden lg:tw-block">
            professional certification <br /> program in
            <br /> data analysis
          </h6>
          <h6 className="tw-text-xl source tw-font-bold tw-capitalize tw-text-white tw-block lg:tw-hidden">
            professional certification program in data analysis
          </h6>
          <p className="tw-text-xl tw-pt-4 tw-font-normal tw-text-white">
            Data Analysis from BCT, Location
          </p>
          <p className="tw-text-lg tw-font-medium tw-text-white tw-pt-8">
            Session Starts: 30th April, 2023.
          </p>
          <button
            onClick={() => setModal("registration")}
            className="tw-h-12 tw-w-48 tw-bg-[#ffd600] tw-text-2xl tw-text-[#3c4852] tw-font-normal tw-rounded-lg tw-mt-8 tw-font-sans"
          >
            Book Session
          </button>
        </div>
        <div className="">
          <img src={Sessionimg} alt="Session" className="" />
        </div>
      </div> */}
			{/* <div className="tw-bg-white tw-h-32 -tw-mt-14 tw-w-3/4 tw-mx-auto tw-flex tw-items-center tw-justify-between tw-px-5">
        <div className="tw-flex tw-gap-3 tw-h-3/4 tw-items-center  tw-border-r-4 tw-border-r-[#e9eaeb] tw-pr-4">
          <img src={Icon1} alt="Calendar" className="" />
          <div>
            <p className="tw-text-sm tw-font-normal tw-text-[#3c4852]">
              Start Date
            </p>
            <p className="tw-text-base tw-font-medium tw-text-[#3c4852]">
              30th April 2022
            </p>
          </div>
        </div>
        <div className="tw-flex tw-gap-3 tw-h-3/4 tw-items-center tw-border-r-4 tw-border-r-[#e9eaeb] tw-pr-4 tw-pl-4">
          <img src={Icon2} alt="Calendar" className="" />
          <div>
            <p className="tw-text-sm tw-font-normal tw-text-[#3c4852]">
              Mode of Training
            </p>
            <p className="tw-text-base tw-font-medium tw-text-[#3c4852]">
              Live Online Training
            </p>
          </div>
        </div>
        <div className="tw-flex tw-gap-3 tw-h-3/4 tw-items-center tw-border-r-4 tw-border-r-[#e9eaeb] tw-pr-4 tw-pl-4">
          <img src={Icon3} alt="Calendar" className="" />
          <div>
            <p className="tw-text-sm tw-font-normal tw-text-[#3c4852]">
              Class Schedule
            </p>
            <p className="tw-text-base tw-font-medium tw-text-[#3c4852]">
              Saturday and Sunday
            </p>
          </div>
        </div>
        <div className="tw-flex tw-gap-3 tw-h-3/4 tw-items-center tw-pl-4">
          <img src={Icon4} alt="Calendar" className="" />
          <div>
            <p className="tw-text-sm tw-font-normal tw-text-[#3c4852]">
              Duration
            </p>
            <p className="tw-text-base tw-font-medium tw-text-[#3c4852]">
              6 Months
            </p>
          </div>
        </div>
      </div> */}
			<form className="tw-grid tw-grid-cols-2 tw-gap-6 tw-mt-7 tw-w-3/4 tw-px-8">
				<div className="">
					<label
						htmlFor="course"
						className="tw-text-base tw-font-normal tw-text-[#1b1b1b66] tw-capitalize">
						select course
					</label>
					<select
						name="course"
						value={selectedCourse}
						onChange={e => setCourse(e.target.value)}
						className="tw-h-12 tw-mt-4 tw-w-full tw-rounded tw-border tw-border-[#ccc] tw-bg-transparent tw-px-8">
						<option value="pick">
							<span className="tw-text-sm tw-text-[#1b1b1b66] tw-font-light">
								Pick a course
							</span>
						</option>
						{course?.data
							?.filter(item => item?.user?.availability?.schedulingLink)
							?.map((item, i) => (
								<option value={item?._id} key={i}>
									<span className="tw-text-sm tw-text-[#1b1b1b66] tw-font-light">
										{item?.title}
									</span>
								</option>
							))}
					</select>
				</div>
				<div className="">
					{/* <label
						htmlFor="course"
						className="tw-text-base tw-font-normal tw-text-[#1b1b1b66] tw-capitalize">
						available tutor
					</label> */}
					{/* <select
						name="course"
						className="tw-h-12 tw-mt-4 tw-w-full tw-rounded tw-border tw-border-[#ccc] tw-bg-transparent tw-px-8">
						<option value="pick">
							<span className="tw-text-sm tw-text-[#1b1b1b66] tw-font-light">
								Pick a tutor
							</span>
						</option>
					</select> */}
				</div>
			</form>
			<div className="tw-mt-12 tw-ml-8  tw-w-40">
				<Buttons
					width={"auto"}
					title={"Book course"}
					loading={loading}
					onClick={() => {
						if (!selectedCourse) return;
						if (
							!course?.data?.find(item => item?._id === selectedCourse)?.user
								?.availability?.schedulingLink
						)
							return;
						setIsOpen(true);
					}}
					css="tw-h-12 tw-bg-[#Ffd600] tw-w-full tw-text-base tw-font-semibold tw-text-[#1b1b1bcc] tw-rounded-xl"
				/>
			</div>
			{/* <div className="">
				<h6
					onClick={() => setModal("list")}
					className="tw-text-lg tw-cursor-pointer tw-text-center tw-text-[#070565] tw-font-semibold Source">
					VIEW ALL BOOKINGS
				</h6>
			</div> */}
			{/* <div className="">
				{modal === "registration" ? (
					<RegistrationModal
						closeModal={() => setModal("")}
						handleSubmit={() => setModal("success")}
					/>
				) : null}
				{modal === "success" ? (
					<SuccessModal
						handleSuccess={() => setModal("done")}
						handleNext={() => setModal("done")}
					/>
				) : null}
				{modal === "done" ? (
					<BookModal handleDone={() => setModal("complete")} />
				) : null}
				{modal === "list" ? (
					<ListModal closeModal={() => setModal("")} />
				) : null}
				{modal === "complete" ? (
					<DoneModal handleClose={() => setModal("")} />
				) : null}
			</div> */}

			<PopupModal
				// url="https://calendly.com/bimatech/30min"
				url={
					course?.data?.find(item => item?._id === selectedCourse)?.user
						?.availability?.schedulingLink
				}
				// pageSettings={pageSettings}
				// utm={utm}
				prefill={prefill}
				onModalClose={() => setIsOpen(false)}
				open={isOpen}
				rootElement={document.getElementById("root")}
			/>
			<section className="tw-mt-12 container">
				{currentItems?.length > 0 ? (
					<>
						<MainRanger range={range} setRange={setRange} />
						<table class="table bg-white">
							<thead className="tw-bg-secondary">
								<tr className="tw-h-12">
									<th scope="col">Photo</th>
									<th scope="col">Tutor Name</th>
									<th scope="col">Course Booked for</th>
									<th scope="col">Date Booked</th>
									<th scope="col">Tutor Email</th>
									<th scope="col">Actions</th>
								</tr>
							</thead>
							<tbody>
								{currentItems?.map((item, i) => (
									<tr className="tw-align-middle" key={i}>
										<th scope="row">
											{" "}
											<img
												src={item?.recipients?.avatar?.url || Icon1}
												alt={item?.recipients?.lastName}
												className="rounded-circle"
												style={{ height: "3rem", width: "3rem" }}
											/>
										</th>
										<td>
											{item?.recipients?.lastName} {item?.recipients?.firstName}
										</td>
										<td>{item?.course?.title}</td>
										<td>
											{moment(item?.start_time).format("DD-MM-YYYY hh:mm A")}{" "}
										</td>
										<td>{item?.recipients?.email}</td>
										<td className="">
											{/* <OptionButton type="sessions" /> */}
											{item?.status === "cancel"
												? "declined"
												: item?.status === "open"
												? "active"
												: item?.status}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</>
				) : (
					<EmptyComponent />
				)}
				<MainPaginate handlePageClick={handlePageClick} pageCount={pageCount} />
			</section>
		</div>
	);
};

export const RegistrationModal = ({ closeModal, handleSubmit }) => {
	// const formData = {
	//   fullname: "",
	//   email: "",
	//   phone_number: "",
	//   description: "",
	// };

	// const [input, setInput] = useState(formData);
	return (
		<div>
			<div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-justify-center tw-items-center">
				<div className="tw-pb-12 tw-w-80 tw-bg-white tw-px-4">
					<div className="tw-flex tw-justify-between tw-mt-5">
						<p className="tw-text-base tw-font-bold tw-text-[#3c4852]">
							Ready to upgrade your learning?
						</p>
						<p
							onClick={closeModal}
							className="tw-text-xl tw-font-bold tw-text-black tw-cursor-pointer">
							X
						</p>
					</div>
					<form onSubmit={handleSubmit} className="tw-mt-4">
						<input
							type="text"
							className="tw-w-full tw-h-12 tw-border-2 tw-pl-4 tw-rounded-md tw-text-sm tw-font-normal tw-text-[#3c4852]"
							name="fullname"
							placeholder="Full Name"
						/>
						<input
							type="text"
							className="tw-w-full tw-h-12 tw-border-2 tw-pl-4 tw-rounded-md tw-text-sm tw-font-normal tw-text-[#3c4852] tw-mt-4"
							name="email"
							placeholder="emailaddress@gmail.com"
						/>
						<div className="tw-flex tw-gap-3">
							<input
								type="text"
								className="tw-w-[40%] tw-h-12 tw-border-2 tw-pl-4 tw-rounded-md tw-text-sm tw-font-normal tw-text-[#3c4852] tw-mt-4"
								name="fullname"
								placeholder="(+234)"
							/>
							<input
								type="text"
								className="tw-w-[60%] tw-h-12 tw-border-2 tw-pl-4 tw-rounded-md tw-text-sm tw-font-normal tw-text-[#3c4852] tw-mt-4"
								name="phone_number"
								placeholder="9012345678"
							/>
						</div>

						<select
							name="description"
							className="tw-w-full tw-h-12 tw-border-2 tw-pl-4 tw-rounded-md tw-text-sm tw-font-normal tw-text-[#3c4852] tw-mt-4">
							<option
								value="Book a description"
								className="tw-text-sm tw-font-normal tw-text-[#3c4852]">
								Book a description
							</option>
						</select>
						<input type="checkbox" name="consent" className="tw-mt-6" />
						<label
							htmlFor="consent"
							className="tw-text-base tw-font-normal tw-text-[#3c4852] tw-pl-2">
							I accept the{" "}
							<span className="tw-text-[#0b8ade]">Terms & Conditions</span>
						</label>
						<button
							type="submit"
							className="tw-h-14 tw-w-full tw-mt-8 tw-rounded-lg tw-bg-[#0f0bc7] tw-text-white tw-text-xl tw-font-semibold">
							Next
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export const SuccessModal = ({ handleNext }) => {
	const [modal, setModal] = useState("");
	return (
		<div className="">
			<div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-justify-center tw-items-center">
				<div className="tw-pb-12 tw-w-80 tw-bg-white tw-px-1 tw-rounded-xl tw-relative">
					<div className="tw-mt-10">
						<img src={Calendar} alt="" className="tw-mx-auto" />
						<h6 className="tw-text-base tw-font-bold tw-text-center tw-text-black tw-pt-6 sansation">
							Your booking slot has been received successfully! We will get back
							to you shortly.
						</h6>

						<div className="tw-mx-auto tw-w-60">
							<button
								onClick={() => setModal("next")}
								className="tw-h-14 tw-w-full tw-mx-auto tw-mt-10 tw-rounded-lg tw-bg-[#0f0bc7] tw-text-white tw-text-xl tw-font-semibold">
								Continue
							</button>
						</div>
					</div>
					{modal === "next" ? <NextModal handleNext={handleNext} /> : null}
				</div>
			</div>
		</div>
	);
};
export const NextModal = ({ handleNext }) => {
	return (
		<div>
			<div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-justify-center tw-items-center">
				<div className="tw-w-full tw-rounded-lg tw-bg-white tw-p-6">
					<form onSubmit={handleNext} className="">
						<label
							htmlFor="time"
							className="tw-text-base tw-font-semibold tw-font-sans">
							Available Time
						</label>
						<input
							type="text"
							className="tw-w-full tw-mt-3 tw-h-12 tw-border-2 tw-pl-4 tw-rounded-md tw-text-sm tw-font-normal tw-text-[#3C4852]"
							name="time"
							placeholder="12:00pm"
						/>
						<label
							htmlFor="date"
							className="tw-text-base tw-font-semibold tw-font-sans tw-pt-4">
							Available Date
						</label>
						<select
							name="description"
							className="tw-w-full tw-h-12 tw-border-2 tw-pl-4 tw-rounded-md tw-text-sm tw-font-normal tw-text-[#3c4852] tw-mt-3">
							<option
								value="30th April"
								className="tw-text-sm tw-font-normal tw-text-[#3c4852]">
								30th April
							</option>
						</select>
						<label
							htmlFor="date"
							className="tw-text-base tw-font-semibold tw-font-sans tw-pt-4">
							Select hours
						</label>
						<select
							name="hours"
							className="tw-w-full tw-h-12 tw-border-2 tw-pl-4 tw-rounded-md tw-text-sm tw-font-normal tw-text-[#3c4852] tw-mt-3">
							<option
								value="4"
								className="tw-text-sm tw-font-normal tw-text-[#3c4852]">
								4
							</option>
						</select>
						<button
							type="submit"
							className="tw-h-14 tw-w-full tw-mt-8 tw-rounded-lg tw-bg-[#0f0bc7] tw-text-white tw-text-xl tw-font-semibold">
							Next
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
export const BookModal = ({ handleDone }) => {
	return (
		<div className="">
			<div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-justify-center tw-items-center">
				<div className="tw-pb-12 tw-w-80 tw-bg-white tw-px-2 tw-rounded-xl">
					<div className="tw-mt-20">
						<img src={Successgif} alt="done" className="mx-auto" />
					</div>
					<div
						style={{
							background: "rgba(71, 195, 207, 0.12)",
						}}
						className="tw-h-10 tw-w-full tw-items-center tw-flex tw-justify-between tw-px-1 tw-mt-4">
						<div className="tw-flex tw-gap-1">
							<img src={Minical} alt="" className="" />
							<p className="tw-text-sm tw-font-semibold tw-text-[#0F0BC7]">
								30th April 2023
							</p>
						</div>
						<div className="tw-flex tw-gap-1">
							<img src={Miniclock} alt="" className="" />
							<p className="tw-text-sm tw-font-semibold tw-text-[#0F0BC7]">
								12:00pm - 04:00pm
							</p>
						</div>
					</div>
					<div className="tw-mt-8">
						<p className="tw-text-base tw-font-normal tw-text-[#1b1b1bcc] tw-text-center">
							Congratulations! Your session booking has been received and is
							under review. We will get back to you shortly, if approved, your
							booking details will be sent to your email address. THANK YOU!
						</p>
					</div>

					<button
						onClick={handleDone}
						className="tw-h-14 tw-w-full tw-mt-8 tw-rounded-lg tw-bg-[#0f0bc7] tw-text-white tw-text-xl tw-font-semibold">
						Done
					</button>
				</div>
			</div>
		</div>
	);
};
export const ListModal = ({ closeModal }) => {
	const ApprovedSessionList = [
		{
			id: 1,
			day: "30",
			title: "One on One Session with Tutor Name",
			time: "12:00 - 04:00 pm",
			active: true,
		},
		{
			id: 2,
			day: "30",
			title: "One on One Session with Tutor Name",
			time: "12:00 - 04:00 pm",
			active: false,
		},
		{
			id: 3,
			day: "30",
			title: "One on One Session with Tutor Name",
			time: "12:00 - 04:00 pm",
			active: false,
		},
	];
	const InReviewSession = [
		{
			id: 1,
			day: "30",
			title: "One on One Session with Tutor Name",
			time: "12:00 - 04:00 pm",
			active: true,
		},
		{
			id: 2,
			day: "30",
			title: "One on One Session with Tutor Name",
			time: "12:00 - 04:00 pm",
			active: false,
		},
	];
	const CancelSession = [
		{
			id: 1,
			day: "30",
			title: "One on One Session with Tutor Name",
			time: "12:00 - 04:00 pm",
			active: true,
		},
		{
			id: 2,
			day: "30",
			title: "One on One Session with Tutor Name",
			time: "12:00 - 04:00 pm",
			active: false,
		},
		{
			id: 3,
			day: "30",
			title: "One on One Session with Tutor Name",
			time: "12:00 - 04:00 pm",
			active: false,
		},
		{
			id: 4,
			day: "30",
			title: "One on One Session with Tutor Name",
			time: "12:00 - 04:00 pm",
			active: true,
		},
	];
	return (
		<div>
			<div className="tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-justify-center tw-pt-5 tw-overflow-y-scroll tw-overflow-visible">
				<div className="tw-pb-12 tw-h-fit tw-w-96 tw-bg-white tw-rounded-xl tw-overflow-visible">
					<div className="tw-h-12 tw-bg-[#DEE7FD] tw-flex tw-items-center tw-justify-between">
						<div className="tw-mx-auto tw-h-full tw-flex tw-items-center tw-gap-2">
							<h6 className="tw-text-xl tw-font-semibold tw-text-[#1b1b1b] tw-uppercase">
								april
							</h6>
							<img src={Dropdown} alt="" className="" />
						</div>
						<div className="">
							<p
								onClick={closeModal}
								className="tw-text-xl tw-font-bold tw-text-black tw-cursor-pointer tw-pr-5">
								X
							</p>
						</div>
					</div>
					{/* Approved Session */}
					<div className="tw-mt-3 tw-px-4">
						<div className="tw-flex tw-gap-3">
							<div className="">
								<p className="tw-text-sm tw-font-normal tw-text-[#1b1b1b]">
									Mon
								</p>
								<button className="tw-h-10 tw-rounded-full tw-bg-[#009788] tw-mt-3 tw-text-xl tw-font-semibold tw-w-12 tw-text-white">
									30
								</button>
							</div>
							<div className="">
								<img src={Line} alt="" className="" />
								{ApprovedSessionList?.map(session => (
									<div
										className={
											session.active === true
												? "tw-h-14 tw-w-full tw-rounded-xl tw-bg-[#0f0bc7] tw-p-2 tw-mt-3 tw-text-white"
												: "tw-h-14 tw-w-full tw-bg-white tw-text-black tw-rounded-xl tw-border-[#0f0bc7] tw-border-2 tw-p-2 tw-mt-3"
										}>
										<h6 className="tw-text-sm tw-font-normal ">
											{session.title}
										</h6>
										<p className="tw-text-bas tw-font-semibold">
											{session.time}
										</p>
									</div>
								))}
								<div className="tw-flex tw-float-right tw-gap-1 tw-mt-3 tw-items-center">
									<img src={Approved} alt="" className="" />
									<p className="tw-text-[#0BC734] tw-text-[12px] tw-font-semibold">
										Approved
									</p>
								</div>
							</div>
						</div>
						{/* Inreview Session */}
						<div className="tw-flex tw-gap-8 tw-mt-4">
							<div className="">
								<p className="tw-text-sm tw-font-normal tw-text-[#1b1b1b]">
									Tue
								</p>
								<p className="tw-text-xl tw-font-semibold tw-text-[#1b1b1b] tw-pt-1">
									31
								</p>
							</div>
							<div className="tw-w-full">
								{/* <img src={Line} alt="" className="" /> */}
								{InReviewSession?.map(session => (
									<div
										className={
											session.active === true
												? "tw-h-14 tw-w-full tw-rounded-xl tw-bg-[#0f0bc7] tw-p-2 tw-mt-3 tw-text-white"
												: "tw-h-14 tw-w-full tw-bg-white tw-text-black tw-rounded-xl tw-border-[#0f0bc7] tw-border-2 tw-p-2 tw-mt-3"
										}>
										<h6 className="tw-text-sm tw-font-normal ">
											{session.title}
										</h6>
										<p className="tw-text-bas tw-font-semibold">
											{session.time}
										</p>
									</div>
								))}
								<div className="tw-flex tw-float-right tw-items-center tw-gap-1 tw-mt-3">
									<img src={Review} alt="" className="tw-h-4" />
									<p className="tw-text-[#FDCB53] tw-text-[12px] tw-font-semibold">
										In review
									</p>
								</div>
							</div>
						</div>
						{/* Cancel Session */}
						<div className="tw-flex tw-gap-8 tw-mt-4">
							<div className="">
								<p className="tw-text-sm tw-font-normal tw-text-[#1b1b1b]">
									Tue
								</p>
								<p className="tw-text-xl tw-font-semibold tw-text-[#1b1b1b] tw-pt-1">
									31
								</p>
							</div>
							<div className="tw-w-full">
								{/* <img src={Line} alt="" className="" /> */}
								{CancelSession?.map(session => (
									<div
										className={
											session.active === true
												? "tw-h-14 tw-w-full tw-rounded-xl tw-bg-[#0f0bc7] tw-p-2 tw-mt-3 tw-text-white"
												: "tw-h-14 tw-w-full tw-bg-white tw-text-black tw-rounded-xl tw-border-[#0f0bc7] tw-border-2 tw-p-2 tw-mt-3"
										}>
										<h6 className="tw-text-sm tw-font-normal ">
											{session.title}
										</h6>
										<p className="tw-text-bas tw-font-semibold">
											{session.time}
										</p>
									</div>
								))}
								<div className="tw-flex tw-float-right tw-items-center tw-gap-1 tw-mt-3">
									<img src={Cancel} alt="" className="tw-h-4" />
									<p className="tw-text-[#F36262] tw-text-[12px] tw-font-semibold">
										Cancelled
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default BookSession;
