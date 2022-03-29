import React from "react";
import {Link} from "react-router-dom";
import Classes from "./labs/Classes";
import Styles from "./labs/Styles";
//import ConditionalOutput from ".components/conditionaloutput";


const Labs = () => {
    return(
      <>
          <h1>Labs</h1>
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
