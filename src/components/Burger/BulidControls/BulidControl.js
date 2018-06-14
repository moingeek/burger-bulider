import React from 'react';
import classes from './BulidControls.css';
const bulidControl = (props) => (
    <div className={classes.BulidControl}>
        <div className={classes.Label}>
            {props.label}
        </div>
        <button className={classes.Less}>Less </button>
        <button className={classes.Morel}>More </button>
    </div>
);

export default bulidControl;