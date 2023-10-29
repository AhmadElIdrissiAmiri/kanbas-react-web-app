import Add from "./add";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples/index";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ChildStateComponent from "./ChildStateComponent";
function Assignment4() {
    function sayHello() {
        alert("Hello");
      }
    
  return (
    <div>
      <h1>Assignment 4</h1>
      <ReduxExamples/>


<ParentStateComponent/>
<ArrayStateVariable/>
<ObjectStateVariable/>
<DateStateVariable/>
<StringStateVariables/>
<BooleanStateVariables/>
      <Counter/>
      <EventObject/>
      <PassingFunctions theFunction={sayHello} />
      <PassingDataOnEvent/>
      <ClickEvent/> 
      <Add a={1} b={2} />
    </div>
  );
}
export default Assignment4;