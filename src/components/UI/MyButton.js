import React from "react";
import './MyButton.css';

const MyButton = ({children, ...props}) => {
    const classes = 'myBtn ' + props.className;

    return (
        <button {...props} className={classes}>
            {children}
        </button>
    );
};

export default MyButton