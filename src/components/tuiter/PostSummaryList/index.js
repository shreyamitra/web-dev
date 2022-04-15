import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.json";
import React from 'react';

const PostSummaryList = () => {
    return(
        <ul class = 'list-group'>
            {
        post.map(post => {
            return <PostSummaryItem post = {post}/>

        })
    }
        </ul>
    );




}
export default PostSummaryList;