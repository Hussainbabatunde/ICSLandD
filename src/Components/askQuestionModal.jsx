const AskQuestionModal = () => {
  return (
    <div
      class="modal fade rounded-0 tw-p-4"
      id="askQuestionModal"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content tw-p-4">
          <div class="modal-head tw-flex tw-items-end tw-justify-between">
            <p className="tw-font-bold tw-text-2xl">Ask a question</p>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              X
            </button>
          </div>
          <div class="modal-body">
            <textarea
              rows="7"
              className="border tw-w-full tw-rounded tw-bg-[#F5F5FF] p-4"
              placeholder="Write Message"
            ></textarea>
            <div className="tw-flex tw-mt-4">
                <button className="btn btn-outline-primary tw-text-xl tw-ml-auto" data-bs-target="#successModal"
              data-bs-toggle="modal">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskQuestionModal;
