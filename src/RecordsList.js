import { Link } from "react-router-dom";

const BmiRecords = ({ bmirecords }) => {
  // const calculateBMI = (weight, height) => {
  //   let bmi = (weight / ((height * height) / 10000)).toFixed(2);
  //   setBmi(bmi);
  // };

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
              <td>{bmirecord.bmi}</td>
              <td>
                <Link to={`/bmirecords/${bmirecord.id}`}>Edit</Link>/
                <Link to="/">Delete</Link>
              </td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
};

export default BmiRecords;
