import { Fragment } from "react"
import { useDispatch } from "react-redux";
import { addNewCart } from "../../../redux/cart/action";

const ProductComponent=({details})=>{
    const dispatch=useDispatch();
    const {name,category,price,quantity,id,imgUrl}=details;

    const handleNewCart=(productData)=>{
        console.log("called")
        let {id,price,inCart}=productData;
        const newObj={
            productId:id,
            price,
            quantity:1,
            type:inCart?"update":"insert"
        }

        dispatch(addNewCart(newObj));
    }
    return(
        <Fragment>
            <div className="lws-productCard">
                <img className="lws-productImage" src={imgUrl?imgUrl:""} alt="product" />
                <div className="p-4 space-y-2">
                    <h4 className="lws-productName">{name?name:""}</h4>
                    <p className="lws-productCategory">{category?category:""}</p>
                    <div className="flex items-center justify-between pb-2">
                        <p className="productPrice">BDT <span className="lws-price">{price?price:""}</span></p>
                        <p className="productQuantity">QTY <span className="lws-quantity">{quantity?quantity:"0"}</span></p>
                    </div>
                    <button 
                    className="lws-btnAddToCart"
                    onClick={()=>handleNewCart(details)}
                    disabled={quantity>0?false:true}
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
export default ProductComponent;