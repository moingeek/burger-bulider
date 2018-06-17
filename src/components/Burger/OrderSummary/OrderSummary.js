import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
const orderSummary = (props) => {
    const indrigentSummary = Object.keys(props.indrigents)
    .map(igKey => {
        return (<li key = {igKey}>
            <span style= {{textTransform:'capitalize'}}> {igKey} </span> : 
            {props.indrigents[igKey]} 
            </li>);
    });
    
    return(
        <Aux>
            <h3> Your Order </h3>
            <p> A delicious burger with the following Ingredients:</p>
            <ul>
                {indrigentSummary}
            </ul>
            <p>Continue to check out? </p>
            <Button btnType="Danger" clicked={props.purchaseCancled}> CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}> CONTINUE </Button>
        </Aux>
    );
}

export default orderSummary;