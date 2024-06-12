import axios from "axios";
const Login_BASE_REST_API_URL = 'http://localhost:8080/staff';
class StaffLoginService{
    createStaffLogin(staffId,canteen_staff){
        return axios.post(Login_BASE_REST_API_URL+'/StafflogIn/'+staffId,canteen_staff)
    }
}
export default new StaffLoginService();
