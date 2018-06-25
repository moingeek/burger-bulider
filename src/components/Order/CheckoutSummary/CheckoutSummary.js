import React from 'react';
import classes from '../CheckoutSummary/CheckoutSummarty.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) =>{
    return(
        <div className={classes.CheckoutSummary}>
        <h1> We hope it tastes well! </h1>
        <div style={{width: '100%', margin:'auto'}}>
            <Burger indrigents={props.indrigents}/>
        </div>
        <Button  
        btnType="Danger"
        clicked>CANCEL</Button>
        <Button  
        btnType="Success"
        clicked>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;