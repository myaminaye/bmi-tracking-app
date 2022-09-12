import './index.css';

const Home = () => {
    return ( 
        <div>
            <button>Add New Record</button>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Weight (kg)</th>
                    <th>Height (cm)</th>
                    <th>BMI</th>
                    <th></th>
                </tr>
                <tr>
                    <th>Peter</th>
                    <th>30</th>
                    <th>60</th>
                    <th>170</th>
                    <th></th>
                    <th>
                        <button>Edit</button>
                        <button>Delete</button>
                    </th>
                </tr>
                <tr>
                    <th>Maria</th>
                    <th>27</th>
                    <th>50</th>
                    <th>150</th>
                    <th></th>
                    <th>
                        <button>Edit</button>
                        <button>Delete</button>
                    </th>
                </tr>
            </table>
        </div>
     );
}
 
export default Home;