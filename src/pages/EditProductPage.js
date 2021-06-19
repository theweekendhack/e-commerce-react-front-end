import React from 'react'
import EditProductForm from '../components/EditProductForm';
import Header from "../components/Header";

const EditProductPage = () => {
    return (
        <div id="container">
            <Header/>
            <main>
                <EditProductForm/>        
            </main>
 
        </div>
    )
}

export default EditProductPage
