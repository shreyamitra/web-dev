
import NavigationSidebar from "../navigationsidebar/index.js";
import Explorecomponent from "./explorecomponent.js";
import WhoToFollowList from "../whotofollowlist/index.js";

//
(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
<!--       <div class="col-2 col-md-2 col-lg-1 col-xl-2">-->
<div class="col-2 col-md-2 col-lg-1 col-xl-2">
<!--        </div>-->
            ${NavigationSidebar()}
            

        </div>
<!--           <div class=" col-xxl-6 col-xl-6 col-lg-8 col-md-8 col-sm-10">-->
<div class="col-10 col-lg-7 col-xl-6 col-xxl-6 col-md-10 col-sm-10 col-xs-10">
           ${Explorecomponent()}
           
        </div>
<!--        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">-->
<div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);




// import NavigationSidebar from "../NavigationSidebar/";
// // import Explorecomponent from "./Explorecomponent.js";
// import WhoToFollowList from "../WhoToFollowList.js";
//
// (function ($) {
//     $('#wd-explore').append(`
//         <div class="row mt-2">
//         <div class="col-2 col-md-2 col-lg-1 col-xl-2">
//             ${NavigationSidebar()}
//             </div>
//      <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
//        ${WhoToFollowList()}
//      </div>
//
//
//             </div>
//
//     `);
// })($);
//
// <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
//     ${WhoToFollowList()}
// </div>
//
// <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
//     ${WhoToFollowList()}
// </div>


// </div>
// ${Explorecomponent()}
// <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
//     ${WhoToFollowList()}
// </div>
// </div>