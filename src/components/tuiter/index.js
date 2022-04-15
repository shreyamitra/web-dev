import {Outlet} from "react-router-dom";
import React from "react";
import NavigationSidebar from "./NavigationSidebar/index.js";
import WhoToFollowListItem from "./WhoToFollowList/index.js";
import WhoToFollowList from "./WhoToFollowList/ListItem.js";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem.js";
import PostSummaryList from "./PostSummaryList/index.js";
import Explorecomponent from "./ExploreScreen/explorecomponent.js";


const Tuiter = () => {
  return (
  <div>

  <div className="row mt-2">
    <div className="col-2 col-lg-1 col-xl-2">
      <NavigationSidebar active = "home"/>
    </div>

    <div className="col-10 col-lg-7 col-xl-6">
      <Outlet/>

      <Explorecomponent/>

    </div>
    <div className="d-none d-lg-block col-lg-4 col-xl-4">
      <h2>Who to follow</h2>
      <WhoToFollowListItem who={{
                      avatarIcon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/vx4hxg2tnybefwmt4xxb',
                      userName: 'Virgin Galactic',
                      handle: 'virgingalactic',
                  }}/>
     <WhoToFollowList/>
    </div>
  </div>



    </div>
  );
};
export default Tuiter;

