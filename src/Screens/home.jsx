/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import Arrow from '../assets/arrow.png'
import { Header } from "../Components";
import bg from "../assets/herobg.svg";
import img1 from "../assets/amico.png";
import { motion } from "framer-motion";
import pop1 from "../assets/Rectangle1492.png";
import pop5 from "../assets/Rectangle1485.png";
import pop6 from "../assets/Rectangle1486.png";
import pop7 from "../assets/Rectangle1487.png";
import pop8 from "../assets/Rectangle1488.png";
import { BsAward, BsClock } from "react-icons/bs";
import {
  // FaGraduationCap,
  FaVideo,
} from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import Image from "../assets/female.png";
import Howmain from "../assets/howmain.png";
import Microsoft from "../assets/microsoft.png";
import Paypal from "../assets/paypal.png";
import Google from "../assets/google.png";
import { GlobalState } from "../Data/Context";
import { Rating } from "react-simple-star-rating";
import { IconContext } from "react-icons";
import { IoMdClose } from "react-icons/io";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import Quote from "../assets/quote.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Pace from "../assets/pace.png";
import Plain from "../assets/plain.png";
import Later from "../assets/later.png";
import Gif from "../assets/herogif.gif";
import Faqbg from "../assets/Section.png";
// import HowImg from "../assets/howbanner.png";
import View from "../assets/view.svg";
import Payment from "../assets/payment.svg";
import Confirm from "../assets/confirm.svg";
import Sign from "../assets/sign.svg";
import Pick from "../assets/pick.svg";
import Choose from "../assets/choose.svg";
import HowGif from "../assets/edunew.gif";
import About1 from "../assets/about1.png";
import About2 from "../assets/about2.png";
import About3 from "../assets/about3.png";
import Why1 from "../assets/why1.png";
import Why2 from "../assets/why2.png";
import Why3 from "../assets/why3.png";

const Home = () => {
	return (
		<>
			<HomeBanner />
			<TopCourses />
			<NewHow />
			<AboutUs />
			<Why />
			{/* <HowItWorks /> */}
			<LearningPlan />
			{/* <Popular /> */}
			<Testimonial />
			{/* <Support /> */}
			<FAQ />

			{/* <Trusted /> */}
		</>
	);
};

export default Home;

const HomeBanner = () => {
	const [modal, setModal] = useState(false);
	return (
		<div className="tw-relatives">
			{/* <div className="tw-asbsolute tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-justify-center tw-z-50"></div> */}
			<div className="tw-bg-[#ddeeff] fullHeight">
				<div
					className=""
					style={{
						background: `url(${bg})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
					}}>
					<div className="container">
						<Header handleCourses={() => setModal(!modal)} />

						<motion.section
							initial={{
								x: -250,
							}}
							animate={{
								x: 0,
							}}
							transition={{
								duration: 2,
								delay: 0.5,
							}}
							className="container fullHeight tw-flex text-white bg-transparent">
							<div className="row container my-auto bg-transparent">
								<section className="col-lg-6 tw-flex h-100 my-auto bg-transparent">
									<div
										className="my-auto bg-transparent"
										data-aos="fade-up-right">
										<h1 className="lg:tw-text-[64px] tw-opacity-81 tw-text-4xl tw-font-semibold tw-text-[#060048] lg:tw-leading-[70px]">
											Learn anytime,
											<br /> anywhere without breaking <br /> the bank!
										</h1>
										<p className="w-75 mb-5 tw-text-[#1b1b1bcc] tw-opacity-80 fontReduce fontReduceMaxhead">
											You can invest in your future by studying with us whenever
											and wherever you want.
										</p>
										<div className="tw-relative  tw-opacity-80">
											<MainButton />
										</div>
									</div>
								</section>
								<div
									className="col-lg-6 h-100 mt-auto d-flex bg-transparent"
									//                 data-aos="fade-up-left"
								>
									<img
										src={img1}
										alt="Banner"
										className="img-fluid mx-auto tw-mt-20 lg:tw-mt-0"
									/>
								</div>
							</div>
						</motion.section>
					</div>
				</div>
			</div>
			{modal ? (
				<CourseModal
					handleclose={() => {
						console.log(modal);
						setModal(false);
					}}
				/>
			) : null}
		</div>
	);
};

export const MainButton = () => {
  const navigate = useNavigate();
  return (
    <div className="tw-flex">
      <button
        onClick={() => navigate("/register")}
        className="text-decoration-none tw-bg-[#0f0bc7] tw-text-white text-capitalize tw-h-14 tw-w-32"
      >
        Get Started
      </button>
      <div>
        <img src={Gif} alt="" className="-tw-mt-16 -tw-mr-9" />
      </div>
    </div>
  );
};

export const MainButton2 = () => {
  return (
    <div>
      <Link
        to={
          "https://docs.google.com/forms/d/e/1FAIpQLScojgWruo6gcmAHN2UCnF_HRkzdAVL0zkvjFIKVNva-7b1Yaw/viewform"
        }
        className="text-decoration-none -tw-ml-4 tw-bg-white tw-text-[#1b1b1b] text-capitalize px-4 py-3 rounded-0 "
      >
        Get started
      </Link>
      <div className="tw-h-12 tw-w-32 tw-hidden lg:tw-block -tw-mt-6 tw-bg-[#FBB100]"></div>
    </div>
  );
};

export const Popular = () => {
  let coursesDetails = [
    {
      image: pop5,
      description: "Databases and SQL for Data Science with Python",
      videos: "52",
      duration: "4",
    },
    {
      image: pop6,
      description: "Intro to UX: Fundamentals of Usability",
      videos: "8",
      duration: "5",
    },
    {
      image: pop7,
      description: "Pyschology in Web Design: How to Create an Hero Section",
      videos: "18",
      duration: "1",
    },
    {
      image: pop8,
      description: "Sentiment Analysis with Deep Learning using BERT",
      videos: "24",
      duration: "2",
    },
  ];

  let catTab = [
    "All categories",
    "development",
    "IT & Software",
    "Design",
    "Business",
    "Lifestyle",
    "Marketing",
  ];
  let [active, setActive] = useState(0);
  return (
    <div
      className="tw-pt-5"
      style={{
        background: "#EBF1FF",
      }}
    >
      <div className="container py-3 py-md-5">
        <h3 className="tw-text-3xl tw-text-[#1b1b1b] tw-font-normal">
          Discover Top Course
        </h3>

        <div className="lg:tw-flex tw-hidden mx-0 tw-gap-2 Inter">
          {catTab?.map((item, i) => (
            <button
              onClick={() => setActive(i)}
              className={`${
                active === i
                  ? "border-width-4-color tw-mt-4  tw-font-normal tw-text-gray-900 tw-text-[15px] "
                  : ""
              } btn text-capitalize tw-font-normal tw-text-gray-900 tw-text-[15px] border-width-4 rounded-0 tw-mt-4`}
              key={i}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="lg:tw-mt-3">
          <CoursesOutline coursesDetails={coursesDetails} noLink />
        </div>
      </div>
    </div>
  );
};

const TopCourses = () => {
  let { course } = useContext(GlobalState),
    [state, setState] = useState(null);

  useEffect(() => {
    setState(course?.data);
  }, [course?.data]);

  if (!state) return;
  return (
    <div>
      <div className="container py-3 py-md-5 tw-mt-6">
      <div className="tw-flex tw-gap-6 tw-items-center">
        <h3 className="lg:tw-text-4xl tw-text-2xl tw-font-bold tw-text-[#070565]">
          Browse Our List Of <br />{" "}
          <span className="tw-text-4xl tw-font-bold tw-text-[#1a10c5]">
            Courses
          </span>
        </h3>
        <img src={Arrow} alt="" className="tw-h-12" />
      </div>
        <CoursesOutline coursesDetails={state} />
      </div>
    </div>
  );
};

const CoursesOutline = ({ coursesDetails, noLink }) => {
  const navigate = useNavigate();
  return (
		<>
			<div className="tw-grid lg:tw-grid-cols-3 tw-gap-8 tw-mt-14">
				{coursesDetails?.map((item, i) => (
					<div
						data-aos-duration="3000"
						data-aos="zoom-in-up"
						className="tw-p-4 tw-bg-[#dbecff] tw-rounded-tl-3xl tw-rounded-br-3xl"
						key={i}>
						<div className="">
							<img
								src={item?.image?.url || item?.module?.[0]?.image?.url || pop1}
								className="img-fluid tw-w-full tw-h-96 tw-rounded-tl-3xl tw-rounded-br-3xl"
								alt={item?.description}
							/>
							<div className="p-2 tw-flex tw-flex-col tw-justify-between tw-h-42">
								<div className="">
									<h6 className="segoe tw-text-lg tw-font-bold tw-text-[#1b1b1b]">
										{item?.title}
									</h6>
									<p className="tw-mb-3 Nunito first-letter:tw-uppercase tw-text-[#5E616A] tw-font-medium tw-text-base textTrunc textTrunc3">
										{item?.description}
									</p>
								</div>
								<div>
									<div className="tw-flex tw-justify-between tw-items-center tw-gap-1 py-2 ">
										<div className="tw-flex tw-gap-2 tw-items-center">
											<Rating
												initialValue={item?.rating}
												onClick={() => {}}
												fillColor="#FFD700"
												size={16}
												readonly
											/>
											<div>
												<p className="tw-text-[10px] tw-text-[#1b1b1bee] tw-font-normal Nunito">
													({item?.rating || 0})
												</p>
											</div>
										</div>
										{/* <div className="">
											<p className="tw-text-sm tw-font-bold Nunito tw-text-[#40444e]">
												4.8
											</p>
										</div> */}
									</div>
									<div className="tw-flex tw-gap-1 tw-items-center mt-auto">
										<FaVideo />
										<div className="tw-text-[10.5px] tw-text-[#1b1b1bcc] tw-font-boldtw-capitalize">
											{item?.module?.reduce(
												(ac, i) => (ac += i?.quest?.length),
												0
											) || 0}{" "}
											Videos
										</div>
										<div className=" tw-flex tw-gap-1 tw-items-center">
											<BsClock />
											<div className="tw-text-[10.5px] tw-text-[#1b1b1bcc] tw-font-bold  tw-capitalize">
												{" "}
												{Math.ceil(item?.duration / 60)} hours
											</div>
										</div>
										<div>
											<BsAward />
										</div>
									</div>
									{!noLink && (
										<button
											onClick={() =>
												navigate(
													`/courses?course=${item?._id}&title=${item?.title}`
												)
											}
											className="tw-bg-[#1A10C5] tw-h-8 tw-w-28 tw-rounded-2xl tw-text-white tw-font-bold tw-text-[12px] tw-mt-4 text-capitalize">
											learn more
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export const HowItWorks = () => {
  return (
    <div
      className=""
      style={{
        background: "linear-gradient(106.75deg, #918FDB 0%, #0D03C3 100%)",
      }}
    >
      <div className="container py-3 py-md-5">
        <div className="text-center text-white">
          <h1 className="lg:tw-text-4xl tw-text-2xl tw-text-white tw-font-bold sansation tw-uppercase">
            how it works
          </h1>
          <p className="lg:tw-text-3xl tw-opacity-80  tw-leading-[-0.03em]">
            Our e-learning app lets you learn on-the-go, see how it works.
          </p>
        </div>
        <div className="tw-mt-2" data-aos="zoom-in" data-aos-duration="3000">
          <img src={Howmain} alt="" className="lg:tw-h-auto tw-h-72" />
          {/* <div className="d-none d-md-flex">
            <img src={how1} alt="how it works" className="img-fluid" />
          </div>
          <div className="d-flex d-md-none">
            <img src={how2} alt="how it works" className="img-fluid" />
            <img src={how3} alt="how it works" className="img-fluid" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

const LearningPlan = () => {
  let {
    plan,
    // numberWithCommas
  } = useContext(GlobalState);
  let techList = [
    {
      id: 1,

      title: "tech lite",
      image: Pace,
      color: "#EF11BC",
      bg: "#FEDBF6",
      price: "00,000",
    },
    {
      id: 2,
      image: Plain,
      title: "tech prime",
      color: "#0C8209",
      bg: "#DCFEDB",
      price: "00,000",
    },
    {
      id: 3,
      image: Later,
      title: "tech premium",
      color: "#7311EF",
      bg: "#F3DBFE",
      price: "00,000",
    },
  ];
  if (!plan?.data) return;

  return (
    <div className="">
      <div className="container py-3 py-md-5">
        <div className="py-3">
          <h1 className="text-center tw-text-4xl tw-font-bold sansation tw-text-[#070565]">
            Our Learning Mode
          </h1>
        </div>
        <div className="tw-grid lg:tw-grid-cols-3 mx-0 g-3 mb-4">
          {plan?.data?.map((item, i) => (
            <div
              data-aos-duration="3000"
              data-aos="zoom-in-up"
              key={i}
              className="p-3"
            >
              <div
                className="py-5 p-3 text-center"
                style={{
                  boxShadow: "0px 0px 100px rgba(0, 0, 0, 0.07)",
                  borderRadius: "20px",
                }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    height: "3.5rem",
                    width: "3.5rem",
                    background: techList?.[i]?.bg,
                  }}
                >
                  <img src={techList?.[i].image} alt="" className="" />
                  {/* <FaGraduationCap size={24} color={techList?.[i]?.color} /> */}
                </div>
                <h1
                  style={{
                    color: "rgba(29, 26, 173, 0.8)",
                  }}
                  className="fw-bold text-center text-uppercase my-3"
                >
                  {item?.name}
                </h1>

                {item?.benefits?.map((list, i) => (
                  <p
                    className="text-center"
                    style={{
                      lineHeight: "150%",
                      textAlign: "center",
                      color: "rgba(27, 27, 27, 0.8)",
                    }}
                    key={i}
                  >
                    {list}
                  </p>
                ))}
                {/* <p className="tw-text-2xl tw-font-bold tw-text-[#1b1b1b] sansation">
                    NGN {numberWithCommas(Number(item?.amount).toFixed(2))}
                  </p> */}
              </div>
            </div>
          ))}
        </div>
        <div data-aos-duration="3000" data-aos="zoom-in-up" className="py-4">
          <div
            className=" py-3 py-md-5 container tw-rounded-3xl d-flex tw-items-center tw-justify-around"
            style={{
              background:
                "linear-gradient(90.18deg, #2A5AFF -52.19%, #2E49A7 81.92%)",
            }}
          >
            <p className="Nunito tw-font-bold lg:tw-text-4xl tw-text-xl tw-text-white">
              Are you ready to learn now <br /> and pay later ?
            </p>
            <MainButton2 />
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [active, setActive] = useState(null);
  const [answer, setAnswer] = useState(false);
  let arr = [
    {
      id: 1,
      question:
        "How does the self-paced, virtual, and learn now pay later learning plan work?",
      answer: [
        "The self-paced learning plan allows you to set your own schedule and progress through the material at a speed that suits your learning style. You have the flexibility to study when it's convenient for you, making it easier to balance other commitments such as work or personal obligations. It also provides an opportunity for personalized learning, allowing you to spend more time on challenging topics or quickly grasp concepts that come easily to you.",
        "The Virtual learning plan provides a one-on-one remote learning experience with our instructors from anywhere with an internet connection. Virtual training offers several benefits, including the ability to learn from the comfort of your own home or any location of your choice. It eliminates the need for commuting and reduces associated costs. ",
        "The Learn Now Pay Later learning plan provides the opportunity to acquire knowledge now and defer payment to a later time. This allows for face-to-face interaction with instructors and fellow students, fostering a collaborative learning environment. It provides immediate feedback and the opportunity to ask questions in real-time.",
      ],
    },
    {
      id: 2,
      question: "What kind of tech training programs do you offer? ",
      answer: [
        "We offer a wide range of tech training programs cover such as Front-End development, Back-End Development, Data science, Digital Marketing, Data Analysis, and more. Our programs are specifically tailored for beginners and aim to equip you with the essential knowledge and skills required to thrive in the rapidly evolving tech industry",
      ],
    },
    {
      id: 3,
      question:
        "Will certificate be given after the program is completed successfully?",
      answer: [
        "Absolutely! Upon successfully completing our programs, you will be awarded a certificate",
      ],
    },
    {
      id: 4,
      question:
        "Can I pay in instalment for any of the program or learning plan?",
      answer: [
        "Unfortunately, we do not offer installment payment options for our programs. However, we have carefully structured our program fees to be affordable.",
      ],
    },
    {
      id: 5,
      question:
        "Is a job guaranteed for me after any of the program or learning plan?",
      answer: [
        "Our commitment is to provide you with an immersive experience that will significantly enhance your employability.",
      ],
    },
  ];
  const handleActive = (i) => {
    setActive(i);
    setAnswer(!answer);
  };
  return (
    <div
      style={{
        background: `url(${Faqbg})`,
        backgroudSize: "cover",
        backgroundPosition: "center",
      }}
      className="tw-w-full tw-py-20"
    >
      <div className="container">
        <h1 className="tw-text-center tw-font-bold lg:tw-text-3xl tw-text-3xl Dmsans tw-text-white">
          Frequently Asked{" "}
          <span className="tw-text-3xl tw-text-[#2F75FD] Dmsans">
            Questions
          </span>
        </h1>
        <p className="tw-text-[#CDC9DD] tw-text-xl tw-font-medium tw-text-center Dmsans tw-pt-6">
          Everything you need to know about the BCT LMS.
        </p>
        <div className="tw-w-full tw-mt-8">
          {arr?.map((item, i) => (
            <div
              data-aos-duration="3000"
              data-aos="zoom-in-up"
              className="py-3 border-width-4 border-bottom"
              key={i}
            >
              <div
                onClick={() => handleActive(i)}
                className="tw-flex tw-justify-between tw-cursor-pointer"
              >
                <h6 className="tw-mb-3 lg:tw-text-xl tw-text-base tw-text-white tw-font-bold Dmsans">
                  {item?.question}
                </h6>
                <div>
                  <IconContext.Provider
                    value={{
                      color: "#fff",
                    }}
                  >
                    {(active === i) & answer ? (
                      <HiOutlineArrowCircleUp size={20} />
                    ) : (
                      <HiOutlineArrowCircleRight size={20} />
                    )}
                  </IconContext.Provider>
                </div>
              </div>
              {active === i && (
                <div className="tw-space-y-2">
                  {item.answer.map((ans, i) => (
                    <p
                      key={i}
                      className={
                        answer
                          ? `lg:tw-text-base tw-text-sm tw-font-normal sansation Dmsans tw-text-[#cdc9dd]`
                          : "tw-hidden"
                      }
                    >
                      {ans}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const Testimonial = () => {
  const TestimonialArr = [
    {
      id: 1,
      text: "I came to BCT Academy after graduating from university to be trained in Front-End Development. The learning was fun and intensive, with plenty of hands-onpractice. I had the opportuni to wokrk on real-world projects. I applied for and was hired by BCT as a junior web developer, and I am also a facilitator in the Academy.",
      image: "",
      name: "David Ijezie",
      course: "Front-End Developer",
    },
    {
      id: 2,
      text: "BCT has a conducive environment for learning, I felt welcomed from the moment I walked through the door.  I had young and vibrant motivational tutors who really helped to support me along my journey With the practicality of the training and my steadfastness, I gained an employment into one of the top financial service company as a Data Analyst.",
      image: "",
      name: "Okafor Chimezie Kingsley",
      course: "Data Analysit",
    },
    {
      id: 3,
      text: "Everyday at BCT Academy was very beneficial. I learned new things daily and had the opportunity to practice on real projects, you don't get that kind of experience at universities. I really recommend others take the chance of entering the tech world through BCT Academy. Learning here is interesting and promising.",
      image: "",
      name: "Kemisola Adediwura",
      course: "Back-End Developer",
    },
    {
      id: 4,
      text: "I came to the training with little knowledge of HTML, but thanks to the training provided by BCT Academy, I can confidently say I now know CSS, Java Script, and React. I was also the best student and was retained to work here during my service. Thank you to BCT Academy for assisting me with my tech career.",
      image: "",
      name: "Hussain Babatunde",
      course: "Front-End Developer",
    },
  ];
  return (
    <div className="tw-mb-32 tw-mt-16 container">
      <div className="">
        <div className="">
          <div data-aos-duration="3000" data-aos="zoom-in-up" className="">
            <h3 className="lg:tw-text-4xl tw-text-xl tw-font-bold tw-text-[#070565] tw-text-center sansation tw-uppercase ">
              What our students are saying
            </h3>
          </div>
          <>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySwiper tw-mt-12 tw-pb-32"
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Pagination, Autoplay, Mousewheel]}
            >
              {TestimonialArr?.map((item, i) => (
                <SwiperSlide key={i}>
                  <div
                    style={{
                      boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)",
                    }}
                    data-aos-duration="3000"
                    data-aos="zoom-in-up"
                    className="lg:tw-pt-8 tw-py-4 tw-h-fit tw-px-10 tw-bg-[#dbecff] tw-rounded-2xl"
                    key={item.id}
                  >
                    <img src={Quote} alt="" className="tw-mx-auto" />
                    <p className="tw-text-[#14213D] tw-leading-8 tw-pt-8 tw-text-bae segoe tw-text-center tw-font-medium">
                      {item.text}
                    </p>
                    <div className="tw-mt-4 lg:tw-mb-2 tw-flex tw-justify-center">
                      <Rating size={20} fillColor="yellow" initialValue={5} />
                    </div>
                    <div className="tw-bg-w-full tw-mt-4 lg:tw-mt-0 lg:-tw-mb-28">
                      <img src={Image} alt="" className="tw-mx-auto" />
                      <h6 className="tw-text-xl segoe tw-text-[#1b1b1bcc] tw-font-bold tw-text-center tw-pt-2">
                        {item.name}
                      </h6>

                      <p className="tw-text-base tw-text-center segoe tw-text-[#1b1b1bee] tw-font-normal">
                        {item.course}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};
export const Trusted = () => {
  return (
    <div>
      <div className="tw-bg-[#EBF1FF] tw-py-12 tw-w-full">
        <h4 className="tw-text-4xl tw-font-bold tw-text-[#1b1b1b] sansation tw-text-center">
          Trusted by the Best
        </h4>
        <p className="tw-text-xl tw-text-center tw-text-black sansation tw-font-normal tw-pt-2">
          Lorem ipsum dolor sit amet consectetur. Diam nunc mi commodo porta.
        </p>
        <div className="tw-mt-8 tw-flex tw-flex-col lg:tw-flex-row tw-justify-center lg:tw-h-14 tw-items-center tw-gap-12">
          <img src={Microsoft} alt="microsoft" className="" />
          <img src={Microsoft} alt="microsoft" className="" />
          <img src={Paypal} alt="microsoft" className="" />
          <img src={Paypal} alt="microsoft" className="" />
          <img src={Google} alt="microsoft" className="" />
        </div>
      </div>
    </div>
  );
};
export const CourseModal = ({ handleclose }) => {
  let { course } = useContext(GlobalState);
  const [active, setActive] = useState(null);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  if (!course?.data) return;

  return (
    <div>
      <div className="tw-absolute tw-inset-0 tw-bg-white tw-bg-opacity-30 tw-flex tw-justify-center tw-z-50">
        <div
          style={{
            overflowY: "scroll",
          }}
          data-aos="zoom-up"
          data-aos-duration="1000"
          className="tw-bg-white tw-py-6 tw-px-6 tw-w-96 tw-mt-20 tw-h-96 noScroll"
        >
          <div className="tw-flex tw-justify-between tw-items-center tw-px-4">
            <h6 className="sansation tw-font-bold tw-text-lg tw-text-black tw-uppercase">
              All Categories
            </h6>
            <IconContext.Provider value={{ color: "#000" }}>
              <div
                onClick={handleclose}
                className="tw-cursor-pointer relative tw-z-50"
              >
                <IoMdClose size={20} />
              </div>
            </IconContext.Provider>
          </div>
          <div className="tw-space-y-3 tw-mt-6">
            {course?.data?.map((item) => (
              <div key={item._id}>
                <div
                  onClick={() => {
                    setActive(item._id);
                    navigate(
                      `/courses?course=${item?._id}&title=${item?.title}`
                    );
                  }}
                  className={
                    active === item._id
                      ? "tw-flex tw-items-center tw-justify-between tw-bg-transparent tw-px-4 tw-py-2 tw-cursor-pointer tw-rounded-lg"
                      : "tw-flex tw-items-center tw-justify-between tw-bg-transparent tw-px-4 tw-py-2 tw-rounded-lg tw-cursor-pointer"
                  }
                >
                  <p
                    className={`${
                      active === item._id ? "tw-text-black" : "tw-text-black"
                    } tw-text-[13px] tw-font-normal Nunito`}
                  >
                    {item?.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
// const Support = () => {
//   return (
//     <section>
//       <div className="tw-my-16 container tw-grid tw-grid-cols-2 tw-gap-4">
//         <div className="">
//           <img src={FinancialImg} alt="" className="tw-rounded-lg" />
//         </div>
//         <div className="">
//           <iframe
//             className="tw-h-full tw-w-full"
//             src="https://docs.google.com/forms/d/e/1FAIpQLScojgWruo6gcmAHN2UCnF_HRkzdAVL0zkvjFIKVNva-7b1Yaw/viewform"
//             frameborder="0"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };
export const Junks = () => {
  const TestimonialArr = [
    {
      id: 1,
      text: "I came to BCT Academy after graduating from university to be trained in Front-End Development. The learning was fun and intensive, with plenty of hands-onpractice. I had the opportuni to wokrk on real-world projects. I applied for and was hired by BCT as a junior web developer, and I am also a facilitator in the Academy.",
      image: "",
      name: "Hussain Babatunde",
      course: "Frontend Developer",
    },
    {
      id: 2,
      text: "BCT has a conducive environment for learning, I felt welcomed from the moment I walked through the door.  I had young and vibrant motivational tutors who really helped to support me along my journey With the practicality of the training and my steadfastness, I gained an employment into one of the top financial service company as a Data Analyst.",
      image: "",
      name: "Okafor Chimezie Kingsley",
      course: "Data Analysit",
    },
    {
      id: 3,
      text: "Everyday at BCT Academy was very beneficial. I learned new things daily and had the opportunity to practice on real projects, you don't get that kind of experience at universities. I really recommend others take the chance of entering the tech world through BCT Academy. Learning here isej interesting and promising.",
      image: "",
      name: "Kemisola Adediwura",
      course: "Backend Developer",
    },
  ];
  return (
    <>
      <div className="tw-w-full lg:tw-grid tw-grid-cols-3 lg:tw-space-y-0 tw-space-y-11 lg:tw-gap-10 tw-mt-10">
        {TestimonialArr?.map((item) => (
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            onSlideChange={() => console.log("i am working")}
          >
            <SwiperSlide>
              <div>
                <div
                  style={{
                    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.25)",
                  }}
                  data-aos-duration="3000"
                  data-aos="zoom-in-up"
                  className="lg:tw-pt-8 tw-py-4 lg:tw-py-0 overflow-visible tw-px-10 tw-bg-[#dbecff] tw-rounded-2xl"
                  key={item.id}
                >
                  <img src={Quote} alt="" className="tw-mx-auto" />
                  <p className="tw-text-[#14213D] tw-leading-8 tw-pt-8 tw-text-bae segoe tw-text-center tw-font-medium">
                    {item.text}
                  </p>
                  <div className="tw-mt-4 lg:tw-mb-2 tw-flex tw-justify-center">
                    <Rating size={20} fillColor="yellow" initialValue={5} />
                  </div>
                  <div className="tw-bg-w-full tw-mt-4 lg:tw-mt-0 lg:-tw-mb-10">
                    <img src={Image} alt="" className="tw-mx-auto" />
                    <h6 className="tw-text-xl segoe tw-text-[#1b1b1bcc] tw-font-bold tw-text-center tw-pt-2">
                      {item.name}
                    </h6>

                    <p className="tw-text-base tw-text-center segoe tw-text-[#1b1b1bee] tw-font-normal">
                      {item.course}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        ))}
      </div>
    </>
  );
};
const NewHow = () => {
  const HowArr = [
    {
      id: 1,
      title: "VIEW COURSES",
      description:
        "Take a look at our courses to explore the available options and gain insight into the various learning opportunities we offer.",
      image: View,
    },
    {
      id: 2,
      title: "PICK A COURSE",
      description:
        "Choose a course of your choice from our courses and embark on a transformative learning journey to enhance your skill and knowledge.",
      image: Pick,
    },
    {
      id: 3,
      title: "CHOOSE A PLAN",
      description:
        "Pick a plan that aligns most effectively with your unique needs.",
      image: Choose,
    },
    {
      id: 4,
      title: "MAKE PAYMENT",
      description:
        "Select the payment method that suits your preferences and follow the required steps to finalize the transaction",
      image: Payment,
    },
    {
      id: 5,
      title: "CONFIRM PAYMENT",
      description:
        "Verify payment to ensure that the transaction has been successfully processed.",
      image: Confirm,
    },
    {
      id: 6,
      title: "SIGN UP",
      description:
        "Create an account by providing your necessary information and completing the registration process.",
      image: Sign,
    },
  ];
  return (
    <div>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        style={{
          background: "linear-gradient(90deg, #FAFBFD 0%, #D7DDE8 100%)",
        }}
        className="tw-mt-12 tw-w-full tw-py-12"
      >
        <div className="container tw-flex tw-flex-col lg:tw-flex-row tw-gap-8">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="lg:tw-my-16 tw-my-8 lg:tw-w-[45%]"
          >
            <h2 className="tw-text-[#070565] tw-text-3xl tw-font-bold tw-tracking-[-1px] tw-uppercase">
              how it works
            </h2>
            <p className="tw-text-[#1b1b1b] tw-font-normal tw-opacity-60 tw-text-xl ">
              Our e-learning app lets you <br />
              learn on-the-go, see how it <br />
              works.
            </p>
            <img
              data-aos="fade-up"
              data-aos-duration="2000"
              src={HowGif}
              alt=""
              className="tw-mt-10 tw-h-80 lg:tw-h-96"
            />
          </div>
          <div className="lg:tw-w-[55%] tw-space-y-4">
            {HowArr.map((item, i) => (
              <div
                data-aos="zoom-in-down"
                data-aos-duration="1500"
                key={i}
                style={{
                  boxShadow: " 0px 4px 12px -10px #EDEEF0",
                }}
                className="tw-bg-white lg:tw-py-6 lg:tw-px-10 tw-flex tw-justify-between"
              >
                <div className="tw-h-10 tw-w-10 tw-bg-[#FFBD59] tw-rounded-full lg:tw-flex tw-hidden tw-justify-center tw-items-center">
                  <p className="tw-text-2xl tw-text-[#1b1b1b] tw-font-bold segoe">
                    {item.id}
                  </p>
                </div>
                <div className="lg:tw-my-2 tw-m-3 lg:tw-m-0 ">
                  <h3 className="tw-uppercase">{item.title}</h3>
                  <p className="tw-text-sm tw-font-light segoe tw-text-[#1b1b1bcc] lg:tw-w-96">
                    {item.description}
                  </p>
                </div>
                <div className="lg:tw-flex tw-hidden tw-items-center">
                  <img src={item.image} alt="" className="tw-h-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(90deg, #0D3E6F 0%, #363795 100%)",
        }}
        className="w-full tw-my-20 tw-py-10"
      >
        <div className="container tw-bg-transparent">
          <h4 className="tw-text-4xl tw-text-center tw-font-bold tw-text-white">
            ABOUT US
          </h4>
          <p className="tw-text-2xl tw-pt-4 tw-font-normal poppins tw-text-white tw-text-center">
            Who We Are And What We Do
          </p>
          <div className="tw-grid lg:tw-grid-cols-2 tw-gap-5 tw-mt-10">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-5 tw-items-center"
            >
              <img src={About1} alt="" className="" />
              <div className="tw-space-y-4">
                <img src={About2} alt="" className="" />
                <img src={About3} alt="" className="" />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500">
              <h6 className="tw-text-white tw-text-2xl tw-font-semobold tw-pt-4">
                What BCT Academy offers{" "}
              </h6>
              <p className="tw-text-base poppins tw-font-extralight tw-text-gray-100 tw-pt-6">
                At BCT Academy, we believe learning should be a fun and engaging
                experience. Our mission is to create an environment where
                learners can explore the exciting world of technology, acquire
                valuable skills, and achieve their learning goals at their own
                pace. We understand that traditional learning methods may not
                always capture the interest and motivation of students. This is
                the reason we have designed our courses and learning materials
                to be interactive, dynamic, and, most importantly, fun! We
                believe that when learners are actively engaged and inspired,
                their learning becomes more effective and meaningful. With our
                self-paced learning approach, you have the freedom to set your
                own study schedule and make progress at a pace that suits you
                best. Whether you're a busy professional, a student, or simply
                someone passionate about technology, our courses are designed to
                fit into your life seamlessly. Join us on this exciting learning
                adventure! we're here to support you every step of the way.
              </p>
              <button
                onClick={() => navigate("/register")}
                className="tw-mt-16 tw-h-12 tw-w-56 tw-rounded-2xl tw-bg-white tw-text-[#0f0bc7] lato tw-text-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Why = () => {
  const Arr = [
		{
			image: Why1,
			text: (
				<p className="tw-text-2xl poppins tw-font-normal tw-text-[#1b1b1b] tw-text-center">
					Personalized
					<br /> Learning
				</p>
			),
		},
		{
			image: Why2,
			text: (
				<p className="tw-text-2xl poppins tw-font-normal tw-text-[#1b1b1b] tw-text-center">
					Supportive <br /> Learning community
				</p>
			),
			mt: "lg:tw-mt-12",
		},
		{
			image: Why3,
			text: (
				<p className="tw-text-2xl poppins tw-font-normal tw-text-[#1b1b1b] tw-text-center">
					Book one-one-one <br /> session with tutors
				</p>
			),
		},
	];
  return (
    <div>
      <div className="tw-my-28 container tw-flex tw-flex-col lg:tw-flex-row tw-gap-12 lg:tw-gap-0 tw-justify-between">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="tw-my-auto"
        >
          <h4 className="tw-text-[#1b1b1b] tw-font-bold tw-text-4xl">
            Why choose us <br />
            for your learning journey
          </h4>
          <p className="tw-text-2xl poppins tw-font-normal tw-text-[#1b1b1b] tw-w-64 tw-pt-8">
            Start building your career by registering for any of our courses
          </p>
        </div>
        <div className="tw-grid lg:tw-grid-cols-3 tw-justify-center lg:tw-gap-16 tw-gap-8">
          {Arr.map((item, i) => (
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1500"
              key={i}
              style={{
                boxShadow: "0px 0px 20px -10px rgba(15, 11, 199, 0.40)",
              }}
              className={`tw-bg-[#dbecff] tw-py-10 tw-px-6 tw-h-96 ${item.mt} tw-w-72 tw-flex tw-rounded-2xl tw-justify-center`}
            >
              <div>
                <img src={item.image} alt="" className="tw-h-44 mx-auto" />
                <p className="tw-text-xl poppins tw-font-normal tw-text-[#1b1b1b] tw-text-center">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
