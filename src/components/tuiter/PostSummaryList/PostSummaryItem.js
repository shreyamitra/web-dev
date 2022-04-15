import React from 'react';
const PostSummaryItem = (
 {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"
        }
    }

) => {
    return(
        <div>
                    <li className="list-group-item" style ={{ maxHeight: 100 }}>
                <div className = "margin-right-left padded-top-left margin-right top-font">
                    <p className = "fg-color-gray top-font">{post.topic}</p>

                    <p className = "middle-font move-down">{post.userName} <i className="fa fa-check-circle"
                     style={{ fontSize: 10, color: "black"}}></i>
                    <inline className = "fg-color-gray" style= {{fontSize: 10}}>
                        - {post.time}
                    </inline></p>

                <p className = "description-font move-up text-white"> {post.title}

                </p>
                    <img className = "move-img-up float-left rounded-corners-all-around" src= {post.image}
                          height= "80px" width="80px"/>

                </div>
            </li>
            </div>


        );
}
export default PostSummaryItem;


