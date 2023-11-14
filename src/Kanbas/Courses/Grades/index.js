// import React, { useState } from "react";
// import db from "../../Database";
// import { useParams } from "react-router-dom";
// import {LiaFileExportSolid} from "react-icons/lia";
// import {LiaFileImportSolid} from "react-icons/lia";
// import {FiSettings} from "react-icons/fi";
// import {BsFunnel} from "react-icons/bs";

// function Grades() {
//   const { courseId } = useParams();
//   const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
//   const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
//   const grades = db.grades.filter((grade) => {
//     const assignment = db.assignments.find((assignment) => assignment._id === grade.assignment);
//     return assignment.course === courseId;
//   });
  
// console.log(grades);
//   const [filteredStudent, setFilteredStudent] = useState("all");
//   const [filteredAssignment, setFilteredAssignment] = useState("all");

//   const handleStudentFilterChange = (event) => {
//     setFilteredStudent(event.target.value);
//   };

//   const handleAssignmentFilterChange = (event) => {
//     setFilteredAssignment(event.target.value);
//   };

//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "flex-end" }}>
//         <button
//           type="button"
//           className="btn btn-light btn-sm buttonStyle"
//           style={{ width: "160px", marginRight: "20px" }}
//         >
//           <LiaFileExportSolid />
//           Import
//         </button>
//         <button
//           type="button"
//           className="btn btn-light btn-sm buttonStyle"
//           style={{ width: "160px", marginRight: "20px" }}
//         >
//           <LiaFileImportSolid />
//           Export
//         </button>
//         <button
//           type="button"
//           className="btn btn-light btn-sm buttonStyle"
//           style={{ width: "10px" }}
//         >
//           <FiSettings />
//         </button>
//       </div>

//       <div className="row">
//         <div className="col-md-6">
//           <h6 >Student Names</h6>
//           <select
//             className="form-select"
//             value={filteredStudent}
//             onChange={handleStudentFilterChange}
//             style={{ color: "gray" }}
//           >
//             <option value="all">Search Students</option>
//             {enrollments.map((enrollment) => {
//               const user = db.users.find((user) => user._id === enrollment.user);
//               return (
//                 <option key={user._id} value={user._id}>
//                   {user.firstName} {user.lastName}
//                 </option>
//               );
//             })}
//           </select>
//         </div>
//         <div className="col-md-6">
//           <h6>Assignment Names</h6>
//           <select
//             className="form-select"
//             value={filteredAssignment}
//             onChange={handleAssignmentFilterChange}
//             style={{ color: "gray" }}
//           >
//             <option value="all">Search Assignments</option>
//             {assignments.map((assignment) => (
//               <option key={assignment._id} value={assignment._id}>
//                 {assignment.title}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>
//       <hr />
//       <button
//           type="button"
//           className="btn btn-light btn-sm buttonStyle"
//           style={{ width: "160px" }}
//         ><BsFunnel />Apply Filter
          
//         </button>
//       <div className="table-responsive">
//         <table className="table table-striped text-center" style={{border:"2px"}}>
//           <thead >
//             <tr>
//               <th>Student Name</th>
//               {assignments.map((assignment) => (
//                 <th key={assignment._id}>{assignment.title} Out of 100</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {enrollments.map((enrollment) => {
//               const user = db.users.find((user) => user._id === enrollment.user);

//               return (
//                 <tr key={enrollment.user}>
//                   <td style={{ color: "red" }}>
//                     {user.firstName} {user.lastName}
//                   </td>
//                   {assignments.map((assignment) => {
//                     const grade = grades.find(
//                       (grade) =>
//                         grade.student === user._id && grade.assignment === assignment._id
//                     );
//                     return (
//                       <td key={assignment._id}>
//                         {filteredAssignment === "all" ? (
//                           <input
//                             type="number"
//                             className="form-control"
//                             placeholder="Enter the grade"
//                             min="0"
//                             max="100"
//                             value={grade ? grade.grade : ""}
//                           />
//                         ) : (
//                           grade ? grade.grade : ""
//                         )}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Grades;
