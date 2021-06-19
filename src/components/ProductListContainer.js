import ProductLine from "./ProductLine";
import EcommerceContext from "../context/EcommerceContext";
import {useContext, useEffect} from "react";


const ProductListContainer = () => {


    //use a context
    const {products} = useContext(EcommerceContext);

    useEffect(()=>{
        console.log("blah")
        console.log(products)
    },[])


    return (
        
        <>
            <div id="heading-area" className="grid grid-col-4">

                <h2>Product</h2>
                <h2>Quantity</h2>
                <h2>Unit Price</h2>
                <h2>Operations</h2>
            </div>

            <div id="product-rows-area">

                {products.map(product=>( <ProductLine id={product._id} key={product._id}title={product.title} unitPrice={product.unitPrice} qty={product.qty} />))}

            </div>

         </>
    )
}

export default ProductListContainer
