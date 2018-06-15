import React , {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BulidControls from '../../components/Burger/BulidControls/BulidControls';

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
        totalPrice : 14
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
    }

    render(){
        const disabledInfo ={
            ...this.state.indrigents
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Burger indrigents={this.state.indrigents}/>
                <BulidControls 
                    indrigentAdded= {this.addIndrigentHandler}
                    indrigentRemoved = {this.removeIndrigentHandler}
                    disabled = {disabledInfo}
                    price = {this.state.totalPrice}/>
            </Aux>
        );
    }
}
export default BurgerBulider;