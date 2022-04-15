import React from 'react';
import PostSummaryList from "../PostSummaryList/index.js";

const Explorecomponent = (

) => {
    return(
    <div>
            <div className ="row">

        <form id="search-form">
            <div className="search" >
                <input type="text" name="search" className="round" placeholder="Search Tuiter"/>
                <div className = "pos-relative-right">
                    <a href="explore-settings.html" className = "bg-color-light-gray">
                        <img  src= "https://img.icons8.com/fluency/344/gear.png"
                              height= "30px" width="30px"/>
                    </a>
                </div>
            </div>

        </form>
           </div>
           <ul className="nav mb-2 nav-tabs">
                     <ul className="nav nav-tabs top-50">
            <li className="nav-item">
                <a className="nav-link active fg-color-gray" href="navigation.html">For You</a>
            </li>
            <li className="nav-item">
                <a className="nav-link fg-color-blue" href="navigation.html">Trending</a>
            </li>
            <li className="nav-item">
                <a className="nav-link fg-color-blue" href="navigation.html">News</a>
            </li>
            <li className="nav-item">
                <a className="nav-link fg-color-blue" href="navigation.html">Sports</a>
            </li>
            <li className="nav-item">
                <a className="nav-link fg-color-blue" href="navigation.html">Entertainment</a>
            </li>
        </ul>

           </ul>

                  <li className="list-group-item">
                <img  src= "https://content.fortune.com/wp-content/uploads/2020/05/SpaceX-NASA-Launch-04.jpg"
                     height= "350px" width="690px"
                />
                <p className = "bottom-left picture-font">
                    SpaceX's Starship
                </p>

            </li>
            <PostSummaryList/>
           </div>
    );
}
export default Explorecomponent;
