import { Link } from 'react-router-dom';
import './index.css';

const calculateBMI=(weight,height)=>{
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    return bmi;
}

const Home = ({bmirecords}) => {
    return ( 
        <div className='Home'>
            <button className='newRecordBtn'><Link to='/newrecordform'>Add New Record</Link></button>
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
                    <th>{calculateBMI(60, 170)}</th>
                    <th>
                        <Link to='/editRecord'>Edit</Link>/
                        <Link to='/'>Delete</Link>
                    </th>
                </tr>
                <tr>
                    <th>Maria</th>
                    <th>27</th>
                    <th>50</th>
                    <th>150</th>
                    <th>{calculateBMI(50, 150)}</th>
                    <th>
                        <Link to='/editRecord'>Edit</Link>/
                        <Link to='/'>Delete</Link>
                    </th>
                </tr>
            </table>
        </div>
     );
}
 
export default Home;