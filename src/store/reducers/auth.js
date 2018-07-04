import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';


const intialState ={
    token:null,
    userId:null,
    error:null,
    loading:false
};

const authStart = (state,action) =>{
    return updateObject(state,{error:null,loading:true});
}

const authSuccess = (state,action)=>{
    return updateObject(state,{
        error:null,
        loading:false,
        token:action.idToken,
        userId:action.userId
    });
}

const authFail = (state,action) => {
    return updateObject(state,{
        error:action.error,
        loading:false,
    });
}


const authreducer = (state=intialState,action)=>{
    switch(action.type){
        case actionTypes.AUTH_START: return authStart(state,action)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state,action)
        case actionTypes.AUTH_FAIL: return authFail(state,action)
        default:
            return state;
    }
};

export default authreducer;