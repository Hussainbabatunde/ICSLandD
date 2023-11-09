import { useNavigate } from "react-router-dom";
import SuccessModal from "../Components/successModal";


const Resume = () => {
  const navigate = useNavigate();
  const goToExperience = () => {
    navigate("/experience");
  };
  return (
    <div className="container tw-py-20">
      <div className="tw-grid md:tw-grid-cols-2 tw-gap-12">
        <div>
          <p className="tw-text-2xl fw-bold tw-mb-2">Upload Resume/CV</p>
          <p className="tw-text-xl tw-text-text">
            Lorem ipsum dolor sit amet consectetur. Commodo condimentum in non
            nullam tellus lacus dignissim in. Mi vestibulum ultrices rhoncus
            sagittis. Ac turpis auctor turpis felis eu. Magna donec dignissim
            libero a mattis eu. Turpis id sed mauris pulvinar consectetur
            euismod habitant. In odio id in adipiscing. Nisl vestibulum ipsum.
          </p>
          <div className="tw-mt-10">
            <p className="tw-text-2xl fw-bold tw-mb-2">Upload CV</p>
            <p className="tw-text-text tw-text-xs">(must be in docs or pdf)</p>

            <div className="tw-mt-4">
              <input
                type="email"
                class="form-control tw-h-12 rounded-0"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div class="input-group mb-3 tw-h-12 tw-mt-8 rounded-0">
                <input
                  type="file"
                  class="form-control"
                  id="inputGroupFile02 rounded-0"
                />
                <label
                  class="input-group-text tw-px-8"
                  for="inputGroupFile02 rounded-0"
                >
                  Upload
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={require("../assets/otp.png")} alt="" className="mx-auto" />
        </div>
      </div>
      <div className="tw-mt-20 tw-flex tw-justify-between">
        <button
          className="btn btn-outline-primary tw-mt-14 tw-h-12 tw-text-xl"
          onClick={goToExperience}
        >
          Previous
        </button>
        <button
          className="btn btn-primary tw-mt-14 tw-h-12 tw-text-xl"
          data-bs-target="#successModal"
          data-bs-toggle="modal"
        >
          next
        </button>
      </div>
      <SuccessModal />
    </div>
  );
};

export default Resume;
