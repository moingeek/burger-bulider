import React , {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBulider extends Component {
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