import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginConnect = () => {
  const [login, setLogin] = useState([]);


  useEffect(() => {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    navigate("/");
  }
}, []);

  return (
    <div className="container mt-5">
      <h2>Login Connect</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {login.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <Link
                  to={`/edit/${item.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoginConnect;
