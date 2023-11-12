import React, {useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import db from "../../Database";
import "../courses.css";
import { BsFillCheckCircleFill, BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { IoIosAdd, IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { FaEllipsisV } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
   updateAssignment,
  setAssignment,
  setAssignments,
} from "./assignmentsReducer";
import { findAssignmentForCourse , createAssignment} from "./client";
import * as client from "./client";
function Assignments() {
  const { courseId } = useParams();
  useEffect(() => {
    findAssignmentForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);


  const handleAddAssignment = () => {
    createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };





  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  const [listVisibility, setListVisibility] = useState(true);

  const toggleList = () => {
    setListVisibility(!listVisibility);
  };

  const handleDeleteAssignment = (assignmentId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this assignment?");
    if (confirmDelete) {
      client.deleteAssignment(assignmentId).then((status) => {
        dispatch(deleteAssignment(assignmentId));
      });
    }
  };

  return (
    <div className="list-container">
      <div style={{ float: "right", alignItems: "center", justifyContent: "center" }}>
        <button type="button" className="btn btn-light btn-sm buttonStyle" style={{ width: "160px" }}>
          <IoIosAdd style={{ color: "black" }} /> Group
        </button>
        <button type="button" className="btn btn-danger btn-sm buttonStyle" style={{ width: "160px" }}>
          <IoIosAdd className="iconStyle2" /> Module
        </button>
        <button type="button" className="btn btn-light btn-sm buttonStyle" style={{ width: "10px" }}>
          <FaEllipsisV className="iconStyle3" />
        </button>
      </div>
      <br />
      <br />
      <hr />

      <div className="form-group">
        <input
          value={assignment.title}
          className="form-control"
          onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))
          } />

        <textarea
          value={assignment.description}
          className="form-control"
          onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))
          } />
        <input
          value={assignment.point}
          className="form-control"
          onChange={(e) => dispatch(setAssignment({ ...assignment, point: e.target.value }))
          } />

        <br />
        <button className="btn btn-success" onClick={handleAddAssignment}>
          Add
        </button>
        <button className="btn btn-primary" onClick={handleUpdateAssignment}>
          Update
        </button>
        <br />
      </div>

      <hr />
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
          className="btn btn-light float-end"
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
                <Link style={{ textDecoration: "none", color: "black" }}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                >
                  <GiNotebook style={{ color: "green", fontSize: "20px" }} />
                  <b>{assignment.title}</b>
                </Link>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                  <AiOutlinePlus
                    className="float-end"
                    style={{ marginLeft: "10px", color: "gray" }}
                  />
                </Link>
                <BsFillCheckCircleFill
                  className="float-end"
                  style={{ marginLeft: "10px", color: "green" }}
                />
                <p>
                  <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                  {assignment.description} | {assignment.point}
                </p>
                <button className="btn btn-danger" style={{ float: "right" }}
                  onClick={() => handleDeleteAssignment(assignment._id)}>
                  Delete
                </button>
                <button class="btn btn-warning" style={{ float: "right" }}
                  onClick={() => dispatch(setAssignment(assignment))}>
                  Edit
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Assignments;
