import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa"; // Import the eye icon
import "./coursenavigation.css";
import db from "../../Database";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find((course) => course._id === courseId);

  const isHiddenLink = (link) =>
    ["Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus"].includes(link);

  return (
    <div style={{ marginLeft: "30px" }}>
      <div className="customList">
        <h6><i style={{fontSize:"13px"}}> {course.term}</i></h6>
        <br/>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`customListItem ${pathname.includes(link) && "active"}`}
          >
            {link}
            {isHiddenLink(link) && <FaEyeSlash className="eyeIcon"  style={{color:"black"}}/>}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CourseNavigation;
