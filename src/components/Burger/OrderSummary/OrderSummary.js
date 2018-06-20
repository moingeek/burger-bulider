import React , {Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component{
    componentWillUpdate(){
        console.log('[OrderSummary] will update');
    }

    render(){
        const indrigentSummary = Object.keys(this.props.indrigents)
        .map(igKey => {
        return (<li key = {igKey}>
            <span style= {{textTransform:'capitalize'}}> {igKey} </span> : 
            {this.props.indrigents[igKey]} 
            </li>);
    });
        return(
            <Aux>
                <h3> Your Order </h3>
                <p> A delicious burger with the following Ingredients:</p>
                <ul>
                    {indrigentSummary}
                </ul>
                <p> <strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to check out? </p>
                <Button btnType="Danger" clicked={this.props.purchaseCancled}> CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}> CONTINUE </Button>
            </Aux>
        );
    }
} 


export default OrderSummary;