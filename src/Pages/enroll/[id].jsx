import CourseImg from "../../assets/enrollimg.png";
import Category from "../../assets/category.png";
import Duration from "../../assets/duration.png";
import ModuleImg from "../../assets/module.png";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../Data/Context";
import { Loader } from "../../Utils";

const EnrollPage = () => {
  let [getSearch] = useSearchParams(),
		{ enroll, plan } = useContext(GlobalState),
		[state, setState] = useState(null),
		location = useLocation(),
		navigate = useNavigate(),
		[offers, setOffers] = useState(false);

	useEffect(() => {
		enroll?.data?.map(
			item => item?._id === getSearch?.get("course") && setState(item)
		);
	}, [getSearch, enroll?.data]);

	if (enroll?.isLoading) return <Loader />;

	if (!state) return;

	// const ModuleArr = [
	// 	{
	// 		id: 1,
	// 		title: "Module 1",
	// 		duration: "1 Week",
	// 		quest: [
	// 			"Getting Ready",
	// 			"Getting Ready",
	// 			"Getting Ready",
	// 			"Getting Ready",
	// 		],
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Module 2",
	// 		duration: "2 Weeks",
	// 		quest: ["Getting Ready", "Getting Ready"],
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Module 3",
	// 		duration: "1 Week",
	// 		quest: ["Getting Ready", "Getting Ready", "Getting Ready"],
	// 	},
	// ];

	return (
		<div>
			<div className="lg:tw-w-11/12 tw-mx-auto tw-bg-white tw-mt-10 tw-p-5">
				<div className="">
					<div>
						{" "}
						<h6 className="tw-text-[12px] tw-text-[#05043C] tw-font-normal Lato tw-py-5">
							{state?.title}
						</h6>
					</div>
				</div>
				<div className="tw-py-8 tw-bg-[#EEEEF7] tw-rounded-lg tw-flex tw-flex-col lg:tw-flex-row tw-px-4 lg:tw-px-1 tw-gap-8">
					<div>
						<img
							src={state?.image?.url || CourseImg}
							alt=""
							className=" tw-h-full"
						/>
					</div>
					<div className="tw-w-full">
						<div className="tw-flex tw-justify-between">
							<div className="">
								<h6 className="tw-text-lg tw-font-bold tw-text-[#05043C] Lexend">
									{state?.title}!
								</h6>
								<p className="tw-text-base tw-font-normal Lexend tw-text-[#05043c] tw-pt-4">
									{state?.caption}!
								</p>
							</div>
							<button
								style={{
									background:
										"linear-gradient(180deg, #3D27EC 0%, #292E6D 100%)",
								}}
								type="button"
								onClick={() => setOffers(!offers)}
								className="lg:tw-w-56 tw-w-32 tw-h-14 tw-font-bold lg:tw-text-xl tw-text-base tw-text-white segoe tw-uppercase">
								enroll
							</button>
						</div>
						{offers ? (
							<div className=" tw-bg-white tw-py-5 tw-px-7 tw-border tw-mt-1 tw-border-[#2a5aff]">
								{plan?.data
									?.sort((a, b) => a?.amount - b?.amount)
									?.map(da => (
										<p
											onClick={() =>
												navigate(
													`/enroll/checkout${location?.search}&plan=${da?._id}&planName=${da?.name}`
												)
											}
											className="tw-uppercase tw-cursor-pointer tw-text-[#1b1b1b] tw-text-xl sansation tw-font-normal">
											{da?.name}
										</p>
									))}
							</div>
						) : null}
						<div className=" tw-mt-8">
							<div className="tw-flex tw-gap-8">
								<div className="tw-flex tw-gap-2 tw-items-center">
									<img src={Category} alt="" className="" />
									<h6 className="tw-text-sm tw-font-normal tw-text-[#333] Lexend">
										Category: {state?.category}
									</h6>
								</div>
								<div className="tw-flex tw-gap-4 tw-items-center">
									<img src={Duration} alt="" className="" />
									<h6 className="tw-text-sm tw-font-normal tw-text-[#333] Lexend">
										Course Duration: {state?.duration} mins
									</h6>
								</div>
							</div>
							<p className="tw-text-sm tw-font-normal Lexend tw-text-[#333] tw-pt-5 tw-pr-5">
								{state?.description}.{" "}
							</p>
						</div>
					</div>
				</div>
				<div className="tw-w-full tw-mt-8 tw-bg-white tw-rounded-lg tw-py-8 tw-px-4">
					<div className="tw-space-y-8">
						{state?.module?.map(item => (
							<div key={item?._id} className="">
								<div className="tw-flex tw-gap-6 tw-items-center">
									<h6 className="tw-text-xl tw-font-semibold Lexend tw-text-[#070565] tw-border-b-4 tw-border-[#f2dc10] tw-pb-2">
										{item?.title}
									</h6>
									<div className="tw-flex tw-justify-center tw-items-center tw-h-7 tw-w-16 tw-rounded-lg tw-bg-[#ccc]">
										<p className="tw-text-[13px] tw-font-normal tw-text-[#5f5e96] Lato">
											{item?.duration}
										</p>
									</div>
								</div>
								<div className="tw-grid tw-gap-6 lg:tw-grid-cols-6 md:tw-grid-cols-4 tw-cols-3">
									{item?.quest?.map((que, i) => (
										<div key={i} className="tw-mt-6">
											<img
												src={que?.image?.url || ModuleImg}
												alt=""
												className="tw-w-full tw-h-28"
											/>
											<p className="tw-pt-2 tw-text-[13px] tw-font-medium tw-text-[#3d27ec] Lato">
												{que?.title}
											</p>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EnrollPage;
