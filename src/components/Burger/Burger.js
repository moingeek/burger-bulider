import React from 'react';
import classes from './Burger.css';
import BurgerIndrigents from './BurgerIndrigents/BurgerIndrigents';
const burger = (props) => {
    return(
        <div className={classes.Burger}> 
            <BurgerIndrigents type="bread-top"/>
            <BurgerIndrigents type="cheese"/>
            <BurgerIndrigents type="meat"/>
            <BurgerIndrigents type="bread-bottom"/>
        </div>
    );
}

export default burger;