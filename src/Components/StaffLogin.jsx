import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { useForm } from 'react-hook-form';
import { useNavigate ,Link} from 'react-router-dom';
import StaffLoginService from '../Service/StaffLoginService';

    const StaffLogin = () => {
      const [staffId,setStaffId]=useState('')
    const [staffName, setStaffName] = useState('')
    const [staffEmail, setStaffEmail]= useState('')
    const {register,handleSubmit,formState:{errors}}=useForm();
    const navigate = useNavigate();
    

    const onSubmit = (data) => {
        //data.preventDefault();
        const canteen_staff = {staffId, staffName,staffEmail}

       StaffLoginService.createStaffLogin(staffId,canteen_staff).then((response) =>{
            console.log(response.data)
            alert("LOGIN SUCCESFULL")
            navigate('/vieworder')
            
        }).catch(error => {
           
            alert("invalid credentials");
        })
    }
    return(
        <div>
        <br /><br />
        <div className = "container">
             <div className = "row">
                 <div className = "card col-md-6 offset-md-3 offset-md-3">
                  <br></br>
                   <h2 className="text-center"> STAFF LOGIN</h2>
                     <div className = "card-body">
                         <form onSubmit={handleSubmit(onSubmit)}>
                             <div className = "form-group mb-2">
                                 <label className = "form-label">StaffId:</label>
                                 <input
                                     type = "Number"
                                     placeholder = "Enter the StaffId"
                                     name = "staffId"
                                     className = "form-control"
                                     value = {staffId}
                                     

                                     onChange = {(data) => setStaffId(data.target.value)}
                                 />
                                 {errors.staffId&& ( <small className="text-danger">{errors.staffId.message}</small>)}
          <br></br>
                               
                             </div>

                             
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Staff Name :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter the staffName"
                                     name = "staffName"
                                     className = "form-control"
                                     value = {staffName}
                                     {...register("staffName",{required: "You must specify a staffName",
                                     minLength: {
                                       value: 3,
                                       message: "wrong staffName"
                                     }
                                   })}
                                     onChange = {(data) => setStaffName(data.target.value)}
                                 />
                                {errors.staffName && ( <small className="text-danger">{errors.staffName.message}</small>)}
                             </div>

                             <button className = "btn btn-success"  >Submit </button>
                           
                            
                         </form>

                     </div>
                 </div>
             </div>

        </div>

     </div>
    )
}
export default StaffLogin;