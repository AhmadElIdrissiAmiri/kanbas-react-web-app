import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillCheckCircleFill, BsGripVertical } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineDown, AiOutlineRight } from "react-icons/ai"; // Import AiOutlineDown and AiOutlineRight
import db from "../../Database";
import "../courses.css";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  const [listVisibility, setListVisibility] = useState(Array(modules.length).fill(false));

  const toggleList = (index) => {
    const updatedVisibility = [...listVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setListVisibility(updatedVisibility);
  };

  return (
    <div className="list-container">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <div key={index}>
            <div onClick={() => toggleList(index)} className="list-header" style={{ marginBottom: "50px", height: "70px" }}>
            <BsGripVertical style={{ fontSize: "18px" }} />
              {listVisibility[index] ? (
                <AiOutlineDown style={{ fontSize: "18px", marginRight: "10px" }} /> 
              ) : (
                <AiOutlineRight style={{ fontSize: "18px", marginRight: "10px" }} /> 
              )}
              
              <b>{module.name}</b>
              <HiOutlineDotsVertical
                className="float-end"
                style={{ marginLeft: "10px", color: "gray" }}
              />
              <AiOutlinePlus
                className="float-end"
                style={{ marginLeft: "10px", color: "gray" }}
              />
              <BsFillCheckCircleFill
                className="float-end"
                style={{ marginLeft: "10px", color: "green" }}
              />
            </div>
            {listVisibility[index] && (
              <ul className="list-group" style={{ marginBottom: "10px" }}>
                <li className="list-item" style={{ marginBottom: "10px" }}>
                  <p>{module.description}</p>
                </li>
              </ul>
            )}
          </div>
        ))}
    </div>
  );
}

export default ModuleList;
