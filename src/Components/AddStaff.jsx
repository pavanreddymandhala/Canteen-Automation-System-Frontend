import React, {useState, useEffect} from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import StaffService from '../Service/StaffService';
import { useForm,register,handleSubmit } from 'react-hook-form';
   const AddStaff = () => {
    const [ staffName, setStaffName] = useState('')
    const [ staffEmail, setStaffEmail] = useState('')
    const {register,handleSubmit,formState:{errors}}=useForm();
    
    const navigate = useNavigate();
    const onSubmit = (data) => {
        //e.preventDefault();
        const staff = {staffName, staffEmail}
        StaffService.createStaff(staff).then((response) =>{
            console.log(response.data)
            navigate('/viewstaff');
        }).catch(error => {
            console.log(error)

        })
        setStaffName('');
        setStaffEmail('');
    }
    return(
        <div>
        <br /><br />
        <div className = "container">
             <div className = "row">
                 <div className = "card col-md-6 offset-md-3 offset-md-3">
                  <br></br>
                   <h2 className="text-center"> Add Staff</h2>
                     <div className = "card-body">
                         <form onSubmit={handleSubmit(onSubmit)}>
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Staff Name:</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter the staff Name"
                                     name = "staffName"
                                     className = "form-control"
                                     value = {staffName}
                                     {...register("staffName",{required: "You must specify staff Name",
                                     minLength: {
                                       value: 3,
                                       message: "Staff name field is required"
                                     }
                                   })}

                                     onChange = {(data) => setStaffName(data.target.value)}
                                 />
                                 {errors.staffName && ( <small className="text-danger">{errors.staffName.message}</small>)}
          <br></br>
                             </div>

                             <div className = "form-group mb-2">
                                 <label className = "form-label">Staff Email :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter the Email"
                                     name = "staffEmail"
                                     className = "form-control"
                                     value = {staffEmail}
                                     {...register("staffEmail",{required: "You must specify Staff Email",
                                     minLength: {
                                       value: 3,
                                       message: "Staff Email field is required"
                                     }
                                   })}
                                     onChange = {(data) => setStaffEmail(data.target.value)}
                                 />
                                {errors.staffEmail && ( <small className="text-danger">{errors.staffEmail.message}</small>)}
                             </div>

                             <button className = "btn btn-success" >Submit </button>
                            
                         </form>

                     </div>
                 </div>
             </div>

        </div>

     </div>
    )
}
export default AddStaff;