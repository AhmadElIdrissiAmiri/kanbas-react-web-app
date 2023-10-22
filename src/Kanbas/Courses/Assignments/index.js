import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import db from "../../Database";
import "../courses.css";
import { BsFillCheckCircleFill, BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosAdd, IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { FaEllipsisV } from 'react-icons/fa';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;

  const [listVisibility, setListVisibility] = useState(true);

  const toggleList = () => {
    setListVisibility(!listVisibility);
  };

  return (
    <div className="list-container">
      <div style={{ float:"right", alignItems: "center", justifyContent: "center" }}>

<button type="button" className="btn btn-light btn-sm buttonStyle" style={{ width: "160px" }}>
<IoIosAdd style={{color:"black"}}/>Group
</button>
<button type="button" className="btn btn-danger btn-sm buttonStyle" style={{ width: "160px" }}>
  <IoIosAdd className="iconStyle2" /> Module
</button>
<button type="button" className="btn btn-light btn-sm buttonStyle" style={{ width: "10px" }}>
  <FaEllipsisV className="iconStyle3" />
</button>
</div>
<br/>

<hr/>
      <div onClick={toggleList} className="list-header" style={{ height: "70px" }}>
        <BsGripVertical />
        {listVisibility ? (
          <AiOutlineDown style={{ fontSize: "18px" }} />
        ) : (
          <AiOutlineRight style={{ fontSize: "18px" }} />
        )}
        <b>ASSIGNMENTS</b>
        <AiOutlinePlus
          className="float-end"
          style={{ marginLeft: "10px", color: "gray" }}
        />
        <BsFillCheckCircleFill
          className="float-end"
          style={{ marginLeft: "10px", color: "green" }}
        />
        <button
          type="button"
          class="btn btn-light float-end"
          style={{ marginLeft: "10px", borderRadius: "20px" }}
        >
          40% Total
        </button>
      </div>
      {listVisibility && (
        <ul className="list-group">
          {assignments
            .filter((assignment) => assignment.course === courseId)
            .map((assignment, index) => (
              <li key={index} className="list-item">
                <BsGripVertical />
                <Link style={{textDecoration:"none", color:"black"}}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  <GiNotebook style={{ color: "green", fontSize: "20px" }} />
                  <b>{assignment.title}</b>
                </Link>
                <AiOutlinePlus
                  className="float-end"
                  style={{ marginLeft: "10px", color: "gray" }}
                />
                <BsFillCheckCircleFill
                  className="float-end"
                  style={{ marginLeft: "10px", color: "green" }}
                />
                <p>
                  <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                  {assignment.description} | {assignment.point}
                </p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Assignments;
