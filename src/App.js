import {BrowserRouter, Route, Routes}
       from "react-router-dom";
//import {BrowserRouter} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/labs/hello-world.js";
import Labs from "./components/labs/index.js";
import Tuiter from "./components/tuiter/index.js";
import React from "react";
import HomeScreen from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/explorescreen.js"

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
           <Route path="tuiter"
                  element={<Tuiter/>}>
               <Route index
                      element={<HomeScreen/>}/>
               <Route path="explore"
                      element={<ExploreScreen/>}/>
           </Route>
       </Route>
   </Routes>
 </div>
</BrowserRouter>
 );
}

export default App;

