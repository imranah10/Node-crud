import React from "react";

export const CreateUser = () => {
  return (
    <>
      <div className="gradient-bg rounded d-flex justify-content-between align-items-center px-2">
        <h1 className="text-white">
          Manage <span className="fw-bold">Employees</span>{" "}
        </h1>

        <button
          type="button"
          class="btn my-2 btn-success text-white fs-4"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          <i className="bi bi-plus-circle fs-3"></i> Add Employee
        </button>

        <div
          class="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Add Employee
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
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
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" class="btn btn-primary">
                Add user
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
