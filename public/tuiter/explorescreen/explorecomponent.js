import PostSummaryList from "../PostSummaryList/index.js";

const Explorecomponent = () => {
    return(`
            <div class="row">
            
        <form id="search-form">
            <div class="search" >
                <input type="text" name="search" class="round" placeholder="Search Tuiter"/>
                <div class = "pos-relative-right">
                    <a href="explore-settings.html" class = "bg-color-light-gray">
                        <img  src= "https://img.icons8.com/fluency/344/gear.png"
                              height= "30px" width="30px">
                    </a>
                </div>
            </div>

        </form>
           </div>
           <ul class="nav mb-2 nav-tabs">
                     <ul class="nav nav-tabs top-50">
            <li class="nav-item">
                <a class="nav-link active fg-color-gray" href="navigation.html">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fg-color-blue" href="navigation.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fg-color-blue" href="navigation.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fg-color-blue" href="navigation.html">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fg-color-blue" href="navigation.html">Entertainment</a>
            </li>
        </ul>

           </ul>
           
                  <li class="list-group-item">
                <img  src= "https://content.fortune.com/wp-content/uploads/2020/05/SpaceX-NASA-Launch-04.jpg"
                     height= "350px" width="690px"
                >
                <p class = "bottom-left picture-font">
                    SpaceX's Starship
                </p>

            </li>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default Explorecomponent;
