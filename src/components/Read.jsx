import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);

  //   FOR GET THE DATA FROM THE API DATABASE
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://65e2a6e7a8583365b318605e.mockapi.io/crudoperations"
      );
      console.log(res.data);
      if (res.data) {
        setData(res.data);
      } else {
        console.log("Api Res Empty");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const result = await axios.delete(
        `https://65e2a6e7a8583365b318605e.mockapi.io/crudoperations/${id}`
      );
    } catch (err) {
      console.error(err);
    }
    getData();
  };

  // ONLY FOR DELETE DATA FROM UI ONLY NOT FROM THE DATABASE
  // const handleDelete =  (id) =>{
  //         setData(data.filter((e) => e.id != id));
  // }

  //   FOR DATA STORE IN LOCAL STORAGE OF DEVICE
  const setLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  // For Dark Mode of Table
  const [tabledark, setDark] = useState("");
  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") {
              setDark("");
            } else {
              setDark("table-dark");
            }
          }}
        />
      </div>

      <div className="d-flex justify-content-evenly my-3">
        <h2 className="text-center">Read The Table</h2>

        <Link to="/">
          <button className="btn btn-secondary ">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {data.map((item) => {
          return (
            <tbody key={item.id}>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn btn-warning"
                      onClick={() =>
                        setLocalStorage(item.id, item.name, item.email)
                      }
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {/* </div> */}
    </>
  );
}

export default Read;

/*

useEffect(()=>{
const getuser = async() =>{

    try{
const res =await axios.get("xyz.com")
console.log(res);

if(res.data){
    setData(res.data)
}
else{
    console.log("Api res Empty")
}
    }
    catch(err){
console.error(err)
    }

}
getuser();
},[data])

*/
