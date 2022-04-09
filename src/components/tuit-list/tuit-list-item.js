import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../../../actions/tuits-actions";
import TuitStats from "./tuit-stats";

const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();
  return (

                onClick={() => deleteTuit(dispatch, tuit)}

};

export default TuitListItem;