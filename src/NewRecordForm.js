const NewRecordForm = () => {
    return ( 
        <div className="newRecordForm">
            <h1>Add a new record to the bmi record table</h1>
            <form>
                <label>Name</label>
                <input type='text' />

                <label>Age</label>
                <input type='number' />

                <label>Height in cm</label>
                <input type='number' />

                <label>Weight in kg</label>
                <input type='number' />

                <button>Calculate</button>
            </form>
        </div>
     );
}
 
export default NewRecordForm;