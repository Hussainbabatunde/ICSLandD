import { PageHeader } from "./blog";
import Img1 from "../assets/digitalmark.png";
import Img2 from "../assets/digitalmark1.png";
import { BlogBtn, CommentSection } from "./uiux";

const Marketing = () => {
  const Career = [
    "Digital Marketing Manager: A Digital Marketing Manager is responsible for creating, executing, and managing a company’s digital marketing strategy. They might also manage a team of digital marketers.",
    "Content Marketer: A Content Marketer is responsible for creating, publishing, and promoting content that engages and informs target audiences. This can include blog posts, social media posts, email campaigns, and other types of content.",
    "Search Engine Optimization (SEO) Specialist: An SEO Specialist focuses on optimizing websites to rank higher in search engine results. They use a combination of technical and creative skills to improve a website’s visibility in search engine results.",
  ];
  const Career2 = [
    "Pay-Per-Click (PPC) Manager: A PPC Manager is responsible for creating and managing paid advertising campaigns on platforms like Google AdWords, Bing Ads, and Facebook Ads.",
    "Social Media Manager: A Social Media Manager is responsible for creating and managing a company’s social media presence on platforms like Facebook, Twitter, Instagram, and LinkedIn.",
  ];
  return (
    <div>
      <div className="">
        <PageHeader />
      </div>
      <div className="tw-w-full tw-bg-[#dbecffcc] tw-py-8 lg:tw-pb-16">
        <div className="container tw-bg-[#f9fdfc] tw-p-6 lg:tw-p-16">
          <div className="">
            <h1 className="lg:tw-text-4xl tw-text-2xl tw-font-bold tw-text-[#070565] tw-capitalize">
              No Code Career Paths: Digital Marketing
            </h1>
            <p className="tw-font-normal lg:tw-text-2xl  segoe tw-text-[#1b1b1bcc] tw-pt-4">
              Tech Career Tips / Oluwaseun Dedenuola / 1 Comment
            </p>
          </div>
          <div className="tw-mt-12">
            <img src={Img1} alt="" className="" />
            <p className="tw-text-lg tw-italic segoe tw-text-[#1b1b1bcc] tw-font-normal tw-pt-8">
              Digital marketing is a field in the tech industry that doesn’t
              necessarily require a background in coding, but it certainly can
              be helpful to have some coding knowledge.
            </p>
            <p className="tw-text-lg tw-font-normal tw-text-[#1b1b1b] tw-pt-6 segoe">
              No-code platforms have revolutionized the digital marketing
              industry, offering marketers and entrepreneurs with no coding
              experience the ability to build websites, landing pages, and
              marketing automation workflows with ease. This has opened up a new
              career path for those interested in digital marketing but lacking
              technical skills.
            </p>
          </div>
          <div className="tw-mt-12">
            <h4 className="tw-text-xl tw-text-[#407bffcc] segoe tw-font-semibold tw-text-center">
              Here are some no-code digital marketing career you can consider:
            </h4>
            <ul className="tw-list-decimal tw-mt-6 tw-space-y-2">
              {Career.map((item, i) => (
                <li
                  key={i}
                  className="tw-text-lg tw-font-normal segoe tw-text-[#1b1b1bcc]"
                >
                  {item}
                </li>
              ))}
            </ul>
            <img src={Img2} alt="" className=" tw-mt-8" />
            <ol start={4} className="tw-list-decimal tw-mt-6 tw-space-y-2">
              {Career2.map((item, i) => (
                <li className="tw-text-lg tw-font-normal segoe tw-text-[#1b1b1bcc]">
                  {item}
                </li>
              ))}
            </ol>
            <p className="tw-text-lg tw-font-normal segoe tw-italic tw-text-[#407bffcc] tw-pt-6">
              Having a background in coding can be beneficial for some of these
              roles; it can also help you understand the technical aspects of
              digital marketing and develop more effective strategies. However,
              it’s not a requirement, and many successful digital marketers have
              learned on the job or through other means.
            </p>
            <p className="tw-text-lg tw-font-normal tw-text-[#1b1b1bcc] segoe tw-pt-6">
              Take the first step in equipping yourself with essential digital
              skills by signing up for a no-code course on digital marketing at{" "}
              <span className="tw-text-lg tw-font-normal segoe tw-text-[#407bffcc]">
                <a href="https://academy.bcodestech.com/digital-marketing-2/">
                  https://academy.bcodestech.com/digital-marketing-2/
                </a>
              </span>
              . At Bcodestech Academy, we are committed to empowering as many
              people as possible with the skills they need to succeed in the
              digital age. By enrolling in our course, you’ll gain valuable
              knowledge and practical skills that can help you thrive in today’s
              digital landscape. Don’t miss this opportunity to take your skills
              to the next level. Visit our website and sign up for the course
              today!
            </p>
            <BlogBtn text="Register Now" />
          </div>
        </div>
        <div>
          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default Marketing;
