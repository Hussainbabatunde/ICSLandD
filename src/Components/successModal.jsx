const SuccessModal = ({ message, image }) => {
  return (
    <div
      class="modal fade"
      id="successModal"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="">
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
            <img
              src={require(`../assets/${image || "success-icon.png"}`)}
              alt=""
              className="mx-auto"
            />
            <p className="tw-text-center tw-text-text tw-opacity-80 tw-w-60 tw-mx-auto tw-mt-4">
              {message || "New course has been added successfully"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
