import React from "react";
import { CreateUser } from "../component/CreateUser";

export const UserTable = () => {
  return (
    <>
      <CreateUser />
      <div>
  <table className="table table-bordered text-center align-middle">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="table-secondary">
      <tr>
        <td>John Doe</td>
        <td>john.doe@example.com</td>
        <td>123-456-7890</td>
        <td className="d-flex justify-content-center gap-3">
          <i className=" bi bi-pencil text-primary fs-5"></i>
          <i className="bi bi-trash3 text-danger fs-5"></i>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </>
  );
};
