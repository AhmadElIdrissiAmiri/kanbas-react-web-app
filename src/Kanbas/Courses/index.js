import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes, useParams, useLocation, Link } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { LiaGlassesSolid } from 'react-icons/lia';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaFileImport, FaCloudDownloadAlt, FaHome, FaChartBar, FaVolumeUp, FaBell } from 'react-icons/fa';
import Grades from "./Grades";
import axios from "axios";

import "./courses.css";

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  //const URL = "http://localhost:4000/api/courses";




  const API_BASE = process.env.REACT_APP_API_BASE;
  //const MODULES_URL = `${API_BASE}/modules`;
  const URL = `${API_BASE}/courses`;
  


  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const [isCourseNavigationVisible, setIsCourseNavigationVisible] = useState(true);
  const toggleCourseNavigation = () => {
    setIsCourseNavigationVisible(!isCourseNavigationVisible);
  };

   //const status = db.status.filter((item) => item.course === courseId); 

  const location = useLocation();
  const currentPage = location.pathname.split("/").pop();

  return (
    <div className="row flex-row flex-wrap justify-content-between customDiv" style={{ marginLeft: "20px", marginBottom: "10px" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button type="button" className="btn btn-light btn-sm buttonStyle" style={{ width: "100px" }} onClick={toggleCourseNavigation}>
            <RxHamburgerMenu style={{ fontSize: "25px", color: "red" }} />
          </button>
          <nav style={{ "--bs-breadcrumb-divider": "'>'", flex: 1, paddingRight: "10px" }} aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link style={{ color: "red", textDecoration: "none" }} to={location.pathname}>
                  {course.name}
                </Link>
              </li>
              <li className="breadcrumb-item active" style={{ textDecoration: "none" }} aria-current="page">
                {currentPage}
              </li>
            </ol>
          </nav>
          <button type="button" className="btn btn-light btn-sm buttonStyle" style={{ width: "160px" }}>
            <LiaGlassesSolid /> Student View
          </button>
        </div>
      </div>
      <hr />
      <div className="col-2">
        {isCourseNavigationVisible && <CourseNavigation />}
      </div>
      <div className="col-8">
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
          <Route path="Grades" element={<Grades />} />
        </Routes>
      </div>
      <div className="col-2">
        <div className="buttonStyle">
          <button type="button" className="btn btn-light btn-sm" ><FaFileImport /> Import Existing Content</button>
          <button type="button" className="btn btn-light btn-sm" ><FaCloudDownloadAlt /> Import From Commons</button>
          <button type="button" className="btn btn-light btn-sm" ><FaHome /> Choose Home Page</button>
          <button type="button" className="btn btn-light btn-sm" ><FaChartBar /> View Course Stream</button>
          <button type="button" className="btn btn-light btn-sm" ><FaVolumeUp /> New Announcement</button>
          <button type="button" className="btn btn-light btn-sm" ><FaChartBar /> New Analytics</button>
          <button type="button" className="btn btn-light btn-sm" ><FaBell /> View Course Notifications</button>
        </div>
        
        <hr />
        <h6>To Do</h6>
  
        <hr/>
      </div>
    </div>
  );
}

export default Courses;


/*     {status.map((item) => (
          <div key={item._id}>
            <h6 style={{color:"red"}}>{item.title}</h6>
            <p><i>{item.description}</i></p>
          </div>
        ))}*/