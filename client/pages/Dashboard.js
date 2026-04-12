import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EditLogin "
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Role protection
  useEffect(() => {
  const role = localStorage.getItem("role");
  if (role !== "admin") {
    navigate("/");
  }
}, [navigate]);

  // Role protection
  
  // Fetch users
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  // Delete user
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(user.id)}
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

export default Dashboard;
