import React, {useState, useEffect} from 'react';
import { useNavigate ,Link,useParams} from 'react-router-dom';
import CartService from '../Service/CartService';
import ProductService from '../Service/ProductService';
const AddToCart = () => {
    const [status, setStatus] = useState('')
  
    const [product, setProduct]=useState('')
    const {productId} = useParams();
    useEffect(() => {
        getProductwithId()
    }, [])
    const getProductwithId=()=>{
        ProductService.getProductByProductId(productId).then((response)=>{
        setProduct(response.data)
        console.log(response.data)
    }).catch(error=>{console.log(error)})
}
    const navigate = useNavigate();
    const saveProductToCart= (e) => {
         e.preventDefault();
         let products=[];
         products.push(product);
         const order = {product:products,status,date:new Date()}
        
        CartService.createCart(order).then((response) =>{
            console.log(response.data)
         
        }).catch(error => {
            console.error((error.response.data))
        })
    }
   

    return(
        <div>
        <br /><br />
        <div className = "container">
             <div className = "row">
                 <div className = "card col-md-6 offset-md-3 offset-md-3">
                  
                     <div className = "card-body">
                         <form>
                             <div className = "form-group mb-2">
                              <h3>Are you sure to add to the cart</h3>  
                              <input
                                     type = "text"
                                     placeholder = "Enter the status"
                                     name = "status"
                                     className = "form-control"
                                     value = {status}
                                     onChange = {(data) => setStatus(data.target.value)}
                                    />
                                    
                             </div>
                             <button className = "btn btn-success" onClick = {(e) => saveProductToCart(e)} >yes</button>
                              <button className = "btn btn-danger" onClick={()=>navigate("/")}>Cancel</button> 
                            
                         </form>

                     </div>
                 </div>
             </div>

        </div>

     </div>
    )
}
export default  AddToCart;