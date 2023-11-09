import { PageHeader } from "./blog";
import Img1 from "../assets/developerimg.png";
import { CommentSection } from "./uiux";

const Developer = () => {
  return (
    <div>
      <div className="">
        <PageHeader />
      </div>
      <div className="tw-w-full tw-bg-[#dbecffcc] tw-py-8 lg:tw-pb-16">
        <div className="container tw-bg-[#f9fdfc] tw-p-6 lg:tw-p-16">
          <div>
            <h1 className="lg:tw-text-4xl tw-text-2xl tw-font-bold tw-text-[#070565] tw-capitalize">
              Understanding the Roles of Front End and Back End Developers
            </h1>
            <p className="tw-font-normal lg:tw-text-2xl  segoe tw-text-[#1b1b1bcc] tw-pt-4">
              Uncategorised / By Admin / Leave a Comment
            </p>
          </div>
          <div className="tw-mt-12">
            <img src={Img1} alt="" className="" />
            <div className="tw-mt-8">
              <p className="tw-italic tw-font-normal tw-text-lg segoe tw-text-[#1b1b1bcc]">
                Digital marketing is a field in the tech industry that doesn’t
                necessarily require a background in coding, but it certainly can
                be helpful to have some coding knowledge.
              </p>
              <p className="tw-font-normal tw-text-lg segoe tw-text-[#1b1b1b] tw-pt-4">
                No-code platforms have revolutionized the digital marketing
                industry, offering marketers and entrepreneurs with no coding
                experience the ability to build websites, landing pages, and
                marketing automation workflows with ease. This has opened up a
                new career path for those interested in digital marketing but
                lacking technical skills.
              </p>
            </div>
          </div>
          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default Developer;
