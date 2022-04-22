import {Outlet} from "react-router-dom";
import React from "react";
import NavigationSidebar from "./NavigationSidebar/index.js";
import WhoToFollowListItem from "./WhoToFollowList/index.js";
import WhoToFollowList from "./WhoToFollowList/ListItem.js";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem.js";
import PostSummaryList from "./PostSummaryList/index.js";
import Explorecomponent from "./ExploreScreen/explorecomponent.js";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";
// import {createStore} from "redux";
import {Provider} from "react-redux";
// const store = createStore(whoReducer);

const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer
});
const store = createStore(reducer);


const Tuiter = () => {
  return (
      <Provider store={store}>
  <div>

  <div className="row mt-2">
    <div className="col-2 col-lg-1 col-xl-2">
      <NavigationSidebar active = "home"/>
    </div>

    <div className="col-10 col-lg-7 col-xl-6">
      <Outlet/>
      {/*<Explorecomponent/>*/}

    </div>
    <div className="d-none d-lg-block col-lg-4 col-xl-4">

     <WhoToFollowList/>
    </div>
  </div>



    </div>
      </Provider>
  );
};
export default Tuiter;

