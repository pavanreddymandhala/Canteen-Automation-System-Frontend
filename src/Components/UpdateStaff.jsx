import React, {useState, useEffect} from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import StaffService from '../Service/StaffService';
import { useForm} from 'react-hook-form';

const UpdateStaff = () => {
    const [staffName, setStaffName] = useState('')
    const [staffEmail, setStaffEmail] = useState('')
    const {staffId} = useParams();
   const {register,handleSubmit,formState:{errors}}=useForm();
   const navigate = useNavigate();
    const onSubmit = (data) => {
         //data.preventDefault();
        const staff = {staffName,staffEmail}
       if(staffId){
       StaffService.updateStaff(staffId,staff).then((response) =>{
            console.log(response.data)
            //navigate('/viewstaff');
        }).catch(error => {
            console.log(error)
        })
    }
    else{
        alert("There is no record with this Id")
    }
    }
    useEffect(() => {
        StaffService.getStaffByStaffId(staffId).then((response) =>{
            setStaffName(response.data.staffName)
            setStaffEmail(response.data.staffEmail)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    const title = () => {

        if(staffId){
            return <h2 className = "text-center">Update Staff</h2>
        }else{
            return <h2 className = "text-center">Add</h2>
        }
    }
   
    return(
        <div>
        <br /><br />
        <div className = "container">
             <div className = "row">
                 <div className = "card col-md-6 offset-md-3 offset-md-3">
                  {
                   title()
                  }
                     <div className = "card-body">
                         <form onSubmit={handleSubmit(onSubmit)}>
                         
                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Staff Name:</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter The Staff Name"
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
                                 >
                                 </input>
                                 {errors.staffName && ( <small className="text-danger">{errors.staffName.message}</small>)}
                             </div>

                             <div className = "form-group mb-2">
                                 <label className = "form-label"> Staff Email :</label>
                                 <input
                                     type = "text"
                                     placeholder = "Enter Staff Email"
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
                             <button className = "btn btn-success" onClick = {(data) => onSubmit(data)} >Update </button> 
                             <button className = "btn btn-danger" onClick={()=>navigate("/viewStaff")}>Cancel</button>
                         </form>

                     </div>
                 </div>
             </div>
        </div>
     </div>
    )
}
export default UpdateStaff;