import { Link } from "react-router-dom";
import { React, useState } from "react";
import webImage from "./web.jpg";
import dbmsImage from "./dbms1.png";
import oodImage from "./ood.jpg";
import mathImage from "./math.jpg";
import aiImage from "./ai.jpg";
import englishImage from "./english.jpg";
import dlImage from "./dl.jpg";
import { FaBook } from "react-icons/fa";
import "./dashboard.css";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
) {

 

  const courseImages = {
    "CS5610 SEC01 Web Development": webImage,
    "CS5200 SEC03 Database Management": dbmsImage,
    "CS5004 SEC02 Object Oriented Design": oodImage,
    "CS5100 SEC02 Introduction to Artificial Intelligence": aiImage,
    "CS7140 SEC01 Deep Learning": dlImage,
    "ENG3500 SEC02 Advanced Scientific Writing": englishImage,
    "CS5002 SEC01 Discreet Math": mathImage,
  };
 

  return (
    <div style={{ marginLeft: "10px" }}>
      <h1 style={{ color: "Gray" }}>Dashboard</h1>
      <hr />

      <div className="row flex-row flex-wrap justify-content-between customDiv" style={{ marginLeft: "50px", marginRight: "30px", height: "680px" }}>
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div style={{ marginLeft: "10px" }}>
          <div className="form-group">
            <input
              value={course.name}
              className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value })}
              placeholder="Course Name"
            />
          </div>
          <div className="form-group">
            <input
              value={course.number}
              className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value })}
              placeholder="Course Number"
            />
          </div>
          <div className="form-group">
            <input
              value={course.startDate}
              className="form-control"
              type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
              placeholder="Start Date"
            />
          </div>
          <div className="form-group">
            <input
              value={course.endDate}
              className="form-control"
              type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
              placeholder="End Date"
            />
          </div>
          <div className="form-group">
            <input
              value={course.term}
              className="form-control"
              onChange={(e) => setCourse({ ...course, term: e.target.value })}
              placeholder="Course Term"
            />
          </div>
          <div className="form-group">
            <input
              value={course.image}
              className="form-control"
              onChange={(e) => setCourse({ ...course, image: e.target.value })}
              placeholder="Image URL"
            />
            <br/>
          </div>
          <button className="btn btn-primary" onClick={addNewCourse}>
            Add
          </button>
          <button className="btn btn-success" onClick={updateCourse} >
            Update
          </button>
          <br/><br/>
        </div>


        <hr />
<br/>
        {courses.map((course) => (
          <div key={course._id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <img
                src={course.image || courseImages[course.name]}
                className="card-img-top"
                alt=""
              />

              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/Kanbas/Courses/${course._id}`}>
                    {course.name}
                  </Link>
                </h5>
                <p className="card-text1">{course.number}</p>
                <p className="card-text2">{course.term}</p>
                <FaBook />
                <button className="btn btn-danger" style={{ float: "right" }}
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}>
                  Delete
                </button>
                <button class="btn btn-warning" style={{ float: "right" }}
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}>
                  Edit
                </button>
              </div>
            </div>

          </div>

        ))}
      </div>
    </div>

  );
}

export default Dashboard;





