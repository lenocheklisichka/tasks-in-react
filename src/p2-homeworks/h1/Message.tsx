import React from 'react'
import classes from "./Message.module.css";

type messageType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: messageType) {
    return (
        <div>
            <div className={classes.messageItem}>
                <img src={props.avatar} alt="foto"/>
                <div className={classes.messageBox}>
                    <div>
                        <div className={classes.itemName}>{props.name}</div>
                        <div className={classes.message}>{props.message}</div>
                    </div>
                    <div className={classes.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
