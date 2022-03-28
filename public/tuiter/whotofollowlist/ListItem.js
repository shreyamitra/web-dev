// const WhoToFollowListItem = (who) => {
//     return     {   avatarIcon: '../../images/virgin.png', userName: 'Virgin Galactic', handle: 'virgingalactic', },
//
//
// }



const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item" style = "max-height: 70px">
                    <img class = "float-left rounded-corners-all-around-100" src= ${who.avatarIcon}
                         height= "50px" width="50px">

                        <p class="bold-it" style ="font-size: 16px">${who.userName} <i class="fa fa-check-circle " style="font-size:10px; color:black"></i>
                            <br> <inline class=" fg-color-gray" style ="font-size: 12px">@${who.handle} </inline>
                        </p>
                    <button class="btn btn-primary override-bs button-left rounded-corners-all-around-100">
                        Follow
                    </button>

                </li>
       
            `);
}
export default WhoToFollowListItem;

