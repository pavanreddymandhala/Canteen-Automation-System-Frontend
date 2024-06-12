import React,{useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import StaffService from '../Service/StaffService';

const ListStaff = () => {

    const [staff, setStaff] = useState([])
    
    useEffect(() => {
       
        getStaffs();
    }, [])
    const getStaffs=()=>{
        StaffService.getStaff().then((response) => { 
            setStaff(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }
    const deleteStaff = (staffId) => {
        StaffService.deleteStaff(staffId).then((response) =>{
         getStaffs();
 
        }).catch(error =>{
            console.log(error);
        })
         
     }

    return (
        <div className = "container">
            <h2 className= "text-center"> Staff Info </h2>
            <table className= "table table-bordered table-striped">
                <thead>
                    <th><h4>  Staff Id </h4></th>
                    <th> <h4> Staff Name </h4></th>
                    <th> <h4> Staff Email</h4> </th>
                    <th> <h4>Actions</h4> </th>
                </thead>
                <tbody>
                    {
                        staff.map(
                            staffs =>
                            
                            <tr key = {staffs.staffId}>
                                <td> {staffs.staffId} </td>
                                <td> {staffs.staffName} </td>
                                <td> {staffs.staffEmail} </td>
                                
                                <Link className="btn btn-info" to={`/updatestaff/${staffs.staffId}`} >Update</Link>
                                <button className = "btn btn-danger" onClick = {() => deleteStaff(staffs.staffId)}
                                    style = {{marginLeft:"10px"}}>Delete</button>
                            </tr>

                        )

                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListStaff;