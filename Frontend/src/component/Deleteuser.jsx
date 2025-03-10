import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const Deleteuser = ({ userId, refresh }) => {
  const handleDelete = async () => {
    toast.dismiss(); //

    try {
      const { data } = await axios.delete(
        `http://localhost:5000/api/delete/${userId}`
      );

      if (data.success) {
        toast.success("User deleted successfully!", { duration: 2000 });
        refresh(); // Table refresh
      } else {
        toast.error("Failed to delete user!", { duration: 2000 });
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong! Try again.", { duration: 2000 });
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn"
        data-bs-toggle="modal"
        data-bs-target={`#deleteModal${userId}`}
      >
        <i className="bi bi-trash3 text-danger fs-5"></i>
      </button>

      <div
        className="modal fade"
        id={`deleteModal${userId}`}
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Delete user</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <p className="fs-4">
                Are you sure you want to delete this record?
              </p>
              <p className="text-warning fs-5">This action cannot be undone</p>
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
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
