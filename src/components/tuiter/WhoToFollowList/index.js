import WhoToFollowListItem from "./ListItem.js";
// import who from "../data/who.json";
import {useSelector} from "react-redux";
import React from 'react';

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
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