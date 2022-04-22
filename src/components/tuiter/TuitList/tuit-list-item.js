import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";


const TuitListItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({ type: "delete-tuit", tuit });
    };

    return (
        <div>
            <li className="list-group-item">
                <div className="d-flex">
                    <div className="col-1 ">
                        <img
                            className="img img-responsive rounded-circle"
                            width="100%"
                            src={tuit["avatar-image"]}
                            alt={tuit.postedBy.username}
                        />
                    </div>
                    <div className="col-11">
                        <div>
                            <b style={{ color: "black" }}>{tuit.postedBy.username}</b>
                            {tuit.verified && (
                                <i
    className="fa-solid fa-check-circle"
    style={{color: "black"}}
    />
                            )}
                            <span className="ps-1" style={{ color: "gray" }}>
                @{tuit.handle}
              </span>
                            <i
    onClick={() => deleteTuit(tuit)}
    className="fas fa-remove fa-pull-right"
    />
                        </div>
                        <div style={{ color: "black" }}>
                            <p>{tuit.tuit}</p>
                        </div>
                        {tuit.attachments && tuit.attachments.image && (
                            <img
                                alt=""
                                src={tuit.attachments.image}
                                className="mt-2 rounded"
                                style={{ width: "100%" }}
                            />
                        )}
                        {tuit.attachments && tuit.attachments.video && (
                            <iframe
    width="100%"
    height="400px"
    className="mt-2 rounded"
    style={{width: "100%"}}
    src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
    title="YouTube"
    />

                        )}
                        <TuitStats tuit={tuit} />

                    </div>
                </div>
            </li>

        </div>
    );
};

export default TuitListItem;
