import WhatsHappening
    from "./whats-happening";
import TuitList from "../TuitList/index.js"
import React from "react";

const HomeScreen = () => {
    return(
        <div>
            <h2>Home</h2>

            <WhatsHappening/>
            <TuitList/>
        </div>
    )
}
export default HomeScreen;