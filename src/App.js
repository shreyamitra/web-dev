import {BrowserRouter, Route, Routes}
       from "react-router-dom";
//import {BrowserRouter} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "/Users/shreyamitra/Desktop/2022/spring/webdev/web-dev/src/components/labs/hello-world.js";
import Labs from "/Users/shreyamitra/Desktop/2022/spring/webdev/web-dev/src/components/labs/index.js";
import Tuiter from "./components/tuiter/index.js";
import React from "react";


function App() {
return (

<BrowserRouter>
 <div className="container">
   <Routes>
     <Route path="/hello"
            exact={true}
            element={<HelloWorld/>}/>
     <Route path="/"
            exact={true}
            element={<Labs/>}/>
     <Route path="/tuiter"
            exact={true}
            element={<Tuiter/>}/>
   </Routes>
 </div>
</BrowserRouter>
 );
}

export default App;

