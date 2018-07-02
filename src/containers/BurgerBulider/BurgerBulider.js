import React , {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BulidControls from '../../components/Burger/BulidControls/BulidControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as BurgerBuliderActions from '../../store/actions/index';


// const INDRIGENTS_PRICES = {
//  Commented due to redux  
//     salad: 10,
//     bacon : 15,
//     cheese :30,
//     meat :60
// }

class BurgerBulider extends Component {
    state = {

        purchasing : false,
    }

    componentDidMount(){
        // axios.get('https://burger-guide-4c32e.firebaseio.com/indrigents.json')
        // .then(response => {
        //     this.setState({indrigents : response.data});
        // });This is comment cause redux async
        this.props.onInitIngredients();
    }

    updatePurchaseState (indrigents) {
        // const indrigents = {
        //     ...this.state.indrigents
        // was giving an old copy for analaysis };
        const sum = Object.keys(indrigents)
        .map(igKey => {
            return indrigents[igKey];
        }).reduce((sum , el ) =>{
            return sum +el;
        },0);
        return sum > 0;
    }

    // addIndrigentHandler = (type) => {
    //     const oldCount = this.state.indrigents[type];
    //     const updatedCount = oldCount +1 ;
    //     const updateIndrigents = {
    //         ...this.state.indrigents
    //     };
    //     updateIndrigents[type] = updatedCount;
    //     const priceAddition = INDRIGENTS_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice + priceAddition;
    //     this.setState({totalPrice : newPrice , indrigents : updateIndrigents})
    //     this.updatePurchaseState(updateIndrigents);
    // }

    // removeIndrigentHandler = (type) =>{
    //     const oldCount = this.state.indrigents[type];
    //     if (oldCount <= 0){
    //         return;
    //     }
    //     const updatedCount = oldCount - 1 ;
    //     const updateIndrigents = {
    //         ...this.state.indrigents
    //     };
    //     updateIndrigents[type] = updatedCount;
    //     const priceDeduction = INDRIGENTS_PRICES[type];
    //     const oldPrice = this.state.totalPrice;
    //     const newPrice = oldPrice -  priceDeduction;
    //     this.setState({totalPrice : newPrice , indrigents : updateIndrigents})
    //     this.updatePurchaseState(updateIndrigents);
    // }

    purchaseHandler = () => {
        this.setState({purchasing : true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing :false});
    }

    purchaseContinueHandler = () => {
        // alert("You Contiue");Due to redux all is commented
        // const queryParams = [];
        // for(let i in this.state.indrigents){
        //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.indrigents[i]));
        // }

        // queryParams.push('Price=' + this.state.totalPrice);

        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname :'/checkout',
        //     search: '?'+queryString
        // });
        this.props.history.push('/checkout');

    }

    render(){
        const disabledInfo ={
            ...this.props.ings
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary =  null;
        
        let burger = <Spinner />;
        if(this.props.ings){
            burger = (
                <Aux>
                    <Burger indrigents={this.props.ings}/>
                    <BulidControls 
                    indrigentAdded= {this.props.onIngredientAdded}
                    indrigentRemoved = {this.props.onIngredientRemoved}
                    disabled = {disabledInfo}
                    purchaseable = {this.updatePurchaseState(this.props.ings)}
                    ordered = {this.purchaseHandler}
                    price = {this.props.price}/>
                </Aux>
                
            );
            orderSummary= <OrderSummary 
                indrigents={this.props.ings} 
                purchaseCancled={this.purchaseCancelHandler}
                purchaseContinue ={this.purchaseContinueHandler}
                price = {this.props.price}/> 
        }
        // if(this.state.loading){
        //     orderSummary = <Spinner />;
        // }
    
        return (
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(BurgerBuliderActions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(BurgerBuliderActions.removeIngredient(ingName)),
        onInitIngredients :() => dispatch(BurgerBuliderActions.initIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( BurgerBulider, axios ));