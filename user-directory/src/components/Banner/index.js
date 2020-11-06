import React from "react";
import "./banner.css";

function Banner (props) {
    return (
        <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            {props.children}
        </div>
    )
};

export default Banner;