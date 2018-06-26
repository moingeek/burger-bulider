import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';


import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component {
    state = {
        indrigents: null,
        price :0
    }

    componentWillMount (){
        const query = new URLSearchParams(this.props.location.search);
        const indrigent = {};
        let price = 0;
        for (let param of query.entries()){
            if(param[0] === 'Price'){
                price = param[1];
            }else{
                indrigent[param[0]] = +param[1];
            }  
        }
        this.setState({indrigents:indrigent, totalPrice : price})
    }

    checkoutCancelled = () =>{
        this.props.history.goBack();
    }

    checkoutContinued =()=> {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return(
            <div>
                <CheckoutSummary indrigents={this.state.indrigents}
                checkoutCancelled={this.checkoutCancelled}
                checkoutContinued={this.checkoutContinued}/>

                <Route 
                path={this.props.match.path +'/contact-data'} 
                render={(props)=> (<ContactData indrigents={this.state.indrigents} {...props}/>)} />
            </div>
        );
    }

}

export default Checkout;