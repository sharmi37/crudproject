import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditLogin = () => {
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setEmail(res.data.email))
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:3000/users/${id}`, {
      email,
    });

    navigate("/dashboard");
  };

  return (
    <div className="container mt-5">
      <h3>Edit User</h3>

      <form onSubmit={handleUpdate}>
        <input
          type="email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default EditLogin;
