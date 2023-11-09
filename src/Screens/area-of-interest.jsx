import { useNavigate } from "react-router-dom";

const AreaOfInterest = () => {
  const navigate = useNavigate();
  const goToExperience = () => {
    navigate("/experience");
  };
  return (
    <div className="container tw-py-20">
      <div className="tw-grid md:tw-grid-cols-2 tw-gap-12">
        <div>
          <p className="tw-text-2xl fw-bold tw-mb-2">
            What course will you be teaching on BCT?{" "}
          </p>
          <p className="tw-text-xl tw-text-text tw-max-w-md">
            To complete your registration, an OTP has been sent to your email
            address for verification. Enter OTP below to sign up successfully!.
          </p>
          <div className="tw-mt-20 tw-max-w-sm">
            <p className="tw-text-lg">Share your area of interest</p>
            <select
              className="form-select tw-h-12 tw-text-xl tw-mt-4"
              aria-label="Default select example"
            >
              <option value="">interest 1</option>
              <option value="">interest 2</option>
              <option value="">interest 3</option>
              <option value="">interest 4</option>
            </select>
          </div>

          <div className="tw-mt-20">
            <p>
              Didn't receive OTP?{" "}
              <span className="tw-text-main">Resend OTP</span> or{" "}
              <span className="tw-text-main">change emeial address</span>
            </p>

            <button
              className="btn btn-primary tw-mt-14 tw-h-12 tw-text-xl"
              onClick={goToExperience}
            >
              next
            </button>
          </div>
        </div>
        <div>
          <img src={require("../assets/otp.png")} alt="" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default AreaOfInterest;
