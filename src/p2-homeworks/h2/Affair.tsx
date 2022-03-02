import React from 'react'
import {AffairType} from "./HW2";
import classes from "./Affairs.module.css";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    return (
        <div className={classes.affair}>
            <div className={classes.affairItem}>{props.affair.name}</div>
            <div className={classes.priority}>[{props.affair.priority}]</div>
            <div className={classes.boxButton}>
            <button className={classes.buttonAffair} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair;
