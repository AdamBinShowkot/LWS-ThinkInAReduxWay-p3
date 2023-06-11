import { Fragment,useEffect,useState } from "react"
import ProductComponent from "./products";
import FormComponent from "./Form";
import { useSelector } from "react-redux";

const HomeComponent=()=>{
    const [products,setProducts]=useState([]);
    const productLists=useSelector((state)=>state.product.products);
    const cartLists=useSelector((state)=>state.cart.cart);

    useEffect(()=>{
        let availableProducts=getProductLists();
        setProducts(availableProducts);
    },[productLists,cartLists]);


    const getProductLists=()=>{
        let newLists=[];
        if(productLists.length){
            productLists.map((pData)=>{
                let cartQty;
                cartLists.map((cartData)=>{
                    if(cartData.productId===pData.id){
                       cartQty=cartData.quantity 
                    }
                });
                const newObj={
                    id:pData.id,
                    name:pData.name,
                    category:pData.category,
                    quantity:cartQty?pData.quantity-cartQty:pData.quantity,
                    price:pData.price,
                    imgUrl:pData.imgUrl,
                    inCart:cartQty?true:false
                }
                newLists=[...newLists,newObj];
            })
        }
        return newLists;
    }
    //console.log(products);
    return(
        <Fragment>
            <title>LWS | Shopping Cart</title>
            <div className="productWrapper">
                <div className="productContainer" id="lws-productContainer">
                    {
                        products.length?products.map((product)=>{
                            return <ProductComponent details={product} key={product.id}/>
                        }):"No Products Found."
                    }
                </div>
                <div>
                    <FormComponent/>
                </div>
            </div>
        </Fragment>
    )
}
export default HomeComponent;