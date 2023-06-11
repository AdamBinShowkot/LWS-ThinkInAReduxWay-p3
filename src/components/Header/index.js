import { Fragment } from "react"
import { useSelector } from "react-redux"
import Logo from '../../assets/images/logo.png'

const Header=({setHandler})=>{
    const carts=useSelector((state)=>state.cart.cart);
    const totalCartQty=carts.reduce((accum,current)=>accum+current.quantity,0);


    const handleActiveComponent=(componentName)=>{
        if(componentName==="Home"){
            setHandler((state)=>{
                return{
                    ...state,
                    chartActive:false,
                    homeActive:true
                }
            })
        }else if(componentName==="Cart"){
            setHandler((state)=>{
                return{
                    ...state,
                    homeActive:false,
                    chartActive:true
                }
            })
        }
    }
    return(
        <Fragment>
            <div className="navBar">
                <a href="#" onClick={()=>handleActiveComponent("Home")}>
                    <img src={Logo} alt="LWS" className="max-w-[140px]" />
                </a>
                <div className="flex gap-4">
                    <a href="#" onClick={()=>handleActiveComponent("Home")} className="navHome" id="lws-home"> Home </a>
                    <a href="#" onClick={()=>handleActiveComponent("Cart")} className="navCart" id="lws-cart">
                    <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                    <span id="lws-totalCart">{totalCartQty?totalCartQty:"0"}</span>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}
export default Header;