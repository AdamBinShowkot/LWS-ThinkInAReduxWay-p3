import {
    DECREMENT_CART,
    INCREMENT_CART,
    DELETE_CART,
    ADD_NEW_CART
} from './actionType';


export const addNewCart=(productInfo)=>{
    return{
        type:ADD_NEW_CART,
        payload:productInfo
    }
}

export const incrementCart=(productId)=>{
    return{
        type:INCREMENT_CART,
        payload:productId
    }
}

export const decrementCart=(productId)=>{
    return{
        type:DECREMENT_CART,
        payload:productId
    }
}

export const deleteCart=(productId)=>{
    return{
        type:DELETE_CART,
        payload:productId
    }
}