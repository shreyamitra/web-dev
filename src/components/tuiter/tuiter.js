import React from "react";
import {Link} from "react-router-dom";
//import NavigationSidebar from "./NavigationSidebar";


const Tuiter = () => {
    return(
      <>
          <h1>Tuiter</h1>
          <Link to="/hello">
              Hello
          </Link> |
          <Link to="/">
              Labs
          </Link>
      </>
    )
};

export default Tuiter;
