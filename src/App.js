import {BrowserRouter, Route, Routes}
       from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import * as React from "react";



function App() {
  return (
  <BrowserRouter>
     <div className="container">
       <Routes>

         <Route path="/hello"
                exact={true}
                element={<HelloWorld/>}/>
         <Route path="/labs"
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

