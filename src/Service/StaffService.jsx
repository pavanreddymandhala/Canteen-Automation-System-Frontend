import axios from 'axios';

const STAFF_BASE_REST_API_URL = 'http://localhost:8080/staff';
class StaffService{
    createStaff(canteenStaff){
        return axios.post(STAFF_BASE_REST_API_URL+'/save/staff',canteenStaff)
    }
    getStaff(){
        return axios.get(STAFF_BASE_REST_API_URL+'/getstaff')
    }
    getStaffByStaffId(staffId){
        return axios.get(STAFF_BASE_REST_API_URL+'/getCanteenStaff'+'/'+staffId)
    }
    updateStaff(staffId,staff){
        return axios.put(STAFF_BASE_REST_API_URL+'/updateCanteenStaff'+'/'+staffId, staff)
    }
    deleteStaff(staffId){
        return axios.delete(STAFF_BASE_REST_API_URL + '/deleteCanteenStaff'+'/' + staffId);
    }


}
export default new StaffService();
