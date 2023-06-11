import { Fragment, useState } from "react"
import FormInput from "./FormInput";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../../redux/product/action";

const FormComponent=()=>{
    const [productValue,setProductValue]=useState({
        name:"",
        category:"",
        imgUrl:"",
        price:"",
        quantity:""
    });
    const dispatch=useDispatch();

    const handleAddNewProduct=(e)=>{
        e.preventDefault();
        dispatch(addNewProduct(productValue));
        setProductValue({
            name:"",
            category:"",
            imgUrl:"",
            price:"",
            quantity:""
        });
        //console.log(productValue);
    }
    return(
        <Fragment>
            <div className="formContainer">
                <h4 className="formTitle">Add New Product</h4>
                <form onSubmit={handleAddNewProduct} className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
                    <div className="space-y-2">
                        <FormInput
                        inputProps={{
                            label:"Product Name",
                            id:"lws-inputName",
                            type:"text",
                            name:"name",
                            value:productValue.name,
                            setValue:setProductValue
                        }}
                        />
                    </div>
                    <div className="space-y-2">
                        <FormInput
                        inputProps={{
                            label:"Category",
                            id:"lws-inputCategory",
                            type:"text",
                            name:"category",
                            value:productValue.category,
                            setValue:setProductValue
                        }}
                        />
                    </div>
                    <div className="space-y-2">
                        <FormInput
                        inputProps={{
                            label:"Image Url",
                            id:"lws-inputImage",
                            type:"text",
                            name:"imgUrl",
                            value:productValue.imgUrl,
                            setValue:setProductValue
                        }}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 pb-4">
                        <div className="space-y-2">
                            <FormInput
                            inputProps={{
                                label:"Price",
                                id:"lws-inputPrice",
                                type:"number",
                                name:"price",
                                value:productValue.price,
                                setValue:setProductValue
                            }}
                            />
                        </div>
                        <div className="space-y-2">
                            <FormInput
                            inputProps={{
                                label:"Quantity",
                                id:"lws-inputQuantity",
                                type:"number",
                                name:"quantity",
                                value:productValue.quantity,
                                setValue:setProductValue
                            }}
                            />
                        </div>
                    </div>
                    <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
                </form>
            </div>
        </Fragment>
    )
}
export default FormComponent;