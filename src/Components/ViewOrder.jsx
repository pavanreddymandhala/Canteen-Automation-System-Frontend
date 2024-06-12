import React,{useState, useEffect} from 'react'
import CartService from '../Service/CartService';


const ViewOrder = () => {

    const [orders, setOrder] = useState([])
    
    useEffect(() => {
       
        getOrders();
    }, [])
    const getOrders=()=>{
        CartService.getOrders().then((response) => { 
            setOrder(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteOrder = (orderId) => {
        CartService.deleteOrder(orderId).then((response) =>{
         getOrders();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }

    return (
        <div className = "container">
            <h2 class = "text-center"> Orders </h2>
            <table class = "table table-bordered table-striped">
                <thead>
                    <th><h4>  Order Id </h4></th>
                    <th> <h4>  Date </h4></th>
                   <th> <h4> Status</h4> </th>
                    
                     <th> <h4> Product Name </h4></th> 
                    <th> <h4> Product quantity </h4></th>
                    <th> <h4> Product price </h4></th>
                    


                    <th> <h4>Actions</h4> </th>
                </thead>
                <tbody>
                    {
                        orders.map(
                            order =>
                            
                            <tr key = {order.orderId}>
                                 <td> {order.orderId} </td>
                                <td> {order.date} </td>
                                <td> {order.status} </td>
                                 <td>{order.product[0].productName}</td> 
                                <td>{order.product[0].quantity}</td>
                                <td>{order.product[0].price}</td>
                         
                                <button className = "btn btn-danger" onClick = {() => deleteOrder(order.orderId)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                            </tr>

                        )

                    }
                </tbody>
            </table>
        </div>
    )
}

export default ViewOrder;