import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "../header/Header";
import HolidayPictures from "../holidayPictures/HolidayPictures.jsx";
import Register from "../user/register/Register";
import Login from "../user/login/Login";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<HolidayPictures/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    </>
  );
}

export default App;