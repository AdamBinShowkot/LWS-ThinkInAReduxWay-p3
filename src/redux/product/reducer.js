import {
    ADD_PRODUCT
} from './actionType'



const initialState={
    products:[]
}


const generateProductId=(states)=>{
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
        case ADD_PRODUCT:
            const {name,category,imgUrl,price,quantity}=action.payload;
            return{
                ...state,
                products:[
                    ...state.products,
                    {
                        id:generateProductId(state.products),
                        name,
                        category,
                        imgUrl,
                        price,
                        quantity,
                        requestedQty:0,
                        remainingQty:quantity
                    }
                ]
            }
        default:
            return state;
    }
}
export default reducer;

