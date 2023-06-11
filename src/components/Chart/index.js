import { Fragment,useEffect,useState } from "react"
import BillCard from "./BillCard";
import ProductCart from "./CartProduct";
import { useSelector } from "react-redux";

const ChartComponent=()=>{
    const [filterCart,setFilterCarts]=useState([]);
    const carts=useSelector((state)=>state.cart.cart);
    const products=useSelector((state)=>state.product.products);


    useEffect(()=>{
        const cartLists=getCartProducts();
        setFilterCarts(cartLists);
    },[carts])

    const getCartProducts=()=>{
        let newCarts=[];

        if(carts.length){
            carts.map((cart)=>{
                let details=products.filter((product)=>product.id===cart.productId);
                //console.log(details[0])
                const newObj={
                    id:cart.id,
                    productId:cart.productId,
                    quantity:cart.quantity,
                    price:cart.price,
                    details:details[0]
                }
                newCarts=[...newCarts,newObj];
            })
        }
        return newCarts;
    }
    return(
        <Fragment>
            <title>Cart</title>
            <div className="container 2xl:px-8 px-2 mx-auto">
                <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                <div className="cartListContainer">
                    <div className="space-y-6">
                        {
                            filterCart.length?filterCart.map((filter)=>{
                                return <ProductCart infos={filter} key={filter.id}/>
                            }):"Cart Is Empty."
                        }
                    </div>

                    <div>
                       <BillCard/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ChartComponent;