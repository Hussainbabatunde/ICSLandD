import { AiOutlineEye } from "react-icons/ai";

const WorksCard = () => {
  return (
    <div className="bg-white tw-max-w-md tw-relative tw-flex tw-items-center tw-gap-4 tw-p-4 tw-rounded-md">
      <div className="tw-flex tw-gap-4">
        <div className="tw-w-1/5">
          <div className="tw-h-14 tw-w-14 tw-bg-[#FFBD59] tw-rounded-full tw-flex tw-items-center tw-justify-center">
            1
          </div>
        </div>
        <div>
          <p className="tw-text-2xl tw-uppercase">view courses</p>
          <p className="tw-text-sm">
            Lorem ipsum dolor sit amet consectetur. Ultricies egestas quis
            pellentesque donec tempor. Arcu amet magna porta nibh viverra.
          </p>
        </div>
      </div>
      <div className="tw-absolute tw-h-14 tw-w-14 tw-bg-[#10F2D7] tw-rounded-full tw-flex tw-items-center tw-justify-center -tw-right-7">
        <AiOutlineEye size="30px" />
      </div>
    </div>
  );
};

export default WorksCard;
