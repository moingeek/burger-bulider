import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSucess = (id,orderData) =>{
    return{
        type:actionTypes.PURCHASE_SUCESS,
        orderId:id,
        orderData:orderData
    }
};

export const purchaseBurgerFail = (error) =>{
    return{
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
        
    }
};

export const purchaseBurgerStart = () =>{
    return {
        type:actionTypes.PURCHASE_BURGER_START
    };
}


export const purchaseBurger = (orderData) =>{
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post( '/orders.json', orderData )
        .then( response => {
            dispatch(purchaseBurgerSucess(response.data.name,orderData))
            // this.setState( { loading: false } );
            // this.props.history.push( '/' );
        } )
        .catch( error => {
            dispatch(purchaseBurgerFail(error))
            // this.setState( { loading: false } );
        } );
    }

}