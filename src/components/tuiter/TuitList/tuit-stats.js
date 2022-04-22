import { useDispatch } from "react-redux";
import React from "react";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({ type: "like-tuit", tuit });
    };
    return (
        <div className="row mt-2">
            <div className="col">
                <i className="far fa-comment me-2 "/>
                {tuit.stats.comments}
            </div>
            <div className="col">
                <i className="fas fa-retweet me-2 "/>
                {tuit.stats.retuits}
            </div>
            <div className="col">
        <span onClick={likeTuit}>
          {tuit.liked && (
              <i className="fas fa-heart me-1" style={{color: tuit.liked ? 'red': "white"}}/>
          )}
            {!tuit.liked && <i className="far fa-heart me-1"/>}
            {tuit.stats && tuit.stats.likes}
        </span>
            </div>
            <div className="col">
                <i className="fas fa-external-link-alt me-2" />
            </div>
        </div>
    );
};
export default TuitStats;