import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes/index.js";
import Styles from "./Styles/index.js";
//import HelloWorld from "./todo";
import ToDoList from "./todo/TodoList.js";
import ConditionalOutput from "../conditionaloutput/index.js";

const Labs = () => {
    return(
      <>
          <h1>Labs</h1>
             <ConditionalOutput/>
             <ToDoList/>
             <Classes/>
             <Styles/>
          <Link to="/hello">
              Hello
          </Link> |
          <Link to="/tuiter">
              Tuiter
          </Link>
      </>
    )
};

export default Labs;