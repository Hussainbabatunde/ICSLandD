import React from "react";
import Done from "../assets/done.gif";

const DoneModal = ({ handleClose, children }) => {
  return (
    <div>
      <div className="">
        <div
          onClick={handleClose}
          className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-justify-center tw-items-center"
        >
          <div className="tw-p-6 tw-w-96 tw-bg-white">
            <img src={Done} alt="" className="tw-mx-auto tw-h-64 tw-w-5/6" />
            <h6 className="tw-pt-4 tw-text-xl tw-font-normal tw-text-[#1b1b1b] tw-uppercase tw-text-center sansation">
              {children}
            </h6>
          </div>
        </div>
      </div>
      {}
    </div>
  );
};

export default DoneModal;
