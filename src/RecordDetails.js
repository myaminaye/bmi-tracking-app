import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const RecordDetails = () => {
  const { id } = useParams();

  const {
    data: bmirecord,
    error,
    isPending,
  } = useFetch("http://localhost:8000/bmirecords/" + id);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");

//   const history = useNavigate();

  useEffect(() => {
    setBmi(bmirecord?.bmi);
  }, [bmirecord]);

  const calculateBMI = (weight, height) => {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    return bmi;
  };

  return (
    <div className="record-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {bmirecord && (
        <form>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <label>Height in cm</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <label>Weight in kg</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <p>{bmi}</p>

          <button type = 'submit' onClick={calculateBMI}>Calculate</button>
          
          {/* <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              calculateBMI(e.rating);
            }}
          >
            Calculate BMI
          </button> */}
        </form>
      )}
    </div>
  );
};

export default RecordDetails;
