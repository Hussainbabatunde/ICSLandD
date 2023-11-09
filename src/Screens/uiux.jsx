import { PageHeader } from "./blog";
import Img1 from "../assets/uiux1.png";
import Img2 from "../assets/uiux2.png";
import Img3 from "../assets/uiux3.png";
import Man from "../assets/man.png";
import { useNavigate } from "react-router-dom";

const Uiux = () => {
  const PathList = [
    {
      path: "Accessibility: No-Code tools make UI/UX design more accessible to a broader audience, regardless of technical expertise. This opens up opportunities for individuals who may not have coding skills to enter the field of UI/UX and pursue their passion for creating visually appealing and user-friendly digital experiences.",
    },
    {
      path: "Creativity: No-Code tools provide a creative playground for aspiring designers to unleash their creativity without the limitations of coding skills. With pre-built templates, drag-and-drop features, and intuitive interfaces, No-Code tools allow designers to experiment, iterate, and bring their unique visions to life.",
    },
    {
      path: "Efficiency: No-Code tools streamline the UI/UX design process, allowing designers to create prototypes, wireframes, and mockups quickly and efficiently. This enables faster iterations and feedback loops, leading to more efficient product development cycles and quicker time-to-market.",
    },
    {
      path: "Flexibility: No-Code career paths in UI/UX offer flexibility in terms of work arrangements. You can work as a freelancer, or remote worker, or start your own design agency, giving you the freedom to choose your own path and work on projects that align with your interests and values.",
    },
    {
      path: "Versatility: No-Code tools are versatile and can be used for a wide range of applications, from web design and development to mobile app design, e-commerce platforms, and more. This versatility allows UI/UX designers to work on diverse projects and gain expertise in various industries, opening up a world of opportunities.",
    },
  ];
  const Platforms = [
    "Appgyver: A visual development platform that enables designers to create web and mobile applications with complex logic and workflows without writing any code.",
    "Glide: A no-code platform that allows designers to create mobile apps using Google Sheets as a data source, making it easy to create data-driven UI/UX experiences.",
    "Adalo: A visual development platform that empowers designers to create mobile apps with custom data models, APIs, and workflows, without any coding skills.",
    "WordPress: A popular website-building platform that offers a visual interface and a wide range of themes and plugins to create custom UI/UX designs without writing any code.",
    "Thunkable: A no-code platform that allows designers to create mobile apps using visual blocks, making it easy to create interactive and engaging UI/UX experiences.",
  ];
  const Platforms2 = [
    "Figma: A collaborative design tool that allows designers to create and iterate on UI/UX designs in real time, making it a popular choice for teams.",
    "Webflow: A visual web design tool that enables designers to create visually stunning and interactive websites without writing any code.",
    "Bubble: A visual web development platform that empowers designers to create web applications with custom logic and workflows, without the need for coding skills.",
    "Sketch: A vector-based design tool that allows designers to create high-fidelity UI/UX designs for web and mobile applications.",
    "Axure RP: A wireframing and prototyping tool that enables designers to create interactive UI/UX prototypes without coding skills, making it a popular choice for creating interactive and dynamic UI/UX prototypes.",
  ];
  const Careerpath = [
    "UI/UX Designer: UI/UX designer, you can create visually appealing and user-friendly websites, web applications, and mobile applications using No-Code tools. You can design engaging user interfaces, create interactive prototypes, and conduct user testing to optimize the user experience.",
    "Product Manager: As a product manager, you can use your UI/UX skills to lead product development teams and create innovative digital products. You can use No-Code tools to design product interfaces, conduct market research, and gather user feedback to inform product decisions.",
    "Entrepreneur: With No-Code tools, you can turn your creative ideas into viable digital products and launch your own startup. You can create prototypes, design websites, and develop web applications or mobile applications without the need for coding skills, making it easier to bring your entrepreneurial vision to life.",
    "No-Code Consultant: As a No-Code consultant, you can provide expertise and guidance to businesses and individuals on how to effectively use No-Code tools for their UI/UX needs. You can offer consultancy services, conduct training workshops, and provide design solutions using No-Code tools.",
  ];
  return (
    <div>
      <div className="">
        <PageHeader />
      </div>
      <div className="tw-w-full tw-bg-[#dbecffcc] lg:tw-pb-16">
        <div className="container tw-bg-[#f9fdfc] tw-p-6 lg:tw-p-10">
          <div className="">
            <h1 className="lg:tw-text-4xl tw-text-2xl tw-font-bold tw-text-[#070565] tw-capitalize">
              No Code Career Paths: UI/UX Design
            </h1>
            <p className="tw-font-normal lg:tw-text-2xl  segoe tw-text-[#1b1b1bcc] tw-pt-4">
              Tech Career Tips / Oluwaseun Dedenuola / 1 Comment
            </p>
          </div>
          <div>
            <div className="tw-mt-12 tw-grid lg:tw-grid-cols-2 tw-gap-10">
              <img src={Img1} alt="" className="lg:tw-h-80 tw-w-full" />
              <p className="lg:tw-text-lg tw-font-normal tw-text-[#1b1b1bcc] segoe">
                In today’s fast-paced digital landscape, the demand for
                user-friendly and visually appealing software applications is at
                an all-time high. As businesses strive to create seamless user
                experiences and engage with their customers online, the field of
                user interface (UI) and user experience (UX) design has become
                increasingly pivotal. Yes, you guessed right, with the rise of
                No-Code tools, aspiring designers and creatives now have the
                unique opportunity to break into the UI/UX industry without
                mastering complex coding languages. In this article, we will
                explore the exciting world of no-code career paths in UI/UX and
                how they can unlock your creative potential.
              </p>
            </div>
            <div className="tw-grid lg:tw-grid-cols-2 tw-gap-10 tw-mt-12">
              <div>
                <h2 className="lg:tw-text-xl segoe tw-font-bold tw-text-[#070565]">
                  The Evolution of UI/UX Design:
                </h2>
                <p className="lg:tw-text-lg tw-font-normal tw-text-[#1b1b1bcc] segoe tw-pt-6">
                  The Evolution of UI/UX Design: <br /> UI/UX design has come a
                  long way since the early days of the internet. In the past,
                  coding was a necessary skill for anyone aspiring to enter the
                  field of UI/UX design. You are probably asking out loud what a
                  no-code tool is? No-code tools are software applications that
                  allow individuals to create websites, web applications, and
                  mobile applications without writing a single line of code.
                  These tools come with pre-built templates, drag-and-drop
                  features, and intuitive interfaces that make them accessible
                  for anyone with creative ideas to bring their visions to life.
                  However, with the advent of no-code tools, the landscape has
                  changed dramatically.
                </p>
              </div>
              <img src={Img2} alt="" className="" />
            </div>
            <div className="tw-mt-12">
              <h3 className="tw-text-xl segoe tw-font-semibold tw-text-[#070565] tw-text-center">
                Then You May Ask, What are the Benefits of a No-Code career path
                in UI/UX Career?
              </h3>
              <div className="tw-mt-8">
                <h4 className="tw-text-lg tw-font-normal tw-text-[#1b1b1b] segoe">
                  Embracing a No-Code career path in UI/UX offers several
                  compelling benefits which includes:
                </h4>
                <ul className="tw-list-disc tw-list-inside tw-mt-4">
                  {PathList?.map((item, i) => (
                    <li
                      key={i}
                      className="lg:tw-text-lg tw-font-normal tw-text-[#1b1b1b] segoe"
                    >
                      {item.path}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="tw-mt-10">
              <h5 className="tw-text-xl segoe tw-font-normal tw-text-[#070565]">
                Key No-Code Tools and Platforms:
              </h5>
              <div className="tw-mt-6 tw-flex tw-flex-col lg:tw-flex-row tw-gap-10">
                <img src={Img3} alt="" className="tw-w-full tw-h-full" />
                <ul className="tw-list-disc tw-list-outside">
                  {Platforms?.map((item, i) => (
                    <li
                      key={i}
                      className="lg:tw-text-lg tw-font-normal segoe tw-text-[#1b1b1bcc]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tw-mt-8">
                <ul className="tw-list-disc tw-list-outside tw-px-6 tw-space-y-2">
                  {Platforms2?.map((item, i) => (
                    <li
                      key={i}
                      className="lg:tw-text-xl tw-font-normal segoe tw-text-[#1b1b1b]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tw-mt-12">
                <h5 className="tw-text-xl tw-font-bold segoe tw-text-[#070565]">
                  What are the No-Code Career Paths in UI/UX?
                </h5>
                <ul className="tw-mt-8 tw-list-disc tw-space-y-1">
                  {Careerpath?.map((item, i) => (
                    <li
                      key={i}
                      className="tw-text-base segoe tw-font-normal tw-text-[#1b1b1bcc]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="tw-font-italic tw-text-[#407bffcc] tw-text-base tw-font-normal tw-pt-8 tw-leading-8">
                    No-Code career paths in UI/UX are rapidly gaining
                    popularity, offering exciting opportunities for aspiring
                    designers and creatives to break into the industry without
                    coding skills.
                    <br />
                    Whether you’re a creative enthusiast, an entrepreneur, or a
                    consultant, No-Code UI/UX career paths can offer a rewarding
                    and fulfilling journey in the ever-evolving world of digital
                    design. Adopt the power of No-Code tools and unlock your
                    creative potential in the exciting field of UI/UX design.
                  </p>
                  <p className="tw-text-base tw-font-normal tw-text-[#1b1b1bcc] segoe tw-pt-8">
                    In conclusion, Are you ready to explore the world of no-code
                    UI/UX design? Don’t let the lack of coding skills hold you
                    back. Unleash your creativity, break barriers, and unlock
                    your true potential. The future of UI/UX design is here, and
                    it’s no code! Let’s help you embark on this exciting journey
                    together. Join BCT Academy and register for a UI/UX design
                    training at
                    https://academy.bcodestech.com/no-code-career-paths-ui-ux/.
                    The possibilities are endless. Get started today! Don’t
                    forget to click on the button below.
                  </p>
                  <BlogBtn text="Register Now" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommentSection />
      </div>
    </div>
  );
};
export const CommentSection = () => {
  return (
    <div>
      <div className="container tw-bg-white tw-p-10 tw-mt-12">
        <div>
          <h5 className="tw-text-xl Nunito tw-font-semibold tw-text-[#070565]">
            Comments
          </h5>
          <div className="tw-flex tw-mt-4 tw-gap-3 tw-items-center">
            <img src={Man} alt="" className="" />
            <div>
              <h6 className="tw-text-xl Nunito tw-font-semibold tw-text-[#1b1b1b]">
                Debbie Ayoola
              </h6>
              <p className="tw-text-sm tw-font-normal Nunito tw-text-[#1b1b1bcc]">
                07/06/2023
              </p>
            </div>
          </div>
          <p className="tw-text-base Nunito tw-font-medium tw-text-[#1b1b1bcc] tw-pt-4">
            What an excellent write-up, this is inspiring!
          </p>
          <div className="tw-mt-8">
            <h6 className="Nunito tw-text-lg tw-font-bold tw-text-[#070565]">
              Leave a Comment
            </h6>
            <form action="" className="tw-mt-10">
              <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-8">
                <div>
                  <p className="tw-text-base tw-font-medium Nunito tw-text-[#1b1b1b]">
                    Full Name
                  </p>
                  <input
                    style={{
                      border: "1px solid rgba(204, 204, 204, 0.8)",
                    }}
                    type="text"
                    className="tw-h-10 tw-mt-3 tw-w-96 tw-bg-white tw-rounded"
                  />
                </div>
                <div>
                  <p className="tw-text-base tw-font-medium Nunito tw-text-[#1b1b1b]">
                    Email Address
                  </p>
                  <input
                    style={{
                      border: "1px solid rgba(204, 204, 204, 0.8)",
                    }}
                    type="text"
                    className="tw-h-10 tw-mt-3 tw-w-96 tw-bg-white tw-rounded"
                  />
                </div>
              </div>
              <div className="tw-mt-6">
                <p className="tw-text-base tw-font-medium Nunito tw-text-[#1b1b1b]">
                  Type your message here
                </p>
                <textarea
                  style={{
                    border: "1px solid rgba(204, 204, 204, 0.8)",
                  }}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="tw-w-full tw-h-40 tw-mt-3"
                ></textarea>
                <BlogBtn text="Post a Comment" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export const BlogBtn = ({ text, path }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate(path)}
        className="tw-w-52 tw-h-10 tw-mt-10 tw-bg-[#1A10C5] tw-rounded-xl tw-text-xl Nunito tw-font-bold tw-text-white"
      >
        {text}
      </button>
    </div>
  );
};
export default Uiux;
