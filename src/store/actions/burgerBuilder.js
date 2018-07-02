import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
export const  addIngredient = (name) => {
    return{
        type:actionTypes.ADD_INGREDIENT,
        ingredientName:name
    };
};

export const  removeIngredient = (name) => {
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
    };
};

export const setIngredients = (ingredients) =>{
    return{
        type:actionTypes.SET_INGREDIENTS,
        ingredients : ingredients
    };
};

export const initIngredients = () =>{
    return dispatch =>{
        axios.get('https://burger-guide-4c32e.firebaseio.com/indrigents.json')
        .then(response => {
            dispatch(setIngredients(response.data))
            // this.setState({indrigents : response.data});
        });
    };
};