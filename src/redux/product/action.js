import {
    ADD_PRODUCT
} from './actionType'

export const addNewProduct=(productInfo)=>{
    console.log(productInfo);
    return{
        type:ADD_PRODUCT,
        payload:productInfo
    }
}