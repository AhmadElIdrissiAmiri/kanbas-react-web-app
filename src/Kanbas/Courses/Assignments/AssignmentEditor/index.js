import React, { useEffect, useState } from "react";
import { useParams, Link , useNavigate} from "react-router-dom";
import { IoIosAdd, IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { FaEllipsisV } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import {
  setAssignment,
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment
} from "../assignmentsReducer";
import * as client from "../client";

const ASSIGNMENTS_URL = "http://localhost:4000/api/assignments";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = useSelector(state => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(assignment.title);
  const navigate = useNavigate();

  useEffect(() => {
    if (assignmentId) {
      client.findAssignmentForCourse(assignmentId).then(assignment => {
        dispatch(setAssignment(assignment));
      });
    }
  }, [assignmentId, dispatch]);

  const handleSave = async () => {
    try {
      if (assignmentId) {
        await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
      } else {
        const newAssignment = await client.createAssignment(courseId, assignment);
        dispatch(addAssignment(newAssignment));
      }
    
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
  };

  return (
    <div>
      <div style={{ float: "right" }}>
        <button type="button" className="btn btn-light btn-sm buttonStyle" style={{ width: "160px" }}>
          <IoIosCheckmarkCircleOutline className="iconStyle1" />Publish All
        </button>
        <button type="button" className="btn btn-light btn-sm buttonStyle" style={{ width: "10px" }}>
          <FaEllipsisV className="iconStyle3" />
        </button>
      </div>

      <br />
      <hr />

      <h6>Assignment Name</h6>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control mb-2"
      />

      <div className="row">
        <div className="col-auto offset-sm-1">
          <label htmlFor="assignment" className="col-form-label">
            Assignment Group
          </label>
        </div>
        <div className="col-auto">
          <select className="form-select" id="assignment" style={{ width: "500px" }}>
            <option selected>ASSIGNMENTS</option>
            <option value="1">A1</option>
            <option value="2">A2</option>
            <option value="3">A3</option>
          </select>
        </div>
      </div>

      <br />
      <br />
      <div className="row">
        <div className="col-auto offset-sm-1">
          <label htmlFor="Display Grade as" className="col-form-label">
            Display Grade as
          </label>
        </div>
        <div className="col-auto">
          <select className="form-select" id="Display Grade as" style={{ width: "500px" }}>
            <option selected>Percentage</option>
            <option value="1">40%</option>
            <option value="2">20%</option>
            <option value="3">90%</option>
          </select>
        </div>
      </div>

      <br />
      <div className="row mb-3">
        <div className="col-sm-10 offset-sm-1">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="r6" />
            <label className="form-check-label" htmlFor="r6">
              Do not count this assignment towards the final grade
            </label>
          </div>
        </div>
      </div>

      <br />
      <div className="row">
        <div className="col-auto offset-sm-1">
          <label htmlFor="Submission Type" className="col-form-label">
            Submission Type
          </label>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-md-10 offset-sm-2">
              <select className="form-select" id="Display Grade as">
                <option selected>Online</option>
                <option value="1">in person</option>
                <option value="2">remote</option>
              </select>
              <h6>Online Entry Options</h6>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="r6" />
                <label className="form-check-label" htmlFor="r6">
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="r6" />
                <label className="form-check-label" htmlFor="r6">
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="r6" />
                <label className="form-check-label" htmlFor="r6">
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="r6" />
                <label className="form-check-label" htmlFor="r6">
                  Student Annotation
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="r6" />
                <label className="form-check-label" htmlFor="r6">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="row">
        <div className="col-auto offset-sm-1">
          <label htmlFor="Assign" className="col-form-label">Assign</label>
        </div>
        <div className="col offset-sm-1">
          <div className="row">
            <div className="col-md-10 offset-sm-2">
              <h6>Assign to</h6>
              <div>
                <button type="button" className="btn btn-light btn-sm">
                  Everyone <i className="fa fa-times"></i>
                </button>
              </div>
              <h6>Due</h6>
              <div className="input-group">
                <input type="date" className="form-control" id="due-date" />
                <span className="input-group-addon">
                  <span className="glyphicon glyphicon-calendar"></span>
                </span>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h6>Available from</h6>
                  <div className="input-group">
                    <input type="date" className="form-control" id="available-from" />
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                  </div>
                </div>
                <div className="col-md-6">
                  <h6>Until</h6>
                  <div className="input-group">
                    <input type="date" className="form-control" id="until-date" />
                    <span className="input-group-addon">
                      <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                  </div>
                </div>
              </div>

              <button type="button" className="btn btn-se btn-sm" onClick={addAssignment}>
                <i
                  className="fa fa-plus"
                  aria-hidden="true"
                  style={{ color: "black", marginLeft: "0px", fontSize: "10px" }}
                ></i>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="r6" />
          <label className="form-check-label" style={{ paddingRight: "430px" }}>
            Notify users this content has changed
          </label>
        </div>
      </div>

      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger" style={{ float: "right" }}
      >
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2" style={{ float: "right" }}>
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;


