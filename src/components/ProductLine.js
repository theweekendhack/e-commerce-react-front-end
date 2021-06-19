import {useContext} from 'react';
import EcommerceContext from '../context/EcommerceContext';
import { Link,useHistory } from 'react-router-dom';

const ProductLine = ({id,title,unitPrice,qty}) => 
{

    const {products,setProducts}= useContext(EcommerceContext);

    const history = useHistory();

    const deleteHandler = ()=>{

     //  alert(`Product with ID ${id} was deleted`);

     const answer = window.confirm("You are about to deleted this product?\nClick OKay to proceed or cancel to cancel");

     if(answer)
     {  

        //Want to remove the product ()

        fetch(`http://localhost:5000/products/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then((json)=>{
            
            alert(json.message);

            //UPDATE THE STATE!!!!!!!

            //Create new array but copy the values from the current state to it
            const newProducts = [...products];

            const index = newProducts.findIndex(product=>product._id === id);


            //This deletes the element at the below index
            newProducts.splice(index,1);

            
            setProducts(newProducts);

            history.push("/");

        })
        .catch(err=>console.log(`Error ${err}`));

     }

  



    }

    const editHandler = ()=>{

      

        history.push(`/products/edit/${id}`);
    }




    return (
        <div className="grid grid-col-4">

            <span>
                <Link to={`/products/${id}`}>
                    {title}
                </Link>
            </span>
            <div>
                <span className="qty">{qty}</span>
            </div>
            
            <span className="unitPrice">${unitPrice.toFixed(2)}</span>
            <span className="extendedPrice">
                <button type="button" className="btn dButton" onClick={deleteHandler}>Delete</button>
                <button type="button" className="btn dButton" onClick={editHandler}>Edit</button>
            </span>
    </div>

    )
}

export default ProductLine
