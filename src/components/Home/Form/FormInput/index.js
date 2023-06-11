import { Fragment } from "react"

const FormInput=({inputProps})=>{
    const {label,type,id,name,value,setValue}=inputProps;
    const handleInputChange=(e)=>{
        //console.log(e.target.name);
        const {name,value}=e.target;

        setValue((state)=>{
            return{
                ...state,
                [name]:value
            }
        })
    }
    return(
        <Fragment>
            <label htmlFor={id}>{label?label:""}</label>
            <input 
            className="addProductInput" 
            id={id?id:""} 
            type={type?type:""}
            value={value}
            name={name}
            onChange={handleInputChange}
            required />
        </Fragment>
    )
}
export default FormInput;