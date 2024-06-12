import './App.css';
import Header from './Components/Header';
import First from './Components/First';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Staff from "./Components/Staff";
import AddStaff from './Components/AddStaff';
import ListStaff from './Components/ListStaff';
import UpdateStaff from './Components/UpdateStaff';
import StaffLogin from './Components/StaffLogin';
import ViewOrder from './Components/ViewOrder';
import ListProduct from './Components/ListProduct';
import AddToCart from './Components/AddToCart';
//import StaffLogin from './Components/StaffLogin';
//import Register from './Components/Register';
function App() {
  return (
    <div>
    <Header/>
   
    <BrowserRouter>
            <Routes>
              
            <Route path="/" element= {<First />} ></Route>
            <Route path="/staff" element= {<Staff/>} ></Route>
            <Route path="/addstaff" element= {<AddStaff/>} ></Route>
            <Route path="/viewstaff" element= {<ListStaff/>} ></Route>
            <Route path="/updatestaff/:staffId" element= {<UpdateStaff/>} ></Route>
            <Route path="/stafflogin" element= {<StaffLogin/>} ></Route>
            <Route path="/vieworder/:orderId" element= {<ViewOrder/>} ></Route>
            <Route path="/listproduct" element= {<ListProduct/>} ></Route>
            <Route path="/addtocart/:productId" element= {<AddToCart/>} ></Route>
            </Routes>
          </BrowserRouter>  
    </div>
  );
}

export default App;