import React from 'react';
import classes from './BulidControls.css';
import BulidControl from './BulidControl';

const controls = [
    {label : 'Salad', type:'salad'},
    {label : 'Cheese', type:'cheese'},
    {label : 'Bacon', type:'bacon'},
    {label : 'Meat', type:'meat'},
];


const bulidControls = (props) => (
    <div className={classes.BulidControls}>
        <p> Current Price :<strong> {props.price.toFixed(2)} </strong> </p>
        {controls.map(ctrl => (
            <BulidControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added = {() => props.indrigentAdded(ctrl.type)}
            removed = {() => props.indrigentRemoved(ctrl.type)}
            disabled = {props.disabled[ctrl.type]}/>
        ))}
    </div>
);

export default bulidControls;