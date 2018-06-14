import React , {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBulider extends Component {
    state = {
        indrigents:{
            salad :0,
            bacon: 0,
            cheese :0,
            meat :0
        }
    }
    render(){
        return (
            <Aux>
                <Burger indrigents={this.state.indrigents}/>
                <div> Bulid controls </div>
            </Aux>
        );
    }
}
export default BurgerBulider;