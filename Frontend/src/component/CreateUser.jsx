import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const CreateUser = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handlechange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log("changing");
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    try {
      const adduser = await axios.post("http://localhost:5000/api/create", value);
      const res = adduser.data;
      if (res.success) {
        toast.success(res.message || "User added successfully!"); // Corrected toast message
        setValue({ name: "", email: "", phone: "" }); // Reset form after successful submission
      } else {
        toast.error(res.message || "Something went wrong!");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error("Failed to add user. Try again!");
    }
  };

  return (
    <>
      <div className="gradient-bg rounded d-flex justify-content-between align-items-center px-2">
        <h1 className="text-white">
          Manage <span className="fw-bold">Employees</span>{" "}
        </h1>

        <button
          type="button"
          className="btn my-2 btn-success text-white fs-4"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          <i className="bi bi-plus-circle fs-3"></i> Add Employee
        </button>

        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Employee
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handlesubmit}>
                  <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label"> Name </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={handlechange}
                        value={value.name}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label"> Email </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        onChange={handlechange}
                        value={value.email}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label"> Phone </label>
                    <div className="col-sm-10">
                      <input
                        type="number"
                        className="form-control"
                        name="phone"
                        onChange={handlechange}
                        value={value.phone}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary"data-bs-dismiss="modal">
                      Add user
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
