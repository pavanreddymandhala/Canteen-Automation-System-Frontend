import axios from "axios";
const Login_BASE_REST_API_URL = 'http://localhost:8080/order';
class CartService{
    createCart(order){
        return axios.post(Login_BASE_REST_API_URL+'/save/order',order)
    }
    getOrders()
    {
        return axios.get(Login_BASE_REST_API_URL+'/getorders')
    }
    deleteOrder(orderId)
    {
        return axios.delete(Login_BASE_REST_API_URL+'/delete/order/'+orderId)
    }
}
export default new CartService();