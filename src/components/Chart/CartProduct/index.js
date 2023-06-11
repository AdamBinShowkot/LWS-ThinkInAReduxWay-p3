import { Fragment } from "react"
import { useDispatch } from "react-redux";
import { 
    incrementCart,
    decrementCart,
    deleteCart
} from "../../../redux/cart/action";

const ProductCart=({infos})=>{
    const dispatch=useDispatch();
    const {id,price,quantity,details}=infos;

    const handleCartIncrement=(productId)=>{
        dispatch(incrementCart(productId));
    }
    const handleCartDecrement=(productId)=>{
        dispatch(decrementCart(productId));
    }
    const handleDeleteCart=(productId)=>{
        dispatch(deleteCart(productId));
    }
    return(
        <Fragment>
            <div className="cartCard">
                <div className="flex items-center col-span-6 space-x-6">

                <img className="lws-cartImage" src={details.imgUrl?details.imgUrl:""} alt="product" />
        
                <div className="space-y-2">
                    <h4 className="lws-cartName">{details.name}</h4>
                    <p className="lws-cartCategory">{details.category}</p>
                    <p>BDT <span className="lws-cartPrice">{details.price}</span></p>
                </div>
                </div>
                <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                
                <div className="flex items-center space-x-4">
                    <button 
                    className="lws-incrementQuantity"
                    onClick={()=>handleCartIncrement(id)}
                    disabled={details.quantity-quantity>0?false:true}
                    >
                        <i className="text-lg fa-solid fa-plus"></i>
                    </button>
                    <span className="lws-cartQuantity">{quantity}</span>
                    <button 
                    className="lws-decrementQuantity"
                    onClick={()=>handleCartDecrement(id)}
                    disabled={quantity>0?false:true}
                    >
                        <i className="text-lg fa-solid fa-minus"></i>
                    </button>
                </div>
            
                <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{price*quantity}</span></p>
                </div>
        
                <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button 
                className="lws-removeFromCart"
                onClick={()=>handleDeleteCart(id)}
                >
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
                </div>
            </div>
        </Fragment>
    )
}
export default ProductCart;