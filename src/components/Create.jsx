import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(" ");

  const navigate = useNavigate();

  //   FOR POST THE DATA FROM UI TO API DATABASE
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://65e2a6e7a8583365b318605e.mockapi.io/crudoperations",
        {
          name,
          email,
        }
      );
      navigate("/read");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <h2>Create</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
       
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* {name} */}
        <div className="mb-3">
          <label className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
           
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
