import React,{useState,useContext} from 'react'
import EcommerceContext from '../context/EcommerceContext';
import {useHistory} from "react-router-dom"

const EditProductForm = () => 
{

    const [productFormData, setProductFormData] = useState({
        title:"",
        unitPrice:"",
        description :"",
        qty : 0,
        category : "",
        isBestseller:false,
        costPrice :0
    })

    const formSubmitHandler = (evt)=>
    {

        evt.preventDefault(); 

    }


    return (
        <section id="register-section">
        
        <h1>Edit Product</h1>

        <form onSubmit={formSubmitHandler}>

            <div className="form-control">
                <label htmlFor="title">Item Title</label>
                <input type="text" id="title" value={productFormData.title} onChange={(evt)=>{

                    setProductFormData({
                        ...productFormData,
                        title : evt.target.value
                    })
                }}/>
            </div>

            <div className="form-control">
                <label htmlFor="price">Unit Price</label>
                <input type="text" id="price" value={productFormData.unitPrice} onChange={(evt)=>{

                    setProductFormData({
                        ...productFormData,
                        unitPrice : parseFloat(evt.target.value)
                    })
                    }}  />
            </div>

            <div className="form-control">
                <label htmlFor="costPrice">Cost Price</label>
                <input type="text" id="costPrice" value={productFormData.costPrice} onChange={(evt)=>{

                    setProductFormData({
                        ...productFormData,
                        costPrice : parseFloat(evt.target.value)
                    })
                    }}  />
            </div>

            <div className="form-control">
                <label htmlFor="qty">Qty</label>
                <input type="text" id="qty" value={productFormData.qty} onChange={(evt)=>{

                    setProductFormData({
                        ...productFormData,
                        qty : parseFloat(evt.target.value)
                    })
                    }}  />
            </div>

            <div className="form-control">
                <label htmlFor="details">Details</label>
                <textarea id="details" value={productFormData.description} onChange={(evt)=>{

                    setProductFormData({
                        ...productFormData,
                        description : evt.target.value
                    })
                    }}></textarea>
            </div>

            <div className="form-control">
                <label htmlFor="details">Product Category</label>
                <select  onChange={(evt)=>{

                        setProductFormData({
                            ...productFormData,
                            category : evt.target.value
                        })

                }}>
                    <option value="Chair">Chair</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Smart Phones">Smart Phones</option>
                    <option value="IOT">IOT Devices</option>
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="details">Select Best Seller</label>

                 Yes <input type="radio" name="bestseller" value="true" onChange={(evt)=>{

                        setProductFormData({
                            ...productFormData,
                            isBestseller : evt.target.value
                        })
                 }}/>
                 No <input type="radio" name="bestseller" value="false" onChange={(evt)=>{

                        setProductFormData({
                            ...productFormData,
                            isBestseller : evt.target.value
                        })
                 
                 
                     }} />
            </div>

            <div className="form-control">
                <button className="btn" type="submit">Edit Product</button>
            </div>

        </form>

     </section>
    )
}

export default EditProductForm