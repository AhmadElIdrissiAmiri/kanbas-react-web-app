import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillCheckCircleFill, BsGripVertical } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineDown, AiOutlineRight } from "react-icons/ai"; 
import "../courses.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import {findModulesForCourse, createModule}  from "./client";
import * as client from "./client";


function ModuleList() {
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();


  const [listVisibility, setListVisibility] = useState(Array(modules.length).fill(true));

  const toggleList = (index) => {
    const updatedVisibility = [...listVisibility];
    updatedVisibility[index] = !updatedVisibility[index];
    setListVisibility(updatedVisibility);
  };

  return (
    <div className="list-container">

<div className="form-group">
  <input
    value={module.name}
    className="form-control"
    onChange={(e) =>   dispatch(setModule({ ...module, name: e.target.value }))
  }/>


  <textarea
    value={module.description}
    className="form-control"
    onChange={(e) => 

      dispatch(setModule({ ...module, description: e.target.value }))
    }/>

  <br/>
  <button className="btn btn-success" onClick={handleAddModule}>


    Add
  </button>
  <button className="btn btn-primary"  onClick={handleUpdateModule}>

    Update
  </button>
  <br/>
  <br/>
</div>


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
                  <button className="btn btn-danger" style={{ float: "right" }}
                    onClick={() => handleDeleteModule(module._id)}>

                    Delete
                  </button>
                  <button class="btn btn-warning" style={{ float: "right" }}
                        onClick={() => dispatch(setModule(module))}>

                    Edit
                  </button>

                </li>
              </ul>
            )}
          </div>
        ))}
    </div>
  );
}

export default ModuleList;