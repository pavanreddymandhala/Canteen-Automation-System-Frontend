import React,{useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import ProductService from '../Service/ProductService';
const ListProduct = () => {

    const [productName, setProductName] = useState([])
    
    useEffect(() => {
       
        getProducts();
    }, [])
    const getProducts=()=>{
        ProductService.getProduct().then((response) => { 
            setProductName(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteProduct= (productId) => {
        ProductService.deleteProduct(productId).then((response) =>{
            getProducts();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }

    return (
        <div className = "container">
            <h2 class = "text-center"> Product Info </h2>
            <table class = "table table-bordered table-striped">
                <thead>
                    <th><h4>  Product Id </h4></th>
                    <th> <h4> Product name </h4></th>
                    <th> <h4> Price</h4> </th>
                    <th> <h4> Quantity</h4> </th>
                    <th> <h4>Actions</h4> </th>
                </thead>
                <tbody>
                    {
                        productName.map(
                            products =>
                            
                            <tr key = {products.productId}>
                                <td> {products.productId} </td>
                                <td> {products.productName} </td>
                                <td> {products.price} </td>
                                <td> {products.quantity} </td>
                                
                                <Link className="btn btn-info" to={`/addtocart/${products.productId}`} >Add to cart</Link>
                                <button className = "btn btn-danger" onClick = {() => deleteProduct(products.productId)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                            </tr>

                        )

                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListProduct;