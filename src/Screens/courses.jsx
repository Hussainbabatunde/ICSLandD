import React, { useState, useContext, useEffect } from "react";
// import bg from "../assets/Ellipse882.png";
// import { Header } from "../Components";
// import { MainButton } from "./home";
// import img1 from "../assets/amico.png";
// import { motion } from "framer-motion";
// import { BsGlobe } from "react-icons/bs";
// import Hero1 from "../assets/coursehero.png";
// import Hero2 from "../assets/coursehero2.png";
// import Previewimg from "../assets/preview.png";
// import ListImg from "../assets/previewlist.png";
// import InstructorImg from "../assets/instructor.png";
// import PeopleImg from "../assets/students.png";
// import CoursesImg from "../assets/courses.png";
// import Image from "../assets/female.png";
import { GlobalState } from "../Data/Context";
import {
  useSearchParams,
  useLocation,
  useNavigate,
  // Link,
} from "react-router-dom";
import {
  CourseModal,
  //  MainButton
} from "./home";
import { Loader } from "../Utils";
import { PageHeader } from "./blog";
import CoursesImage from "../assets/courseshero.png";
import DetailsImg from "../assets/coursesimg.png";
import { ImCheckmark } from "react-icons/im";

const Courses = () => {
  let { course, numberWithCommas } = useContext(GlobalState),
    [state, setState] = useState(null),
    [getSearch] = useSearchParams();

  useEffect(() => {
    course?.data?.map(
      (item) => item?._id === getSearch?.get("course") && setState(item)
    );
  }, [course?.data, getSearch]);

  if (course?.isLoading) return <Loader />;

  // if (!state) return <></>;

  return (
    <div>
      <Newhero state={state} numberWithCommas={numberWithCommas} />
      <Details state={state} />
      {/* <HeroSection state={state} /> */}
      {/* <Preview state={state} /> */}
      {/* <CourseContent state={state} />
      <Instructor state={state} />
      <Testimonial state={state} /> */}
    </div>
  );
};
const Newhero = ({ state }) => {
  const [modal, setModal] = useState(false),
    [offers, setIsOffer] = useState(false),
    location = useLocation(),
    navigate = useNavigate(),
    { plan, numberWithCommas } = useContext(GlobalState);
  return (
    <div>
      <div className="">
        <PageHeader handleCourses={() => setModal(true)} />
      </div>
      <div className="tw-w-full tw-bg-[#f4f9ff]">
        <div className="container tw-grid lg:tw-grid-cols-2 lg:tw-gap-19">
          <div className="lg:tw-my-12 tw-my-16">
            <h1 className="tw-text-3xl tw-text-[#1b1b1b] tw-font-bold mont tw-uppercase">
              {state?.title}
            </h1>
            <p className="tw-text-xl mont segoe tw-font-normal tw-text-[#1b1b1b] tw-pt-6">
              {state?.caption}
            </p>
            <p className="tw-text-xl tw-font-semibold tw-text-[#1b1b1b] mont tw-pt-5">
              Learning Duration: {state?.courseDuration} week(s)
            </p>
            <p className="tw-text-base tw-font-semibold tw-text-[#1b1b1b] mont tw-pt-5">
              Starting Fee:{" "}
              <span className="tw-font-normal mont">
                NGN {numberWithCommas(Number(state?.amount || 0).toFixed(2))}
              </span>
            </p>
            <div className="tw-mt-8">
              <div className="">
                <button
                  onClick={() => setIsOffer(!offers)}
                  className="text-decoration-none tw-bg-[#0f0bc7] tw-text-white text-capitalize px-4 py-3 tw-rounded-lg "
                >
                  Apply Now
                </button>
                {offers ? (
                  <div className=" tw-bg-white tw-py-5 tw-px-7 tw-border tw-mt-1 tw-border-[#2a5aff]">
                    {plan?.data?.map((da) => (
                      <p
                        onClick={() =>
                          navigate(
                            `/checkout${location?.search}&plan=${da?._id}&planName=${da?.name}`
                          )
                        }
                        className="tw-uppercase tw-cursor-pointer tw-text-[#1b1b1b] tw-text-xl sansation tw-font-normal tw-py-2"
                      >
                        {da?.name}
                      </p>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div>
            <img
              src={state?.image?.url || CoursesImage}
              alt={state?.title}
              className="mx-auto"
              style={{
                objectFit: "contain",
                objectPosition: "center",
                maxHeight: "50vh",
              }}
            />
          </div>
        </div>
      </div>
      {modal && <CourseModal handleclose={() => setModal(false)} />}
    </div>
  );
};

const Details = ({ state }) => {
  return (
    <div>
      <div className="container tw-grid lg:tw-grid-cols-2 tw-gap-6 tw-my-16">
        <div>
          <img
            src={state?.image2?.url || DetailsImg}
            alt={state?.title}
            className=""
          />
        </div>
        <div className="tw-h-full tw-bg-[#f4f9ff] tw-p-8">
          <h2 className="tw-text-3xl tw-font-bold tw-text-[#1b1b1b] mont tw-capitalize">
            What you will Learn
          </h2>
          <div className="tw-mt-6 tw-space-y-3">
            {state?.benefits?.map((item, i) => (
              <div key={i} className="tw-flex tw-gap-2 tw-items-center">
                <ImCheckmark />
                <p className="tw-text-2xl mont tw-font-normal tw-text-[#1b1b1b]">
                  {item}
                </p>
              </div>
            ))}
          </div>
          {/* <p className="tw-text-xl mont tw-font-normal tw-text-[#1b1b1b] tw-pt-6">
            {state?.description}
          </p> */}
        </div>
      </div>
    </div>
  );
};
// const HeroSection = ({ state }) => {
//   let [modal, setModal] = useState(false);
//   const Gains = [
//     "Learn what you need to know before you start analysing",
//     "Impactful and strong portfolio pieces",
//     "A complete, practical real-world foundation in Data Analysis",
//     "Business Analytics through Excel, Tableau, Power Bi etc",
//   ];
//   return (
//     <div className="">
//       <div className="main-bg fullHeight">
//         <div
//           style={{
//             background: `url(${bg})`,
//           }}
//           className="heroBg"
//         >
//           <div className="container">
//             <PageHeader />
//             {/* <Header handleCourses={() => setModal(!modal)} /> */}
//             <motion.section
//               initial={{
//                 x: -250,
//               }}
//               animate={{
//                 x: 0,
//               }}
//               transition={{
//                 duration: 2,
//                 delay: 0.5,
//               }}
//               className="container fullHeight tw-grid md:tw-grid-cols-2 tw-gap-5 text-white bg-transparent"
//             >
//               <div className="tw-mt-10 tw-max-w-md">
//                 <button className="btn tw-flex tw-gap-2 tw-items-center rounded-pill  text-capitalize tw-text-white px-4">
//                   <BsGlobe className="" />
//                   {state?.language}
//                 </button>
//                 <h2 className="tw-text-sm tw-text-white tw-font-normal tw-uppercase tw-pt-6 sansation">
//                   {state?.title}
//                 </h2>
//                 <h6 className="tw-text-xl tw-font-bold Nunito tw-text-white tw-pt-4">
//                   {state?.module?.map((item, i) => (
//                     <span key={i}>{item?.title}</span>
//                   ))}
//                 </h6>
//                 <div className="text-white">
//                   <h6 className="Nunito tw-text-xl tw-font-bold">
//                     About this course
//                   </h6>
//                   <p className="tw-text-sm tw-font-normal Nunito tw-pt-4">
//                     {state?.description}
//                   </p>
//                   <h6 className="tw-text-xl tw-font-bold Nunito tw-pt-4">
//                     What{" "}
//                     <span className="tw-text-xl tw-font-bold tw-text-[#2A5AFF] Nunito">
//                       you will gain
//                     </span>{" "}
//                     on this course
//                   </h6>
//                   <ul className="tw-mt-4 tw-list-inside tw-list-disc tw-space-y-2">
//                     {Gains?.map((gain) => (
//                       <li className="tw-text-sm tw-font-medium Nunito tw-whitespace-nowrap">
//                         {gain}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <p className="tw-text-base sansation tw-text-white tw-font-normal tw-pt-6">
//                   {state?.caption}
//                 </p>
//               </div>
//               <div className="tw-flex">
//                 <div className="tw-hidden lg:tw-inline-block">
//                   <img src={Hero1} alt="" className="" />
//                 </div>
//                 <div className="lg:tw-mt-16">
//                   <img src={Hero2} alt="" className="" />
//                 </div>
//               </div>
//             </motion.section>
//           </div>
//         </div>
//       </div>
//       {modal ? <CourseModal handleclose={() => setModal(false)} /> : null}
//     </div>
//   );
// };

// const Preview = ({ state }) => {
//   let { plan, numberWithCommas } = useContext(GlobalState);
//   const [offers, setOffers] = useState(false);
//   const [modal, setModal] = useState(false);
//   let navigate = useNavigate(),
//     location = useLocation();
//   const PreviewList = [
//     "Certificate of completion",
//     "1 downloadable resource",
//     "1 article",
//     "2 hours on-demand video",
//   ];
//   const Skills = ["Skills 1", "Skills 2", "Skills 3", "Skills 4"];
//   const Gains = [
//     "Learn what you need to know before you start analysing",
//     "Impactful and strong portfolio pieces",
//     "A complete, practical real-world foundation in Data Analysis",
//     "Business Analytics through Excel, Tableau, Power Bi etc",
//   ];
//   // const Plans = ["tech lite", "tech prime", "tech premium"]
//   // if (!plan?.data) return <></>;
//   return (
//     <div className="tw-w-full tw-bg-white">
//       <div className="container tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw">
//         <div>
//           <div
//             style={{
//               boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
//             }}
//             className="lg:-tw-mt-48 tw-mt-10 tw-pb-12"
//           >
//             <img src={Previewimg} alt="" className="" />
//             <div className="tw-mt-8 tw-px-4">
//               <h6 className="tw-text-xl tw-text-black tw-font-bold sansation">
//                 {state?.title}
//               </h6>
//               {/* <div className="tw-flex tw-mt-4 tw-gap-6 tw-w-full tw-h-12">
// 								<button
// 									style={{
// 										background:
// 											"linear-gradient(90.18deg, #2A5AFF -52.19%, #2E49A7 81.92%)",
// 									}}
// 									className="tw-h-full tw-w-[80%] tw-rounded tw-text-base tw-font-bold tw-text-white Source">
// 									Add to Plan
// 								</button>
// 								<button className="tw-w-[20%] tw-h-full tw-bg-white tw-border tw-rounded tw-border-[#2a5aff]"></button>
// 							</div> */}
//               <button
//                 style={{
//                   background:
//                     "linear-gradient(90.18deg, #2A5AFF -52.19%, #2E49A7 81.92%)",
//                 }}
//                 onClick={() => setOffers(!offers)}
//                 className="tw-w-full tw-mt-4 tw-h-12 tw-bg-white tw-border tw-rounded tw-border-[#2e49a7] Source tw-text-base tw-font-bold tw-text-white"
//               >
//                 Subscribe Now
//               </button>
//               {offers ? (
//                 <div className=" tw-bg-white tw-py-5 tw-px-7 tw-border tw-mt-1 tw-border-[#2a5aff]">
//                   {plan?.data
//                     ?.sort((a, b) => a?.amount - b?.amount)
//                     ?.map((da) => (
//                       <p
//                         onClick={() =>
//                           navigate(
//                             `/checkout${location?.search}&plan=${da?._id}&planName=${da?.name}`
//                           )
//                         }
//                         className="tw-uppercase tw-cursor-pointer tw-text-[#1b1b1b] tw-text-xl sansation tw-font-normal"
//                       >
//                         {da?.name} (N{numberWithCommas(da?.amount)})
//                       </p>
//                     ))}
//                 </div>
//               ) : null}
//               <p className="tw-text-[13px] tw-text-[#1b1b1bcc] tw-font-normal tw-text-center tw-py-8 Nunito">
//                 30-Day Money-Back Guarantee
//               </p>
//               <h6 className="tw-text-base tw-font-bold tw-text-black Nunito">
//                 This course includes:
//               </h6>
//               {PreviewList?.map((list) => (
//                 <div className="tw-flex tw-gap-4 tw-items-center">
//                   <img src={ListImg} alt="" className="" />
//                   <p className="tw-text-sm tw-font-normal tw-text-[#1b1b1bcc] Nunito">
//                     {list}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <h6 className="tw-text-xl tw-font-bold tw-uppercase sansation tw-text-[#1b1b1b] tw-pt-10">
//             SKILLS YOU WILL GAIN
//           </h6>
//           <ul className="tw-flex tw-gap-3 tw-list-inside tw-list-disc tw-mt-6 tw-mb-10">
//             {Skills?.map((skill) => (
//               <li className="tw-text-base sansation tw-font-normal tw-text-[#1b1b1b]">
//                 {skill}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="tw-h-full tw-py-12 tw-w-96 tw-my-24">
//           <div className="">
//             <h6 className="Nunito tw-text-xl tw-font-bold tw-text-[#1b1b1b]">
//               About this course
//             </h6>
//             <p className="tw-text-sm tw-font-normal Nunito tw-text-[#1b1b1b] tw-pt-4">
//               {state?.description}
//             </p>
//             <h6 className="tw-text-xl tw-font-bold tw-text-[#1b1b1b] Nunito tw-pt-4">
//               What{" "}
//               <span className="tw-text-xl tw-font-bold tw-text-[#2A5AFF] Nunito">
//                 you will gain
//               </span>{" "}
//               on this course
//             </h6>
//             <ul className="tw-mt-4 tw-list-inside tw-list-disc tw-space-y-2">
//               {Gains?.map((gain) => (
//                 <li className="tw-text-sm tw-font-medium tw-text-black Nunito tw-whitespace-nowrap">
//                   {gain}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       {modal ? <PlanModal handleClose={() => setModal(false)} /> : null}
//     </div>
//   );
// };
// const CourseContent = ({ state }) => {
//   // const [isActive, setIsActive] = useState(0);

//   const Content = [
//     {
//       id: 1,
//       course: "Introduction to Data Analysis",
//       topics: [
//         "Welcome to Data Analysis",
//         "Introduction to Data Analysis",
//         "Data Analysis basics",
//       ],
//     },
//     {
//       id: 2,
//       course: "Introduction to Data Analysis",
//       topics: [
//         "Welcome to Data Analysis",
//         "Introduction to Data Analysis",
//         "Data Analysis basics",
//       ],
//     },
//     {
//       id: 3,
//       course: "Introduction to Data Analysis",
//       topics: [
//         "Welcome to Data Analysis",
//         "Introduction to Data Analysis",
//         "Data Analysis basics",
//       ],
//     },
//     {
//       id: 4,
//       course: "Introduction to Data Analysis",
//       topics: [
//         "Welcome to Data Analysis",
//         "Introduction to Data Analysis",
//         "Data Analysis basics",
//       ],
//     },
//     {
//       id: 5,
//       course: "Introduction to Data Analysis",
//       topics: [
//         "Welcome to Data Analysis",
//         "Introduction to Data Analysis",
//         "Data Analysis basics",
//       ],
//     },
//     {
//       id: 6,
//       course: "Introduction to Data Analysis",
//       topics: [
//         "Welcome to Data Analysis",
//         "Introduction to Data Analysis",
//         "Data Analysis basics",
//       ],
//     },
//   ];
//   return (
//     <div>
//       <div className="tw-py-12 tw-bg-[#EBF1FF] tw-w-full">
//         <div className="container">
//           <h4 className="tw-text-2xl tw-font-normal sansation tw-text-[#1b1b1b]">
//             Course Content
//           </h4>
//           <p className="tw-text-xl tw-font-normal tw-text-[#1b1b1b] sansation tw-pt-4">
//             {state?.module?.length} module{" "}
//             {state?.module?.reduce((ac, i) => (ac += i?.quest?.length), 0)}{" "}
//             quest - {Math.floor(state?.duration / 60).toFixed(0)}h{" "}
//             {state?.duration % 60}m Total length
//           </p>
//           <div className="tw-space-y-8 tw-mt-6">
//             {Content?.map((content) => (
//               <div className="">
//                 {content.id === 1 ? (
//                   <div
//                     style={{
//                       background:
//                         "linear-gradient(90.18deg, #423FC1 -52.19%, #1A17B4 81.92%)",
//                     }}
//                     className="tw-h-8 tw-w-full tw-pl-10 tw-flex tw-items-center"
//                   ></div>
//                 ) : (
//                   <div className="tw-h-8 tw-w-full tw-pl-10 tw-flex tw-items-center tw-bg-[#E0E0E0]"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// const PlanModal = ({ handleClose }) => {
//   const Payment = ["online payment", "manual payment"];
//   return (
//     <div>
//       <div
//         onClick={handleClose}
//         className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-justify-center tw-items-center"
//       >
//         <div className="tw-w-96 tw-border tw-border-[#2A5AFF] tw-bg-white tw-px-7 tw-py-8">
//           {Payment.map((payment) => (
//             <p className="tw-uppercase tw-cursor-pointer tw-text-[#1b1b1b] tw-text-xl sansation tw-font-normal">
//               {payment}
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// const Instructor = ({ state }) => {
//   return (
//     <div>
//       <div className="tw-w-full tw-bg-white tw-p-12">
//         <h5 className="tw-text-3xl tw-font-normal sansation tw-text-[#1b1b1b]">
//           Instructor
//         </h5>
//         <p className="tw-text-xl tw-font-normal tw-text-[#1b1b1b] sansation tw-pt-2">
//           {state?.user?.lastName} {state?.user?.firstName}
//         </p>
//         <div className="tw-flex tw-flex-col lg:tw-flex-row lg:tw-gap-12 tw-mt-10 tw-items-center">
//           <img
//             src={state?.user?.avatar?.url || InstructorImg}
//             alt=""
//             className="tw-rounded-lg"
//           />
//           <div className="">
//             <h6 className="tw-font-bold tw-text-2xl sansation tw-text-[#2e49a7] tw-mt-8 lg:tw-mt-0">
//               {state?.user?.lastName} {state?.user?.firstName}
//             </h6>
//             <p className="tw-text-xl sansation tw-font-normal tw-text-[#1b1b1b] tw-pt-1 sansation">
//               {state?.title}, BCT.
//             </p>
//             <div className="tw-mt-4">
//               <h6 className="Nunito tw-text-2xl tw-font-normal tw-text-[#1b1b1b]">
//                 About Tutor
//               </h6>
//               <p className="tw-text-base Nunito tw-font-normal tw-text-[#1B1B1Bcc] lg:tw-w-[70%] tw-pt-6">
//                 {state?.user?.bio ||
//                   `Lorem ipsum dolor sit amet consectetur. Blandit ornare habitant
//                 faucibus non. Sit sit tortor egestas mollis sollicitudin. At
//                 massa ac ut mattis id ac. Id diam urna vulputate tincidunt.
//                 Nascetur rutrum tortor fames ultricies nisi. Blandit mi nulla in
//                 egestas in in nunc et nisl. Tristique scelerisque turpis vitae
//                 auctor ornare urna eleifend. Massa convallis est et ultrices
//                 egestas consectetur. Interdum sodales viverra purus volutpat
//                 libero tincidunt dignissim tempus vestibulum. Vitae pulvinar.`}
//               </p>
//               <div className="tw-flex tw-gap-6 tw-items-center tw-mt-8">
//                 <div className="tw-flex tw-gap-3 tw-items-center">
//                   <img src={PeopleImg} alt="" className="" />
//                   <p className="tw-text-sm tw-font-normal Nunito tw-text-[#1b1b1bcc]">
//                     Students
//                   </p>
//                 </div>
//                 <div className="tw-flex tw-gap-3 tw-items-center">
//                   <img src={CoursesImg} alt="" className="" />
//                   <p className="tw-text-sm tw-font-normal Nunito tw-text-[#2A5AFF]">
//                     Students
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// const Testimonial = () => {
//   const TestimonialArr = [
//     {
//       id: 1,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
//       image: "",
//       name: "Debbie A. Adeoye",
//       course: "Data Analyst, Google",
//     },
//     {
//       id: 2,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
//       image: "",
//       name: "Full Name",
//       course: "Product Design, Amazon",
//     },
//     {
//       id: 3,
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel",
//       image: "",
//       name: "Full name",
//       course: "Data Analyst, Google",
//     },
//   ];
//   return (
//     <div>
//       <div className="tw-w-full tw-bg-[#EBF1FF] tw-py-16">
//         <h5 className="lg:tw-text-3xl tw-text-2xl tw-font-bold sansation tw-text-center tw-tracking-[-0.03em]">
//           Testimonials from student alumni
//         </h5>
//         <div className="tw-grid lg:tw-grid-cols-3 container tw-gap-5 tw-mt-8">
//           {TestimonialArr?.map((item) => (
//             <div
//               style={{
//                 boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.07)",
//               }}
//               className="tw-bg-white tw-py-10 tw-px-6 tw-rounded-3xl"
//             >
//               <p className="tw-text-lg tw-font-medium Inter tw-text-black tw-pt-10">
//                 {item.text}
//               </p>
//               <div className="tw-flex tw-items-center  tw-gap-2 tw-mt-12">
//                 <img src={Image} alt="" className="" />
//                 <div className="Inter tw-text-[#14213D]">
//                   <h6 className="tw-text-sm tw-font-medium">{item.name}</h6>
//                   <p className="tw-text-[12px] tw-font-normal">{item.course}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
export default Courses;
