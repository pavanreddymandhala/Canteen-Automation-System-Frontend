import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

class Header extends React.Component {
    render(){
        return (
 <nav class="navbar navbar-expand-lg navbar-light bg-primary" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h4>Canteen-Automation</h4></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link active" aria-current="page"href="/"><h4>Home</h4></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="/stafflogin"><h4>Staff</h4></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="/listproduct"><h4>Customer</h4></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"  href="/staff"><h4>Admin</h4></a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
           
        )
    }
}

export default Header;