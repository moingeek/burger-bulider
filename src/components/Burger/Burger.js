import React from 'react';
import classes from './Burger.css';
import BurgerIndrigents from './BurgerIndrigents/BurgerIndrigents';
const burger = (props) => {
    let transformedIndrigents = Object.keys(props.indrigents)
    .map(igKey => {
        return [...Array(props.indrigents[igKey])].map((_, i) =>{
            return <BurgerIndrigents key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) =>{
        return arr.concat(el)
    },[]);

    if(transformedIndrigents.length === 0){
        transformedIndrigents = <p>Please start adding indrigents</p>
    }    
    //console.log(transformedIndrigents);
    
    return(
        <div className={classes.Burger}> 
            <BurgerIndrigents type="bread-top"/>
            {transformedIndrigents}
            <BurgerIndrigents type="bread-bottom"/>
        </div>
    );
}

export default burger;