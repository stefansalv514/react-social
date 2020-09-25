import React from "react";
import './../Dialogs.css';


const Message = (props) => {
    return (
        <div className="dialogs__private">{props.message}</div>
    )
}


export default Message;