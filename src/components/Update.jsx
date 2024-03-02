import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Update() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const navigate = useNavigate();

  //   FOR RE-RENDER THE DATA AFTER UPDATE
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // update == put
      const res = await axios.put(
        `https://65e2a6e7a8583365b318605e.mockapi.io/crudoperations/${id}`,
        {
          name: name,
          email: email,
        }
      );
      navigate("/read");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h2>Update</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        
        <Link to='/read'>
        <button type="button" className="btn btn-secondary mx-2">
          Back
        </button>
        </Link>

      </form>
    </>
  );
}
export default Update;
