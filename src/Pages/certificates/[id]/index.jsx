import React from "react";
import Certificate from "../../../assets/certificate.png";
// import Certificate2 from "../../../assets/certificate-bg.png";
// import DownloadedCert from "../../../assets/downloaded.png";
// import { useNavigate } from "react-router-dom";

const DownloadCert = (id) => {
  // const navigate = useNavigate();
  return (
    <div>
      <div className="">
        <h4 className="tw-text-base tw-font-bold tw-uppercase tw-border-l-4 tw-border-l-[#0f0bc7] lg:tw-pl-8 tw-pl-3 segoe">
          download certificates
        </h4>
        <p className="lg:tw-text-[15px] tw-text-sm tw-text-center lg:tw-text-left tw-font-normal tw-text-black tw-pt-3 lg:tw-pl-8 segoe">
          Congratulations on your Completion of “Data Analysis: From Zero to
          Pro”. You have been awarded this certificate which you truly deserve.
          We wish you more giant strides. Click button below to download
          certificate.
        </p>
        <div className="tw-mt-4">
          <img src={Certificate} alt="" className="" />
        </div>
        <div className="tw-mt-10 tw-mx-auto tw-w-28">
          <button className="tw-bg-[#ffd600] lg:tw-block tw-hidden tw-h-10 tw-w-full tw-rounded-md tw-text-sm tw-font-normal tw-text-black">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export const Downloaded = () => {
  return (
    <div>
      <div className="">
        <p className="lg:tw-text-[15px] tw-border-l-4 tw-border-l-[#0f0bc7] tw-text-sm tw-text-center lg:tw-text-left tw-font-normal tw-text-black tw-pt-3 lg:tw-pl-8 segoe">
          Your certificate has been successfully downloaded! Go to
          www.websiteurl.com to learn more and get certified..
        </p>
        <div className="tw-mt-6">
          <img src={DownloadCert} alt="" className="" />
          <div className="sr-only">
            <p>
              <span>CERTIFICATE</span> OF COMPLETION
            </p>
            <p>THIS IS TO CERTIFY THAT</p>
            <div>
              <p>BCT Academy, Nigeria</p>
              <p>
                Successfully completed our DIGITAL MARKETING training program on
                1st September, 2023
              </p>
            </div>
            <div>
              <div>
                <p>BCT/DM/###</p>
                <p>Certficate Code</p>
              </div>
              <div></div>
              <div>
                <p></p>
                <p>Eti-Ima Brownson - CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DownloadCert;
