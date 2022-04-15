import React from "react";

const NavigationSidebar = (    {
                                active = 'explore'
                               })  => {
    return(

<div>
        <div className="list-group">
            <i className="fab fa-twitter fa-2x" style={{color: "black"}}></i>
            <a href="home.html"
            className= "list-group-item list-group-item-action fg-color-black" aria-current="true">
                <i className="fa fa-home " style={{fontSize: 22}}></i> Home
            </a>
                        <a href="explore.html" className="list-group-item list-group-item-action active">
                            <i className="fa fa-hashtag" style={{fontSize: 22}}></i> Explore</a>
                        <a href="notifications.html" className="list-group-item list-group-item-action">
                            <i className="fa fa-bell" style={{fontSize: 22}}></i> Notifications</a>
                        <a href="messages.html" className="list-group-item list-group-item-action">
                            <i className="fa fa-envelope" style={{fontSize: 22}}></i> Messages</a>
                        <a href="bookmarks.html" className="list-group-item list-group-item-action">
                            <i className="fa fa-bookmark" style={{fontSize: 22}}></i>
                            Bookmarks</a>
                        <a href="lists.html" className="list-group-item list-group-item-action">
                            <i className="fa fa-check-square" style={{fontSize: 22}}></i> Lists</a>
                        <a href="profile.html" className="list-group-item list-group-item-action">
                            <i className="fa fa-user" style={{fontSize: 22}}></i>
                            Profile</a>
                        <a href="more.html" className="list-group-item list-group-item-action">
                            <i className="fa fa-reorder" style={{fontSize: 22}}></i>
                            More</a>
                        <br></br>
                        <button className="btn btn-primary override-bs btn-block rounded-pill">
                            Tweet
                        </button>

</div>
</div>

             );
}
export default NavigationSidebar;
