import { useState } from "react";
import { Link , useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";


const BmiRecords = ({ bmirecords }) => {
  const [bmi,setBmi] = useState('');

  const calculateBMI = (weight, height) => {
    let bmivalue = (weight / ((height * height) / 10000)).toFixed(2);
    setBmi(bmivalue);
  };

  const { id } = useParams();
  const { data: bmirecord, error, isPending } = useFetch('http://localhost:8000/bmirecords/' + id);

  const history = useNavigate();

  const handleDelete = () => {
    fetch('http://localhost:8000/bmirecords/' + bmirecord.id, {
      method: 'DELETE'
    }).then(() => {
      history('/');
    }) 
  }

  return (
    <div className="bmi-records">
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Height</th>
          <th>Weight</th>
          <th>BMI</th>
          <th>Status</th>
        </tr>
      </table>
      {bmirecords.map((bmirecord) => (
        <div className="bmi-record-preview" key={bmirecord.id}>
          <table>
            <tr>
              <td>{bmirecord.name}</td>
              <td>{bmirecord.age}</td>
              <td>{bmirecord.height}cm</td>
              <td>{bmirecord.weight}kg</td>
              {/* <td>{calculateBMI(bmirecord.weight,bmirecord.height)}</td> */}
              <td>
                <Link to={`/bmirecords/${bmirecord.id}`}>Edit</Link>/
                <Link to="/" onClick={handleDelete}>Delete</Link>
              </td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};

export default BmiRecords;
