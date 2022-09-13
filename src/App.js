import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import NewRecordForm from "./NewRecordForm";
import NotFound from "./NotFound";
import RecordDetails from "./RecordDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/newrecordform" element={<NewRecordForm/>} />
            <Route path='*' element={<NotFound />} />
            <Route path="/bmirecords/:id" element={<RecordDetails/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
