import WhoToFollowListItem from "./ListItem.js";
import who from "./who.json";
import React from 'react';

const WhoToFollowList = () => {
    return(
        <ul className = 'list-group'>
            {
        who.map(who => {
            return  <WhoToFollowListItem who = {who}/>

        })
    }
        </ul>
    );


};

export default WhoToFollowList;