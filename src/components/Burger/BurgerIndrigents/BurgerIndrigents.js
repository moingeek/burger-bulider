import React , {Component} from 'react';
import classes from './BurgerIndrigents.css';
import PropTypes from 'prop-types';


class BurgerIndrigents extends Component{
    render(){
        let indrigents = null;

        switch(this.props.type){
            case('bread-bottom'):
                indrigents= <div className={classes.BreadBottom}> </div>;
                break;
            case('bread-top'):
                indrigents=(
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case('meat'):
                indrigents= <div className={classes.Meat}> </div>;
                break;
            case('cheese'):
                indrigents= <div className={classes.Cheese}> </div>;
                break;
            case('salad'):
                indrigents= <div className={classes.Salad}> </div>;
                break;
            case('bacon'):
                indrigents= <div className={classes.Bacon}> </div>;
                break;
            default:
                indrigents = null;
        }
        return indrigents;
    }
}

BurgerIndrigents.propTypes={
    type:PropTypes.string.isRequired
};


export default BurgerIndrigents;