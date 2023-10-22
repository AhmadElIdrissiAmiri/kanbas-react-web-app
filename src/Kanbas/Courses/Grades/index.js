import React, { useState } from "react";
import db from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
 
  
  const [filteredStudent, setFilteredStudent] = useState("all");
  const [filteredAssignment, setFilteredAssignment] = useState("all");

  const handleStudentFilterChange = (event) => {
    setFilteredStudent(event.target.value);
  };

  const handleAssignmentFilterChange = (event) => {
    setFilteredAssignment(event.target.value);
  };

  return (
    <div>
      <h1>Grades</h1>
      <div className="row">
        <div className="col-md-6">
          <h6>Student Names</h6>
          <select
            className="form-select"
            value={filteredStudent}
            onChange={handleStudentFilterChange}
            style={{ color: "gray" }}
          >
            <option value="all">Show All Students</option>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <option key={user._id} value={user._id}>
                  {user.firstName} {user.lastName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-6">
          <h6>Assignment Names</h6>
          <select
            className="form-select"
            value={filteredAssignment}
            onChange={handleAssignmentFilterChange}
            style={{ color: "gray" }}
          >
            <option value="all">Show All Assignments</option>
            {assignments.map((assignment) => (
              <option key={assignment._id} value={assignment._id}>
                {assignment.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <hr />

      <div className="table-responsive">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th key={assignment._id}>{assignment.title} Out of 100</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);

              if (filteredStudent === "all" || filteredStudent === user._id) {
                return (
                  <tr key={enrollment.user}>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    {assignments.map((assignment) => {
                      const grade = db.grades.find(
                        (grade) =>
                          grade.student === enrollment.user && grade.assignment === assignment._id
                      );
                      return (
                        <td key={assignment._id}>
                          {filteredAssignment === "all" ? (
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Enter the grade"
                              min="0"
                              max="100"
                              value={grade?.grade || ""}
                            />
                          ) : (
                            grade?.grade || ""
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
