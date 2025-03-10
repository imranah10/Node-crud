import React, { useEffect, useState } from "react";
import { CreateUser } from "../component/CreateUser";
import { Edituser } from "../component/Edituser";
import { Deleteuser } from "../component/Deleteuser";
import axios from "axios";

export const UserTable = () => {
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const fetchuser = await axios.get("http://localhost:5000/api/get");
      setData(fetchuser.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [data]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-white fw-bold bg-dark py-3 rounded">
        User Management - Node.js CRUD App
      </h2>

      <div className="card shadow-lg border-0" style={{ backgroundColor: "#6A0572", color: "#fff" }}>
        <div className="card-body">
          <CreateUser refresh={fetchdata} />

          <div className="table-responsive mt-4">
            <table className="table text-center align-middle border">
              <thead style={{ backgroundColor: "#9C27B0", color: "#fff" }}>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.User?.map((item, index) => (
                  <tr key={item._id} style={{ backgroundColor: index % 2 === 0 ? "#F3E5F5" : "#D1C4E9" }}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td className="d-flex justify-content-center gap-2">
                      <Edituser user={item} refresh={fetchdata} />
                      <Deleteuser userId={item._id} refresh={fetchdata} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {data.User?.length === 0 && (
            <p className="text-center text-white mt-3">No users found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
