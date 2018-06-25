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
    render() {
        return(
            <div>
                <CheckoutSummary indrigents={this.state.indrigents}/>
            </div>
        );
    }

}

export default Checkout;