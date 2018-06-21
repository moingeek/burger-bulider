import React , {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BulidControls from '../../components/Burger/BulidControls/BulidControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

const INDRIGENTS_PRICES = {
    salad: 10,
    bacon : 15,
    cheese :30,
    meat :60
}

class BurgerBulider extends Component {
    state = {
        indrigents:{
            salad :0,
            bacon: 0,
            cheese :0,
            meat :0
        },
        totalPrice : 14,
        purchaseable : false,
        purchasing : false,
        loading : false
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
        this.setState({loading:true});
        const order = {
            ingredients : this.state.indrigents,
            price : this.state.totalPrice,
            customer : {
                name: 'Suleman Khan',
                address :{
                    street : 'Sion',
                    zipCode :'400601',
                    Country : 'India'
                },
                email : 'test@test.com'
            },
            deliveryMethod : 'fastest'
        }
        axios.post('/orders.json',order)
        .then(response => {
            this.setState({loading:false,purchasing:false});
        })
        .catch(error => {
            this.setState({loading:false,purchasing:false});
        });
    }

    render(){
        const disabledInfo ={
            ...this.state.indrigents
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary =  <OrderSummary 
        indrigents={this.state.indrigents} 
        purchaseCancled={this.purchaseCancelHandler}
        purchaseContinue ={this.purchaseContinueHandler}
        price = {this.state.totalPrice}/> 
        
        if(this.state.loading){
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   {orderSummary}
                </Modal>
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
    }
}
export default BurgerBulider;