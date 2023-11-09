import React, { useContext, useEffect, useState } from "react";
import ProfileImg from "../assets/profile.png";
import Email from "../assets/email.png";
import Phone from "../assets/phone.png";
import Edit from "../assets/edit.png";
import Done from "../assets/done.gif";
import Show from "../assets/show.png";
import Hide from "../assets/hide.png";
import Email2 from "../assets/email2.png";
import Phone2 from "../assets/phone2.png";
import { GlobalState } from "../Data/Context";
import { ModalComponents } from "../Components/DefaultHeader";
import { Buttons } from "../Utils";
import { toast } from "react-toastify";
import { BsImage } from "react-icons/bs";
import Performancebg from "../assets/performance.png";
import Gif from "../assets/coffetti.gif";

const Settings = () => {
  const { auth } = useContext(GlobalState);
  const [modal, setModal] = useState("");
  // const coursesInfo = [
  //   {
  //     id: 1,
  //     info: "courses enrolled in",
  //     amount: "10",
  //   },
  //   {
  //     id: 2,
  //     info: "courses completed",
  //     amount: "6",
  //   },
  //   {
  //     id: 3,
  //     info: "in progress",
  //     amount: "4",
  //   },
  // ];
  // const progressList = [
  //   {
  //     id: 1,
  //     courses: "Data management",
  //     progress: "5 of 12",
  //   },
  //   {
  //     id: 2,
  //     courses: "business analyst",
  //     progress: "5 of 12",
  //   },
  //   {
  //     id: 3,
  //     courses: "data science",
  //     progress: "5 of 12",
  //   },
  //   {
  //     id: 4,
  //     courses: "soft skills",
  //     progress: "5 of 12",
  //   },
  // ];
  return (
		<div>
			<div
				style={{
					boxShadow: "0px 10px 10px -10px rgba(15, 11, 199, 0.25)",
				}}
				className="lg:tw-w-11/12 tw-bg-white lg:tw-p-6 tw-p-2 tw-rounded-lg">
				<div className="tw-border-2 tw-h-full tw-w-full">
					<div
						style={{
							border: "1px solid rgba(15, 11, 199, 0.5)",
						}}
						className="tw-flex lg:tw-flex-col tw-flex-row lg:tw-h-24 tw-items-center tw-px-6 tw-justify-center lg:tw-justify-between">
						<div>
							<h5 className="tw-text-xl tw-text-black tw-font-normal tw-uppercase">
								{auth?.user?.firstName} {auth?.user?.lastName}
							</h5>
							<p className="tw-text-base lg:tw-text-center tw-font-semibold tw-text-[#069383] tw-capitalize">
								View Rank/Performance
							</p>
						</div>
						<div onClick={() => setModal("editprofile")} className="">
							<img src={Edit} alt="" className="tw-cursor-pointer" />
						</div>
					</div>
					<div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-8 lg:tw-h-80 tw-p-6">
						<div className="h-full lg:tw-w-[70%] tw-space-y-6">
							<div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-center lg:tw-justify-between lg:tw-h-12 tw-items-center">
								<h6 className="tw-text-xl tw-font-normal tw-text-[#272727] tw-capitalize">
									account name:
								</h6>
								<input
									type="text"
									className="tw-bg-white tw-w-80 tw-h-12 tw-mt-4 lg:tw-mt-0 tw-rounded-lg tw-text-base tw-font-normal tw-text-[#454545] tw-capitalize tw-pl-6"
									style={{
										border: "2px solid #F0F0F0",
									}}
									value={`${auth?.user?.firstName} ${auth?.user?.lastName}`}
								/>
							</div>
							<div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-h-12 tw-items-center">
								<h6 className="tw-text-xl tw-font-normal tw-text-[#272727] tw-capitalize">
									password:
								</h6>
								<button
									type="button"
									className="tw-rounded-xl tw-h-full tw-border-[#BEBEBE] tw-border-2  tw-text-sm tw-text-[#BEBEBE] tw-font-bold py-3 text-capitalize tw-bg-white tw-relative tw-flex tw-gap-6 tw-items-center tw-w-80 tw-h-12 tw-rounded-lg tw-text-base tw-font-normal tw-text-[#454545] tw-capitalize tw-px-6"
									onClick={() => setModal("editpassword")}>
									update password
								</button>
							</div>
							<div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-h-12 tw-items-center">
								<h6 className="lg:tw-text-xl tw-font-normal tw-text-[#272727] tw-capitalize">
									email address:
								</h6>
								<div
									className="tw-bg-white tw-relative tw-flex tw-gap-6 tw-items-center tw-w-80 tw-h-12 tw-rounded-lg tw-text-base tw-font-normal tw-text-[#454545] tw-capitalize tw-px-6"
									style={{
										border: "2px solid #F0F0F0",
									}}>
									<img src={Email2} alt="" className="" />
									<input
										type="text"
										className="tw-h-full tw-border-none tw-w-full"
										value={auth?.user?.email}
									/>
								</div>
							</div>
							<div className="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-h-12 tw-items-center">
								<h6 className="tw-text-xl tw-font-normal tw-text-[#272727] tw-capitalize">
									Mobile number:
								</h6>
								<div
									className="tw-bg-white tw-relative tw-flex tw-gap-6 tw-items-center tw-w-80 tw-h-12 tw-rounded-lg tw-text-base tw-font-normal tw-text-[#454545] tw-capitalize tw-px-6"
									style={{
										border: "2px solid #F0F0F0",
									}}>
									<img src={Phone2} alt="" className="" />
									<input
										type="text"
										className="tw-h-full tw-border-none tw-w-full"
										value={auth?.user?.telephone}
									/>
								</div>
							</div>
						</div>
						<div className="h-full lg:tw-w-[30%]">
							<img
								src={auth?.user?.avatar?.url || ProfileImg}
								alt=""
								className="tw-h-full myCursor"
								onClick={() => setModal("picture")}
							/>
						</div>
					</div>
					<div className="tw-h-32 tw-w-full tw-bg-white tw-px-12 tw-pt-4 tw-border-t tw-border-[#0f0bc7]">
						{/* <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-4">
              <h6 className="tw-text-base tw-font-normal segoe tw-text-[#1b1b1b]">
                CURRENT PLAN{" "}
                <span className="tw-text-[#0f0bc7] tw-font-normal tw-text-base">
                  TechLite
                </span>
              </h6>
              <button
                style={{
                  background:
                    "linear-gradient(90.18deg, #FFC700 -52.19%, #FDCB53 81.92%)",
                }}
                className="tw-rounded-xl tw-h-7 tw-w-24 Source tw-text-sm tw-font-normal tw-text-[#1b1b1b]"
              >
                Upgrade Plan
              </button>
            </div> */}
					</div>
				</div>
			</div>
			{modal === "editcard" ? (
				<EditCardModal
					handleSave={() => setModal("done")}
					handleCancel={() => setModal("")}
				/>
			) : null}
			{modal === "editprofile" ? (
				<EditProfileModal
					toggle={() => setModal("")}
					isOpen={modal === "editprofile"}
				/>
			) : null}
			{modal === "editpassword" ? (
				<UpdatePass
					toggle={() => setModal("")}
					isOpen={modal === "editpassword"}
				/>
			) : null}
			{modal === "picture" ? (
				<UpdateProfilePicture
					toggle={() => setModal("")}
					isOpen={modal === "picture"}
				/>
			) : null}
			{modal === "done" ? <DoneModal handleClose={() => setModal("")} /> : null}
			<ViewPoints />
		</div>
	);
};

const EditCardModal = ({ handleSave, handleCancel }) => {
  return (
    <div className="">
      <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-justify-center tw-items-center">
        <div className="tw-p-6 tw-w-96 tw-bg-white">
          <h6 className="tw-text-base tw-font-bold tw-text-center">
            Enter Card Details
          </h6>
          <fieldset className="tw-w-full tw-border-2 tw-mt-4 tw-px-3">
            <legend className="tw-text-base tw-font-bold">Card Details</legend>
            <form className="">
              <label htmlFor="cardnumber" className="tw-text-sm tw-font-normal">
                Card Number
              </label>
              <input
                type="text"
                className="tw-w-full tw-h-12 tw-border-2 tw-pl-4 tw-rounded-md tw-text-sm tw-font-normal tw-text-[#3c4852] tw-mt-4"
                name="email"
                placeholder="XXXX XXXX XXXX XXXX"
              />
              <div className="tw-flex tw-gap-4 tw-mt-4">
                <div className="">
                  <label className="tw-text-sm tw-font-normal">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="tw-border-2 tw-h-12 tw-rounded-md tw-w-full tw-pl-2 tw-text-sm tw-font-normal tw-text-[#3c4852]"
                    placeholder="XX/XX"
                  />
                </div>
                <div className="t">
                  <label className="tw-text-sm tw-font-normal">CVV</label>
                  <input
                    type="text"
                    className="tw-border-2 tw-h-12 tw-rounded-md tw-w-full tw-pl-2 tw-text-sm tw-font-normal tw-text-[#3c4852]"
                    placeholder="XXX"
                  />
                </div>
              </div>
            </form>
          </fieldset>
          <div className="tw-w-5/6 tw-mt-6 tw-mx-auto tw-h-10 tw-grid tw-grid-cols-2 tw-gap-4">
            <button
              onClick={handleSave}
              className="tw-rounded-xl tw-h-full tw-bg-[#0F0BC7] tw-text-sm tw-text-white tw-font-bold"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="tw-rounded-xl tw-h-full tw-border-[#0F0BC7] tw-border-2  tw-text-sm tw-text-[#0f0bc7] tw-font-bold"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const EditProfileModal = ({ isOpen, toggle }) => {
  let { auth, updateUser } = useContext(GlobalState),
    [state, setState] = useState(auth?.user),
    [loading, setLoading] = useState(false),
    [submit, setSubmit] = useState(false),
    textChange =
      (name) =>
      ({ target: { value } }) => {
        setState({ ...state, [name]: value });
      },
    handleSubmit = async (e) => {
      setLoading(true);
      await updateUser(state);
      setLoading(false);
      setSubmit(true);
    };

  useEffect(() => {
    if (submit && auth?.isUpdated) {
      toggle();
      setSubmit(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit, auth?.isUpdated]);
  return (
		<ModalComponents isOpen={isOpen} toggle={toggle} title={"Edit Profile"}>
			<form className="" onSubmit={handleSubmit}>
				<label htmlFor="cardnumber" className="tw-text-sm tw-font-normal">
					Last Name
				</label>
				<input
					type="text"
					className="tw-w-full tw-h-12 tw-border-2 tw-pl-4 tw-rounded-md tw-text-sm tw-font-normal tw-text-[#3c4852]"
					name="email"
					placeholder="Full Name"
					value={state?.lastName}
					onChange={textChange("lastName")}
				/>
				<div className="tw-mt-2">
					<label htmlFor="cardnumber" className="tw-text-sm tw-font-normal">
						First Name
					</label>
					<input
						type="text"
						className="tw-w-full tw-h-12 tw-border-2 tw-pl-4 tw-rounded-md tw-text-sm tw-font-normal tw-text-[#3c4852]"
						name="email"
						placeholder="Full Name"
						value={state?.firstName}
						onChange={textChange("firstName")}
					/>
				</div>

				<div className="tw-mt-2">
					<label className="tw-text-sm tw-font-normal">Gender</label>
					<input
						value={state?.gender}
						onChange={textChange("gender")}
						type="text"
						className="tw-border-2 tw-h-12 tw-rounded-md tw-w-full tw-pl-2 tw-text-sm tw-font-normal tw-text-[#3c4852]"
						placeholder="Male"
					/>
				</div>
				<div className="tw-mt-2">
					<label className="tw-text-sm tw-font-normal">Phone Number</label>
					<input
						value={state?.telephone}
						onChange={textChange("telephone")}
						type="tel"
						className="tw-border-2 tw-h-12 tw-rounded-md tw-w-full tw-pl-2 tw-text-sm tw-font-normal tw-text-[#3c4852]"
						placeholder="XXXX-XXX-XXXX"
					/>
				</div>
				<div className="tw-mt-2">
					<label className="tw-text-sm tw-font-normal">Bio</label>
					<textarea
						value={state?.bio}
						onChange={textChange("bio")}
						className="tw-border-2 tw-h-12 tw-rounded-md tw-w-full tw-pl-2 tw-text-sm tw-font-normal tw-text-[#3c4852]"
						style={{ resize: "none", height: "10rem" }}
						placeholder="Brief intro about you"
					/>
				</div>

				{/* <div className="tw-h-40 tw-w-full tw-border-dashed tw-border-2 tw-mt-4"></div> */}
				<div className="tw-w-5/6 tw-mt-6 tw-mx-auto tw-h-10 tw-grid tw-grid-cols-2 tw-gap-4">
					{/* <button
						onClick={handleSubmit}
						className="tw-rounded-xl tw-h-full tw-bg-[#0F0BC7] tw-text-sm tw-text-white tw-font-bold">
						Save
					</button> */}
					<Buttons
						loading={loading}
						onClick={handleSubmit}
						title={"save"}
						css={
							"tw-rounded-xl text-capitalize tw-h-full hover:tw-bg-[#0F0BC7] tw-bg-[#0F0BC7] tw-text-sm tw-text-white hover:tw-text-white tw-font-bold"
						}
					/>
					<button
						onClick={toggle}
						className="tw-rounded-xl tw-h-full tw-border-[#0F0BC7] tw-border-2  tw-text-sm tw-text-[#0f0bc7] tw-font-bold">
						Cancel
					</button>
				</div>
			</form>
		</ModalComponents>
	);
};
const DoneModal = ({ handleClose }) => {
  return (
    <div className="">
      <div
        onClick={handleClose}
        className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-30 tw-flex tw-justify-center tw-items-center"
      >
        <div className="tw-p-6 tw-w-96 tw-bg-white">
          <img src={Done} alt="" className="tw-mx-auto tw-h-64 tw-w-5/6" />
          <h6 className="tw-pt-4 tw-text-xl tw-font-normal tw-text-[#1b1b1b] tw-uppercase tw-text-center">
            done!
          </h6>
        </div>
      </div>
    </div>
  );
};
export const Junk = () => {
  return (
    <div className="tw-flex tw-gap-8 tw-h-full tw-items-center">
      <img src={ProfileImg} alt="" className="" />
      <div className="">
        <div className="tw-border-b tw-w-full tw-border-b-[#898A93] tw-pb-4">
          <h5 className="tw-text-xl tw-text-black tw-font-normal tw-uppercase">
            debbie a adeoye
          </h5>
          <p className="tw-text-base tw-font-semibold tw-text-[#069383] tw-capitalize">
            View Rank/Performance
          </p>
          <div className="tw-flex tw-gap-8 tw-mt-6">
            <div className="tw-flex tw-gap-2">
              <img src={Email} alt="" className="" />
              <p className="tw-text-base tw-font-normal tw-text-black">
                debbieadeoye@gmail.com
              </p>
            </div>
            <div className="tw-flex tw-gap-2 ">
              <img src={Phone} alt="" className="" />
              <p className="tw-text-base tw-font-normal tw-text-black">
                +234 900 111 22222
              </p>
            </div>
          </div>
        </div>
        <div className="tw-mt-8 tw-flex tw-gap-8"></div>
      </div>
    </div>
  );
};

export const UpdatePass = ({ isOpen, toggle }) => {
  let { auth, updatePassword } = useContext(GlobalState),
    init = { oldPassword: "", newPassword: "" },
    [state, setState] = useState(init),
    [loading, setLoading] = useState(false),
    [submit, setSubmit] = useState(false),
    textChange =
      (name) =>
      ({ target: { value } }) => {
        setState({ ...state, [name]: value });
      },
    handleSubmit = async (e) => {
      setLoading(true);
      await updatePassword(state);
      setLoading(false);
      setSubmit(true);
    };
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  useEffect(() => {
    if (submit && auth?.isPassword) {
      toggle();
      setState(init);
      setSubmit(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit, auth?.isPassword]);
  return (
    <ModalComponents isOpen={isOpen} toggle={toggle} title={"Update Password"}>
      <form className="" onSubmit={handleSubmit}>
        <label htmlFor="cardnumber" className="tw-text-sm tw-font-normal">
          Old Password
        </label>
        <div
          className="tw-bg-white tw-relative tw-flex tw-justify-between tw-items-center tw-w-full tw-h-12 tw-rounded-lg tw-text-base tw-font-normal tw-text-[#454545] tw-capitalize tw-px-6"
          style={{
            border: "2px solid #F0F0F0",
          }}
        >
          <input
            placeholder="Old password"
            value={state?.oldPassword}
            onChange={textChange("oldPassword")}
            type={showPassword ? "text" : "password"}
            className="tw-h-full tw-w-5/6 tw-border-none"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="tw-cursor-pointer"
          >
            {showPassword ? (
              <img src={Hide} alt="" className="tw-h-5" />
            ) : (
              <img src={Show} alt="" className="tw-h-5" />
            )}
          </div>
        </div>
        <div className="tw-mt-2">
          <label htmlFor="cardnumber" className="tw-text-sm tw-font-normal">
            New Password
          </label>
          <div
            className="tw-bg-white tw-relative tw-flex tw-justify-between tw-items-center tw-w-full tw-h-12 tw-rounded-lg tw-text-base tw-font-normal tw-text-[#454545] tw-capitalize tw-px-6"
            style={{
              border: "2px solid #F0F0F0",
            }}
          >
            <input
              placeholder="New password"
              value={state?.newPassword}
              onChange={textChange("newPassword")}
              type={showPassword2 ? "text" : "password"}
              className="tw-h-full tw-w-5/6 tw-border-none"
            />
            <div
              onClick={() => setShowPassword2(!showPassword2)}
              className="tw-cursor-pointer"
            >
              {showPassword2 ? (
                <img src={Hide} alt="" className="tw-h-5" />
              ) : (
                <img src={Show} alt="" className="tw-h-5" />
              )}
            </div>
          </div>
        </div>
        <div className="tw-w-5/6 tw-mt-6 tw-mx-auto tw-h-10 tw-grid tw-grid-cols-2 tw-gap-4">
          {/* <button
						onClick={handleSubmit}
						className="tw-rounded-xl tw-h-full tw-bg-[#0F0BC7] tw-text-sm tw-text-white tw-font-bold">
						Save
					</button> */}
          <Buttons
            loading={loading}
            onClick={handleSubmit}
            title={"save"}
            css={
              "tw-rounded-xl text-capitalize tw-h-full hover:tw-bg-[#0F0BC7] tw-bg-[#0F0BC7] tw-text-sm tw-text-white hover:tw-text-white tw-font-bold"
            }
          />
          <button
            onClick={toggle}
            className="tw-rounded-xl tw-h-full tw-border-[#0F0BC7] tw-border-2  tw-text-sm tw-text-[#0f0bc7] tw-font-bold"
          >
            Cancel
          </button>
        </div>
      </form>
    </ModalComponents>
  );
};

export const UpdateProfilePicture = ({ isOpen, toggle }) => {
  let { auth, updateUser } = useContext(GlobalState),
    [state, setState] = useState(null),
    [loading, setLoading] = useState(false),
    [submit, setSubmit] = useState(false);

  let [logo, setLogo] = useState(false);

  useEffect(() => {
    setState(auth?.user);
  }, [auth?.user]);

  let handleChangeImage = (e) => {
      const file = e.target.files[0];
      let err = "";

      if (!file) return (err = `File, ${file?.name} does not exist`);
      if (!file.type.includes("image"))
        return (err = `File, ${file?.name} format not supported`);

      if (err) {
        return toast.error(err);
      } else {
        setLogo(file);
      }
    },
    handleSubmit = (type) => async (e) => {
      if (e) e.preventDefault();
      if (!logo) return toast.info("Image required", { auth: 10000 });
      setLoading(true);
      await updateUser({ logo }, "profile-image");
      setLoading(false);
    };

  useEffect(() => {
    if (submit && auth?.isUpdated) {
      toggle();
      setSubmit(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit, auth?.isUpdated]);
  return (
    <ModalComponents
      isOpen={isOpen}
      toggle={toggle}
      title="Update profile image"
    >
      <div className="d-flex">
        <div className="mx-auto position-relative">
          <img
            src={
              logo
                ? URL.createObjectURL(logo)
                : state?.avatar?.url
                ? state?.avatar.url
                : ProfileImg
            }
            alt={state?.firstName}
            style={{
              height: "15rem",
              width: "15rem",
            }}
            className="rounded-circle img-fluid mx-auto"
          />
          <div className="file_upload d-flex myCursor mt-auto ms-auto justify-content-end">
            <BsImage
              size={22}
              title="Upload image"
              className="mx-2 myCursor statusIcon"
            />
            <input
              title="Upload file"
              type="file"
              name="file"
              id="file"
              multiple
              className="myCursor"
              accept="image/*"
              onChange={handleChangeImage}
            />
          </div>
          {logo && (
            <Buttons
              onClick={handleSubmit("profile-image")}
              loading={logo && loading}
              css={
                "tw-rounded-xl text-capitalize hover:tw-bg-[#0F0BC7] tw-bg-[#0F0BC7] tw-text-sm tw-text-white hover:tw-text-white text-white py-3 tw-font-bold"
              }
              title={"Update profile image"}
            />
          )}
        </div>
      </div>
    </ModalComponents>
  );
};
const ViewPoints = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${Performancebg})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
        className="tw-cursor-pointer tw-mt-10 tw-h-28 tw-w-96 tw-mx-auto tw-flex tw-items-center tw-justify-center"
      >
        <p
          style={{
            background: `url(${Gif})`,
          }}
          className="tw-text-xl tw-font-normal tw-text-white tw-text-center Rashkey"
        >
          VIEW YOUR <br />
          PERFORMANCE!
        </p>
      </div>
    </div>
  );
};
export default Settings;
