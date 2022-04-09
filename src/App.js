import {BrowserRouter, Route, Routes}
       from "react-router-dom";
//import {BrowserRouter} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/labs/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter/tuiter";
import React from "react";



function App() {
return (
   <BrowserRouter>
     <div className="container">
       <Routes>
         <Route path="/">
           <Route path="labs"
                  element={<Labs/>}/>
           <Route path="hello"
                  element={<HelloWorld/>}/>
            <Route path="tuiter" element={<Tuiter />}>


           </Route>
         </Route>
       </Routes>
     </div>
   </BrowserRouter>
 );
}

export default App;

