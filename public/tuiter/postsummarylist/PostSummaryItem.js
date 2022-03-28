const PostSummaryItem = (post) => {
    return(`
        
                    <li class="list-group-item" style = "max-height: 100px">
                <div class = "margin-right-left padded-top-left margin-right top-font">
                    <p class = "fg-color-gray top-font">${post.topic}</p>
                <br>
                    <p class = "middle-font move-down">${post.userName} <i class="fa fa-check-circle 
                    " style="font-size:10px; color:black"></i>
                    <inline class = "fg-color-gray" style="font-size:10px">
                        - ${post.time}h
                    </inline></p>
                    <br>
                <p class = "description-font move-up text-white"> ${post.title}
                 
                </p>
                    <img class = "move-img-up float-left rounded-corners-all-around" src= ${post.image}
                          height= "80px" width="80px">

                </div>
            </li>
        
            
        `);
}
export default PostSummaryItem;


