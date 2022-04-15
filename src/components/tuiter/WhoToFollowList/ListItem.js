import React from "react";



const WhoToFollowListItem = ({
    who = {
      avatarIcon: "https://cdn.shopify.com/s/files/1/2341/9769/products/WebNASAInsigniaBlackHoodieFrontClose_large.jpg?v=1572641414",
      userName: "NASA",
      handle: "NASA",
    },

}) => {
    return(
    <div>
        <li className="list-group-item" style ={{maxHeight: 70}}>
                    <img className = "float-left rounded-corners-all-around-100" src= {who.avatarIcon}
                         height= "50px" width="50px"/>

                        <p className="bold-it" style ={{fontSize: 16}}>{who.userName} <i className="fa fa-check-circle " style={{fontSize: 10, color: "black"}}></i>
                            <br></br> <inline className=" fg-color-gray" style = {{fontSize: 12}}>@{who.handle} </inline>
                        </p>
                    <button className="btn btn-primary override-bs button-left rounded-corners-all-around-100">
                        Follow
                    </button>

                </li>
       </div>
            );
}
export default WhoToFollowListItem;

