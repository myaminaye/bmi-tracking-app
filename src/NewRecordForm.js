import { useState, useNavigate } from "react";

const NewRecordForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [isPending, setIsPending] = useState(false);

//   const history = useNavigate();

  const calculateBMI = (weight, height) => {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    setBmi(bmi);
  };

  const submitForm = (e) => {
    // let val = ([weight / height / height] * 10000).toFixed(2);
    // setBmi(val);
    e.preventDefault();
    const bmirecord = { name, age, height, weight };

    setIsPending(true);

    fetch("http://localhost:8000/bmirecords/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bmirecord),
    }).then(() => {
      console.log("new record added");
      setIsPending(false);
    //   history("/");
    });
  };

  return (
    <div className="newRecordForm">
      <h1>Add a new record to the bmi record table</h1>
      <form onSubmit={submitForm}>
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

        {/* <p>{bmi}</p> */}

        {!isPending && <button>Add Record</button>}
        {isPending && <button>Adding Record...</button>}

        {/* <button type="submit">Submit</button>

        <button onClick={calculateBMI}>Calculate</button> */}
      </form>
    </div>
  );
};

export default NewRecordForm;
