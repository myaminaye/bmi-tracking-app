import { Link } from "react-router-dom";
import useFetch from "./useFetch";
import "./index.css";
// import React, { useState, useEffect } from "react";
import RecordsList from "./RecordsList";

const Home = () => {
  const {
    error,
    isPending,
    data: bmirecords,
  } = useFetch("http://localhost:8000/bmirecords");
  // console.log(bmirecords);

  // const calculateBMI = (weight, height) => {
  //   let bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //   return bmi;
  // };

  return (
    <div className="Home">
      <button className="newRecordBtn">
        <Link to="/newrecordform">Add New Record</Link>
      </button>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {bmirecords && <RecordsList bmirecords={ bmirecords} />}

      {/* <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Weight (kg)</th>
          <th>Height (cm)</th>
          <th>BMI</th>
          <th></th>
        </tr>
        <tr className="recordTable">
          {bmirecords.map((record) => (
            <div className="record-preview" key={record.id}>
              <td>{record.name}</td>
              <td>{record.age}</td>
              <td>{record.weight}kg</td>
              <td>{record.height}cm</td>
              <td>{calculateBMI(record.weight, record.height)}</td>
              <th>
                <Link to="/editRecord">Edit</Link>/<Link to="/">Delete</Link>
              </th>
            </div>
          ))}
          </tr>
      </table> */}
    </div>
  );
};

export default Home;
