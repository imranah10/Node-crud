import React from "react";

export const Edituser = () => {
  return (
    <>
      <button
        type="button"
        class="btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className=" bi bi-pencil text-primary fs-5"></i>
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit User
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="modal-body">
                <div class="mb-3 row">
                  <label for="Name" class="col-sm-2 col-form-label">
                    Name
                  </label>
                  <div class="col-sm-10">
                    <input
                      type="text"
                      readonly
                      class="form-control"
                      id="Name"
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="Email" class="col-sm-2 col-form-label">
                    Email
                  </label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="Email" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="Phone" class="col-sm-2 col-form-label">
                    Phone
                  </label>
                  <div class="col-sm-10">
                    <input type="number" class="form-control" id="Number" />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
