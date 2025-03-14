import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const Edituser = ({ user, refresh }) => {
  const [value, setValue] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
  });

  const handlechange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    toast.dismiss(); //

    try {
      const { data } = await axios.put(
        `https://node-crud-mr63.onrender.com/api/update/${user._id}`,
        value
      );

      if (data.success) {
        toast.success("User updated successfully!", { duration: 2000 });
        refresh(); // Table refresh
      } else {
        toast.error("Failed to update user!", { duration: 2000 });
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Something went wrong! Try again.", { duration: 2000 });
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target={`#editModal${user._id}`}
      >
        <i className="bi bi-pencil text-primary fs-5"></i>
      </button>

      <div
        className="modal fade"
        id={`editModal${user._id}`}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Edit User</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
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
                      value={value.name}
                      onChange={handlechange}
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
                      value={value.email}
                      onChange={handlechange}
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
                      value={value.phone}
                      onChange={handlechange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
