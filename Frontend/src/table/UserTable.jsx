import React from "react";
import { CreateUser } from "../component/CreateUser";
import {  Edituser } from "../component/Edituser";
import { Deleteuser } from "../component/Deleteuser";

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
        <td className="d-flex justify-content-center gap-3 ">
        <Edituser/>
         <Deleteuser/>
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </>
  );
};
