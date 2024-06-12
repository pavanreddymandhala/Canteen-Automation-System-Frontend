import axios from 'axios';

const GROUND_BASE_REST_API_URL = 'http://localhost:8080/product';
class ProductService{
    createProduct(product){
        return axios.post(GROUND_BASE_REST_API_URL+'/save/product',product)
    }
    getProduct(){
        return axios.get(GROUND_BASE_REST_API_URL+'/getproducts')
    }
    getProductByProductId(productId){
        return axios.get(GROUND_BASE_REST_API_URL+'/getProductId'+'/'+productId)
    }
    updateProduct(productId,product){
        return axios.put(GROUND_BASE_REST_API_URL+'/getProductId'+'/'+productId,product)
    }

}
export default new ProductService();