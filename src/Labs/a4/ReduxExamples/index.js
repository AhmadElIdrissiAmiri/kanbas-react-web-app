import React from "react";
import HelloRedux from "./HeLLoRedux/index";
import CounterRedux from "./CounterRedux/index";
import AddRedux from "./AddRedux/index";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
<TodoList/>
      <AddRedux/>
      <CounterRedux/>
<HelloRedux/>
    </div>
  );
};

export default ReduxExamples;