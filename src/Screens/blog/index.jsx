import { Header } from "../../Components";
import BlogImg from "../../assets/blog.png";
import Uiux from "../../assets/uiux.png";
import Marketing from "../../assets/marketing.png";
import Developers from "../../assets/developer.png";
import Tech from "../../assets/tech.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CourseModal } from "../home";

const Blog = () => {
	const navigate = useNavigate();
	const [modal, setModal] = useState(false);
	const BlogArr = [
		{
			id: 1,
			image: Uiux,
			title: "No Code Career Paths: UI/UX",
			description:
				"As the field of user interface (UI) and user experience (UX) design continues to evolve, a new career path is gaining momentum - the No-Code UI/UX career. With the rise of no-code tools and platforms, designers and developers are...",
			path: "/uiux",
		},
		{
			id: 2,
			image: Marketing,
			title: "No Code Career Paths: Digital Marketing",
			description:
				"No-code platforms have revolutionized the digital marketing industry, offering marketers and entrepreneurs with no coding experience the ability to build websites, landing pages, and marketing automation workflows with ease. This...",
			path: "/marketing",
		},
		{
			id: 3,
			image: Developers,
			title: "Understanding the Roles of Front End and Back End Developers",
			description:
				"As the field of user interface (UI) and user experience (UX) design continues to evolve, a new career path is gaining momentum - the No-Code UI/UX career. With the rise of no-code tools and platforms, designers and developers are...",
			path: "/developers",
		},
		{
			id: 4,
			image: Tech,
			title: "How to Break into Tech in 3 months",
			description:
				"Quick Answer: Enrol in BCT Academy Here, you will receive the best training in highly sought-after tech skills for 2-3 months, as well as an immediate internship which will lead to your first tech job. Transitioning into...",
			path: "/tech",
		},
	];
	return (
		<div>
			<PageHeader handleCourses={() => setModal(true)} />
			<div className="tw-w-full tw-bg-[#f4f9ff]">
				<div className="tw-py-10 tw-items-center container tw-bg-[#f4f9ff] tw-flex lg:tw-justify-between tw-justify-center">
					<div className="">
						<h6 className="tw-text-3xl tw-font-bold tw-text-[#0c0048] tw-uppercase tw-leading-[56px] tw-tracking-[-0.022em]">
							blog
						</h6>
						<div className="tw-border-l-[3px] tw-border-l-[#0c0048] tw-pl-8 tw-mt-8">
							<p className="tw-text-lg tw-font-normal sansation tw-text-[#0c0048cc] tw-capitalize">
								Browse our interesting and educative blog posts to gain insight
							</p>
							<p className="tw-text-lg tw-font-normal sansation tw-text-[#0c0048cc] tw-capitalize">
								into the world of technology.
							</p>
						</div>
					</div>
					<div>
						<img src={BlogImg} alt="" className="md:tw-block tw-hidden" />
					</div>
				</div>
			</div>
			<div className="tw-my-20 tw-grid lg:tw-grid-cols-3 tw-gap-8 container">
				{BlogArr?.map(item => (
					<div
						style={{
							boxShadow: "0px 0px 12px rgba(15, 11, 199, 0.2)",
						}}
						className="tw-rounded-3xl tw-relative"
						key={item.id}>
						<img src={item.image} alt="" className="tw-rounded-t-3xl" />
						<div className="tw-bg-white tw-py-8 tw-px-4">
							<h3 className="tw-text-xl tw-font-bold segoe tw-text-[#070565] tw-pr-10">
								{item.title}
							</h3>
							<p className="tw-text-sm tw-font-normal tw-text-[#1b1b1bcc] segoe tw-pt-6 tw-pr-14">
								{item.description}
							</p>
						</div>
						<div className="tw-px-4">
							<button
								onClick={() => navigate(item.path)}
								className="tw-h-10 tw-mb-10 tw-w-32 tw-bg-[#1A10C5] tw-text-white tw-text-xs tw-font-bold Nunito tw-rounded-lg">
								Learn More
							</button>
						</div>
					</div>
				))}
			</div>
			{modal && <CourseModal handleclose={() => setModal(false)} />}
		</div>
	);
};
export const PageHeader = ({ handleCourses }) => {
  return (
    <div>
      <div className="tw-bg-[#DBECFF] lg:tw-h-36 tw-h-16 tw-flex tw-items-center">
        <div className="container">
          <Header handleCourses={handleCourses} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
