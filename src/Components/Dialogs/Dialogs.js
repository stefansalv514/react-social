import React from "react";
import './Dialogs.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "joker"},
        {id: 2, name: "venom"},
        {id: 3, name: "homer"},
    ];

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "hello"},
        {id: 3, message: "droppy"},
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    // [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    //     <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
    // ];

    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className="dialogs">

            <div className="dialogs__items">
                {dialogsElements}
            </div>

            <div className="dialogs__messages">
                {messagesElements}
            </div>

        </div>
    )
}


export default Dialogs;