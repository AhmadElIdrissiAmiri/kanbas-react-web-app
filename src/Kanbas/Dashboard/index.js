import { Link } from "react-router-dom";
import db from "../Database";
import webImage from "./web.jpg";
import dbmsImage from "./dbms1.png";
import oodImage from "./ood.jpg";
import mathImage from "./math.jpg";
import aiImage from "./ai.jpg";
import englishImage from "./english.jpg";
import dlImage from "./dl.jpg";
import { FaBook } from "react-icons/fa";
import "./dashboard.css";

function Dashboard() {
  const courses = db.courses;
  const courseImages = {
    "CS5610 SEC01 Web Development": webImage,
    "CS5200 SEC03 Database Management": dbmsImage,
    "CS5004 SEC02 Object Oriented Design": oodImage,
    "CS5100 SEC02 Introduction to Artificial Intelligence":aiImage ,
    "CS7140 SEC01 Deep Learning": dlImage,
    "ENG3500 SEC02 Advanced Scientific Writing": englishImage,
    "CS5002 SEC01 Discreet Math": mathImage,
  };

  return (
    <div style={{marginLeft:"10px"}}>
      <h1 style={{color:"Gray"}}>Dashboard</h1>
      <hr />
      <div style={{ marginLeft: "50px"}}>
      <h2>Published Courses ({courses.length})</h2>
      
      <hr/>
      <div className="row flex-row flex-wrap justify-content-between customDiv">
        {courses.map((course) => (
          <div key={course._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <img src={courseImages[course.name]} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/Kanbas/Courses/${course._id}`}>{course.name}</Link>
                </h5>
                <p className="card-text1">{course.number}</p>
                <p className="card-text2">{course.term}</p>
                <FaBook />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Dashboard;





