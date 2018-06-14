import React , {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBulider extends Component {
    state = {
        indrigents:{
            salad :1,
            bacon: 1,
            cheese :2,
            meat :2
        }
    }
    render(){
        return (
            <Aux>
                <Burger />
                <div> Bulid controls </div>
            </Aux>
        );
    }
}
export default BurgerBulider;