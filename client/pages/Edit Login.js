import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/login/${id}`)
      .then((res) => {
        setEmail(res.data.email);
        setPassword(res.data.password);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:3001/login/${id}`, {
      email,
      password,
    });
    navigate("/loginconnect");
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h3>Edit Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditLogin;
