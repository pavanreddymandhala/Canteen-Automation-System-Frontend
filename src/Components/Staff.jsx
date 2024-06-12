import React from "react";
class Staff extends React.Component{
    render(){
        return(
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Add Staff</h4>
        <p class="card-text">If you want to Add any Staff Click here </p>
        <a href="/addstaff" class="btn btn-primary">Add Staff</a>
      </div>
    </div>
  </div>
 
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">View Staff</h4>
        <p class="card-text">If you want view staff click here.</p>
        <a href="/viewStaff" class="btn btn-primary">View Staff</a>
      </div>
    </div>
  </div>
</div>
        )
    }
}
export default Staff;