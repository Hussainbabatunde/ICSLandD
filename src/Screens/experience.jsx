import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();
  const goToExperience = () => {
    navigate("/experience");
  };
  const goToResume = () => {
    navigate("/resume");
  };
  return (
    <div className="container tw-py-20">
      <div className="tw-grid md:tw-grid-cols-2 tw-gap-12">
        <div>
          <p className="tw-text-2xl fw-bold tw-mb-2">
            How knowledgeable are you in Data Analysis?
          </p>
          <p className="tw-text-xl tw-text-text">
            Lorem ipsum dolor sit amet consectetur. Commodo condimentum in non
            nullam tellus lacus dignissim in. Mi vestibulum ultrices rhoncus
            sagittis. Ac turpis auctor turpis felis eu. Magna donec dignissim
            libero a mattis eu. Turpis id sed mauris pulvinar consectetur
            euismod habitant. In odio id in adipiscing. Nisl vestibulum ipsum.
          </p>
          <div className="tw-mt-20 tw-max-w-sm">
            <p className="tw-text-lg">
              How many years of experience do you have in teaching Data Analysis
              online?
            </p>
            <div className="tw-py-8">
              <div class="form-check tw-border-2 tw-py-4 tw-rounded-md tw-border-gray tw-mb-4">
                <input
                  class="form-check-input mx-1"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  0-2
                </label>
              </div>
              <div class="form-check tw-border-2 tw-py-4 tw-rounded-md tw-border-gray tw-mb-4">
                <input
                  class="form-check-input mx-1"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  2-5
                </label>
              </div>
              <div class="form-check tw-border-2 tw-py-4 tw-rounded-md tw-border-gray tw-mb-4">
                <input
                  class="form-check-input mx-1"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  5-8
                </label>
              </div>
              <div class="form-check tw-border-2 tw-py-4 tw-rounded-md tw-border-gray tw-mb-4">
                <input
                  class="form-check-input mx-1"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  9+
                </label>
              </div>
            </div>
          </div>

          <div className="tw-mt-20">
            <p>
              Didn't receive OTP?{" "}
              <span className="tw-text-main">Resend OTP</span> or{" "}
              <span className="tw-text-main">change emeial address</span>
            </p>
          </div>
        </div>
        <div>
          <img src={require("../assets/otp.png")} alt="" className="mx-auto" />
        </div>
      </div>
      <div className="tw-mt-14 tw-flex tw-justify-between">
        <button
          className="btn btn-outline-primary tw-h-12 tw-text-xl"
          onClick={goToExperience}
        >
          Previous
        </button>
        <button
          className="btn btn-primary tw-h-12 tw-text-xl"
          onClick={goToResume}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Experience;
