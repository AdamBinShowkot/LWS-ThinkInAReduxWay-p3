import {
    ADD_NEW_CART,
    DECREMENT_CART,
    INCREMENT_CART,
    DELETE_CART
} from './actionType';

const initialState={
    cart:[]
}

const getMaxId=(states)=>{
    let maxId;
    if(states.length){
        maxId=states.reduce((currentMax,state)=>Math.max(currentMax,state.id),0);
    }else{
        maxId=0;
    }
    return maxId+1;
}


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_NEW_CART:
            const {productId,quantity,price,type}=action.payload;
            switch(type){
                case "insert":
                    return{
                        ...state,
                        cart:[
                            ...state.cart,
                            {
                                id:getMaxId(state.cart),
                                productId,
                                quantity,
                                price
                            }
                        ]
                    }
                case "update":
                    return{
                        ...state,
                        cart:state.cart.map((c)=>{
                            if(c.productId===productId){
                                return{
                                    ...c,
                                    quantity:c.quantity+1
                                }
                            }else{
                                return{
                                    ...c
                                }
                            }
                        })
                    }
            }
        case INCREMENT_CART:
            return{
                ...state,
                cart:state.cart.map((cData)=>{
                    if(cData.id===action.payload){
                        return{
                            ...cData,
                            quantity:cData.quantity+1
                        }
                    }
                    return{
                        ...cData
                    }
                })
            }
        case DECREMENT_CART:
            return{
                ...state,
                cart:state.cart.map((cData)=>{
                    if(cData.id===action.payload){
                        return{
                            ...cData,
                            quantity:cData.quantity-1
                        }
                    }
                    return{
                        ...cData
                    }
                })
            }
        case DELETE_CART:
            return{
                ...state,
                cart:state.cart.filter((cData)=> cData.productId!==action.payload)
            }
        default:
            return state;
    }
}
export default reducer;