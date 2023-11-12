import ModuleList from "./ModuleList";
import { IoIosAdd, IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { FaEllipsisV } from 'react-icons/fa';
function Modules() {
  return (
    <div>
    <div >

    <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
        
          <button type="button" className="btn btn-light btn-sm buttonStyle" style={{ width: "160px" }}>
             Collapse All
          </button>
          <button type="button" className="btn btn-light btn-sm buttonStyle" style={{ width: "160px" }}>
             View Progress
          </button>
          <button type="button" className="btn btn-light btn-sm buttonStyle" style={{ width: "160px" }}>
           <IoIosCheckmarkCircleOutline className="iconStyle1"  />Publish All
          </button>
          <button type="button" className="btn btn-danger btn-sm buttonStyle" style={{ width: "160px" }}>
          <IoIosAdd className="iconStyle2" /> Module
          </button>
          <button type="button" className="btn btn-light btn-sm buttonStyle" style={{ width: "10px" }}>
             <FaEllipsisV className="iconStyle3" />
          </button>
        </div>
    </div>
    <hr/>
    <br/>
    <div className="row flex-row flex-wrap justify-content-between customDiv" style={{ marginLeft: "20px" }}>
      
    
      <ModuleList />
    
    </div>
    </div>
  );
}
export default Modules;