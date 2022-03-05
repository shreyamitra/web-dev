const NavigationSidebar = () => {
    return(`
<!--            <div class="list-group">-->
<!--                <a class="list-group-item" href="/">-->
<!--                    <i class="fab fa-twitter"></i></a>-->
<!--            &lt;!&ndash; continue the rest of the list &ndash;&gt;-->
<!--            </div>-->
<!--            <div class="d-grid mt-2">-->
<!--                <a href="tweet.html"-->
<!--                   class="btn btn-primary btn-block rounded-pill">-->
<!--                    Tweet</a>-->
<!--            </div>-->

        <div class="list-group">
            <i class="fab fa-twitter fa-2x" style="color: black"></i>
            <a href="home.html" class="list-group-item list-group-item-action fg-color-black" aria-current="true">
                <i class="fa fa-home" style="font-size:22px"></i> Home
            </a>
<!--d-inline-->
<!--            displayinline bootstrap-->
            <a href="explore.html" class="list-group-item list-group-item-action active">
                <i class="fa fa-hashtag" style="font-size:22px"></i> Explore</a>
            <a href="notifications.html" class="list-group-item list-group-item-action">
                <i class="fa fa-bell" style="font-size:22px"></i> Notifications</a>
            <a href="messages.html" class="list-group-item list-group-item-action">
                <i class="fa fa-envelope" style="font-size:22px"></i> Messages</a>
            <a href="bookmarks.html" class="list-group-item list-group-item-action">
                <i class="fa fa-bookmark" style="font-size:22px"></i>
                Bookmarks</a>
            <a href="lists.html" class="list-group-item list-group-item-action">
                <i class="fa fa-check-square" style="font-size:22px"></i> Lists</a>
            <a href="profile.html" class="list-group-item list-group-item-action">
                <i class="fa fa-user" style="font-size:22px"></i>
                Profile</a>
            <a href="more.html" class="list-group-item list-group-item-action">
                <i class="fa fa-reorder" style="font-size:22px"></i>
                More</a>
            <br>
            <button class="btn btn-primary override-bs btn-block rounded-pill">
                Tweet
            </button>
        </div>
    `);
}
export default NavigationSidebar;
