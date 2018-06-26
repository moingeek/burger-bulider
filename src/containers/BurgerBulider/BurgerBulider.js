import React , {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BulidControls from '../../components/Burger/BulidControls/BulidControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INDRIGENTS_PRICES = {
    salad: 10,
    bacon : 15,
    cheese :30,
    meat :60
}

class BurgerBulider extends Component {
    state = {
        indrigents: null,
        totalPrice : 14,
        purchaseable : false,
        purchasing : false,
        loading : false
    }

    componentDidMount(){
        axios.get('https://burger-guide-4c32e.firebaseio.com/indrigents.json')
        .then(response => {
            this.setState({indrigents : response.data});
        });
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
        this.setState({purchaseable : sum > 0});
    }

    addIndrigentHandler = (type) => {
        const oldCount = this.state.indrigents[type];
        const updatedCount = oldCount +1 ;
        const updateIndrigents = {
            ...this.state.indrigents
        };
        updateIndrigents[type] = updatedCount;
        const priceAddition = INDRIGENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice : newPrice , indrigents : updateIndrigents})
        this.updatePurchaseState(updateIndrigents);
    }

    removeIndrigentHandler = (type) =>{
        const oldCount = this.state.indrigents[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1 ;
        const updateIndrigents = {
            ...this.state.indrigents
        };
        updateIndrigents[type] = updatedCount;
        const priceDeduction = INDRIGENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice -  priceDeduction;
        this.setState({totalPrice : newPrice , indrigents : updateIndrigents})
        this.updatePurchaseState(updateIndrigents);
    }

    purchaseHandler = () => {
        this.setState({purchasing : true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing :false});
    }

    purchaseContinueHandler = () => {
        // alert("You Contiue");
        const queryParams = [];
        for(let i in this.state.indrigents){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.indrigents[i]));
        }

        queryParams.push('Price' + this.state.totalPrice);

        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname :'/checkout',
            search: '?'+queryString
        });
    }

    render(){
        const disabledInfo ={
            ...this.state.indrigents
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary =  null;
        
        let burger = <Spinner />;
        if(this.state.indrigents){
            burger = (
                <Aux>
                    <Burger indrigents={this.state.indrigents}/>
                    <BulidControls 
                    indrigentAdded= {this.addIndrigentHandler}
                    indrigentRemoved = {this.removeIndrigentHandler}
                    disabled = {disabledInfo}
                    purchaseable = {this.state.purchaseable}
                    ordered = {this.purchaseHandler}
                    price = {this.state.totalPrice}/>
                </Aux>
            );
            orderSummary= <OrderSummary 
                indrigents={this.state.indrigents} 
                purchaseCancled={this.purchaseCancelHandler}
                purchaseContinue ={this.purchaseContinueHandler}
                price = {this.state.totalPrice}/> 
        }
        if(this.state.loading){
            orderSummary = <Spinner />;
        }
    
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
export default withErrorHandler(BurgerBulider, axios);