import React,{Component} from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component {
    state = {
        indrigents: {
            salad :1,
            meat:1,
            cheese:1,
            bacon:1
        }
    }

    componentDidMount (){
        const query = new URLSearchParams(this.props.location.search);
        const indrigent = {};
        for (let param of query.entries()){
            indrigent[param[0]] = +param[1];
        }
        this.setState({indrigents:indrigent})
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
            </div>
        );
    }

}

export default Checkout;