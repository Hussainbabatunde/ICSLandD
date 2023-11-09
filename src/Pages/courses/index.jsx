import React, { useState, useContext, useEffect } from "react";
import image from "../../assets/image369(1).png";
import { Progress } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../../Data/Context";
import { EmptyComponent, Loader, MainPaginate, MainRanger } from "../../Utils";
import LoadMore from "../../Components/LoadMore";


const Courses = () => {
  let navigate = useNavigate();

  let tabViews = ["Not Started", "Pending Courses", "completed Courses"],
    [active, setActive] = useState("overview");

  let { course, getCourses } = useContext(GlobalState),
    [state, setState] = useState(null);

  useEffect(() => {
    setState(course?.data);
  }, [course?.data]);

  let [range, setRange] = useState(10),
    [loading, setLoading] = useState(false);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + range;

  if (!state) return;

  if (course?.isLoading) return <Loader />;

  const currentItems = state.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(state.length / range);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * range) % state.length;
    setItemOffset(newOffset);
  };

  let handleLoadMore = async () => {
    setLoading(true);

    // if (search) {
    // 	await getNotify("all",{
    // 		page: Number(
    // 			notification?.all_paginate?.page
    // 		),
    // 	})
    // } else {
    await getCourses("all", {
      page: Number(course?.paginate?.page),
    });
    // }
    setLoading(false);
  };

  return (
		<section className="fullHeight px-3 px-lg-5 pb-5">
			<div className="tw-border-blue-700 tw-border-l-4  px-3 mb-4">
				{tabViews?.map((item, i) => (
					<div
						key={i}
						onClick={() => setActive(item)}
						className={`btn rounded-0 text-capitalize tw-text-xl ${
							active === item ? "tw-font-bold tw-text-blue-700" : ""
						}`}>
						{item?.replace("-", " ")}
					</div>
				))}
			</div>
			<MainRanger range={range} setRange={setRange} />
			{currentItems?.length === 0 ? (
				<EmptyComponent subtitle={`All collection empty`} />
			) : (
				<div className="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-2 tw-gap-4 mx-0 pb-3">
					{currentItems?.map((item, i) => (
						<div className="" key={i}>
							<div
								className="bg-white"
								style={{
									borderRadius: "15px",
								}}>
								<div className="bg-transparent">
									<img
										src={item?.image?.url || image}
										alt={item?.title}
										className="img-fluid"
										style={{
											width: "100%",
											height: "126px",
											borderTopLeftRadius: "15px",
											borderTopRightRadius: "15px",
										}}
									/>
								</div>
								<div className="p-2 py-3">
									<h4 className="text-capitalize tw-text-base tw-text-[#1e1e1e] tw-font-semibold Inter">
										{item?.title}
									</h4>
									<div className="tw-mt-2 ">
										<div className="tw-flex tw-justify-between">
											<p className="tw-text-[10px] tw-text-[#838594] tw-font-normal">
												Progress
											</p>
											<p className="tw-text-[10px] tw-text-[#FFB400] tw-font-normal">
												{item?.student?.progress}
											</p>
										</div>
									</div>
									<Progress
										style={{ height: "8px", marginTop: "2px" }}
										value={90}
									/>
									<div className="d-flex align-items-center justify-content-between py-2">
										<div className="">
											<p className="my-1 tw-text-[11px] tw-text-black tw-font-light Inter">
												Tutor: {item?.user?.lastName} {item?.user?.firstName}
											</p>
											<p className="my-1 tw-text-[11px] tw-text-black tw-font-light Inter">
												Modules: {item?.module?.length}
											</p>
											<p className="my-1 tw-text-[11px] tw-text-black tw-font-light Inter">
												Task:{" "}
												{item?.module?.reduce(
													(ac, i) => (ac += i?.quest?.length),
													0
												)}
											</p>
										</div>
										<div className="">
											<button
												onClick={() =>
													navigate(
														`/courses/${item?._id}?course=${item?._id}&courseTitle=${item?.title}`
													)
												}
												className="btn btn-outline-primary text-capitalize">
												resume
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}

			<MainPaginate handlePageClick={handlePageClick} pageCount={pageCount} />
			<LoadMore
				next={course?.paginate?.next}
				handleLoadMore={handleLoadMore}
				loading={loading}
			/>
		</section>
	);
};

export default Courses;
