import React from "react";
import "./MyInput.css"

const MyInput = (props) => {
    const classes = 'myInput ' + `${props.className}`
    return (
        <input id="MyInput" className={classes} {...props}/>
    );
};

export default MyInput;