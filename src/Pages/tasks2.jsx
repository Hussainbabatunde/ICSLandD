import React from "react";
import { useState } from "react";
import image from "../assets/avatar3.png";
import moment from "moment";
import { BsTrash, BsPen, BsCheck } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  let tabViews = ["all", "submitted"],
    [active, setActive] = useState("all");
  return (
    <div className="p-3 py-5 bg-white rounded">
      <div className="d-flex align-items-center pb-4">
        {tabViews?.map((item, i) => (
          <div
            key={i}
            onClick={() => setActive(item)}
            className={`btn rounded-0 text-capitalize fw-bold ${
              active === item
                ? "border-width-4-color border-width-4-2 tw-text-xl tw-font-bold"
                : "text-muted tw-font-normal"
            }`}
          >
            {item?.replace("-", " ")} tasks
          </div>
        ))}
      </div>
      <div className="" style={{ minHeight: "40vh" }}>
        {active === "submitted" ? <Submitted /> : <All />}
      </div>
    </div>
  );
};

export default Tasks;

const Submitted = () => {
  let submitted = [
    {
      course: "Data Analysis",
      tutor: "Debbie Adeoye",
      task: "Task",
      due: moment().subtract(15, "days"),
      submission: moment().subtract(10, "days"),
      minimum: "70",
      score: 80,
    },
    {
      course: "Data Analysis",
      tutor: "Debbie Adeoye",
      task: "Task",
      due: moment().subtract(25, "days"),
      submission: moment().subtract(20, "days"),
      minimum: "70",
      score: 80,
    },
    {
      course: "Data Analysis",
      tutor: "Debbie Adeoye",
      task: "Task",
      due: moment().subtract(10, "days"),
      submission: moment().subtract(10, "days"),
      minimum: "70",
      score: 50,
    },
    {
      course: "Data Analysis",
      tutor: "Debbie Adeoye",
      task: "Task",
      due: moment().subtract(7, "days"),
      submission: moment().subtract(12, "days"),
      minimum: "70",
      score: 80,
    },
  ];
  return (
    <>
      <div className="d-none d-md-flex row mx-0 py-3 px-0 text-capitalize bg-light">
        <div className="col textTrunc  fontReduce fw-bold Lexend">
          course name
        </div>
        <div className="col textTrunc fontReduce fw-bold Lexend">
          tutor name
        </div>
        <div className="col textTrunc fontReduce fw-bold Lexend">task</div>
        <div className="col textTrunc fontReduce fw-bold Lexend">due date</div>
        <div className="col textTrunc fontReduce fw-bold Lexend">
          submission date
        </div>
        <div className="col textTrunc fontReduce fw-bold Lexend">
          minimum score
        </div>
        <div className="col textTrunc fontReduce fw-bold Lexend">
          your score
        </div>
        <div className="col textTrunc fontReduce fw-bold Lexend">status</div>
        <div className="col textTrunc fontReduce fw-bold Lexend">action</div>
      </div>
      <div className="row mx-0 g-4 py-4">
        {submitted?.map((item, i) => (
          <div
            key={i}
            className={`d-block d-md-flex row mx-0 py-3 border-bottom px-0 ${
              i % 2 !== 0 ? "bg-light" : ""
            }`}
          >
            <div className="col textTrunc my-auto d-flex tw-text-base tw-whitespace-nowrap fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0">
              <span className="fontReduce d-md-none Lexend tw-text-sm">
                course name:
              </span>
              {item?.course}
            </div>
            <div className="col textTrunc my-auto d-flex fontReduceMini tw-text-base tw-whitespace-nowrap myCursor align-items-center justify-content-between py-1 py-md-0">
              <span className="fontReduce d-md-none Lexend">tutor name:</span>

              {item?.tutor}
            </div>
            <div className="col textTrunc my-auto d-flex fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0">
              <span className="fontReduce d-md-none Lexend">task:</span>

              {item?.task}
            </div>
            <div className="col textTrunc my-auto d-flex fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0">
              <span className="fontReduce d-md-none Lexend">Due:</span>
              {moment(item?.due).format("DD-MMM-YYYY")}
            </div>
            <div className="col textTrunc my-auto d-flex fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0">
              <span className="fontReduce d-md-none Lexend">Submission:</span>
              {moment(item?.submission).format("DD-MMM-YYYY")}
            </div>
            <div className="col textTrunc my-auto d-flex fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0">
              <span className="fontReduce d-md-none Lexend">minimum:</span>
              {item?.minimum}
            </div>
            <div className="col textTrunc my-auto d-flex fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0">
              <span className="fontReduce d-md-none Lexend">score:</span>
              {item?.score}/100
            </div>
            <div className="col textTrunc my-auto d-flex fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0 textTrunc2">
              <span className="fontReduce d-md-none Lexend">status:</span>
              <span
                className={`${
                  Number(item?.minimum) < Number(item?.score)
                    ? "text-success"
                    : "text-danger"
                } text-capitalize`}
              >
                {Number(item?.minimum) > Number(item?.score) ? (
                  <>
                    <FaTimes /> fail
                  </>
                ) : (
                  <>
                    <BsCheck /> pass
                  </>
                )}
              </span>
            </div>
            <div className="col textTrunc my-auto d-flex fontReduceMini myCursor align-items-center justify-content-between py-1 py-md-0 textTrunc2">
              <span>
                <BsPen className="mx-1" />
                <BsTrash className="mx-1" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const All = () => {
  let tasksArr = [
    {
      image,
      title: "Title",
      user: {
        name: "Tutor Name",
      },
      task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
    },
    {
      image,
      title: "Title",
      user: {
        name: "Tutor Name",
      },
      task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
    },
    {
      image,
      title: "Title",
      user: {
        name: "Tutor Name",
      },
      task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
    },
    {
      image,
      title: "Title",
      user: {
        name: "Tutor Name",
      },
      task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
    },
    {
      image,
      title: "Title",
      user: {
        name: "Tutor Name",
      },
      task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
    },
    {
      image,
      title: "Title",
      user: {
        name: "Tutor Name",
      },
      task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
    },
    {
      image,
      title: "Title",
      user: {
        name: "Tutor Name",
      },
      task: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptas eligendi accusantium amet reiciendis perferendis mollitia, soluta laboriosam dignissimos commodi doloremque quidem aperiam eveniet. Recusandae, accusamus. Ullam, nulla officia illo velit mollitia repudiandae atque corrupti molestiae fuga. Omnis veniam tenetur molestias? Autem, sint sequi itaque odit commodi voluptates rem sit.`,
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      {tasksArr?.map((item, i) => (
        <div className="py-2" key={i}>
          <p className="tw-text-sm tw-font-medium tw-text-black pb-2">
            Recent Task
          </p>
          <div className="py-2 row mx-0 g-3" key={i}>
            <div className="col-1">
              <img
                src={item?.image}
                alt={item?.title}
                className="img-fluid rounded-circle"
                style={{
                  width: "3rem",
                  height: "3rem",
                }}
              />
            </div>
            <div className="col-11">
              <div className="d-flex align-items-center justify-content-between py-2">
                <div>
                  <h5 className="fw-bold">Uploaded by {item?.user?.name}</h5>
                  <div className="tw-flex tw-gap-32 tw-mt-4">
                    <h6 className="tw-text-sm tw-font-normal tw-text-black">
                      {item?.title}{" "}
                    </h6>
                    <span className="ps-md-5 tw-text-sm tw-font-normal tw-text-black">
                      {moment().fromNow()}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/tasks/${i}`)}
                  className="btn text-main text-capitalize fw-bold"
                >
                  go to task
                </button>
              </div>
              <p className="tw-text-[12px] tw-font-normal tw-text-black">
                {item?.task}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
