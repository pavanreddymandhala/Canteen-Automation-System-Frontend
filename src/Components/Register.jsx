import axios from "axios";
import {useState} from "react";
import {Link} from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import "../Components/Registration.css";


function Register(){
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [password,setPassword] = useState("");
    const [isError, setIsError] = useState(false);



    async function handleSubmit(event){
        event.preventDefault();
        localStorage.setitem("pass",event.target.elements.confirm_password.value);

    }
    return(
        <div className="register-container">

      <form className="register-form" onSubmit={handleSubmit}>

        <h2 className="font-sans text-center text-4xl mt-10 mb-2 font-bold">

          Registration Form

        </h2>

        <p className="text-center capitalize mb-2 hover:uppercase">

          Fill the below registration form

        </p>
        <TextField

          className="px-2"

          id="outlined-basic" label="username" variant="outlined"

          type="text"

          name="userName"

          inputProps={{

            maxLength: 15,

          }}

          required

          placeholder="username"

          onChange={(event) => {

            setUsername(event.target.value);

          }}

        />

        <br/>
        <TextField
          className="px-2"
          id="outlined-basic" label="mobile" variant="outlined"
          type="tel"
          error={isError}
          name="mobile"
          inputProps={{
            maxLength: 10, 

          }}
          required

          placeholder="mobile"

          onChange={(event) => {

            setMobile(event.target.value );

            if (event.target.value.length > 10) {

              setIsError(true);

            }

          }}

        />

         <br/>

        <TextField

          className="px-2"

          id="outlined-basic" label="email" variant="outlined"

          type="text"

          name="email"

          required

          placeholder="email"

          onChange={(event) => {

            setEmail(event.target.value);

          }}

        />

         <br/>

        <TextField

          className="px-2"

          id="outlined-basic" label="password" variant="outlined"

          type="password"

          name="password"

          inputProps={{

            maxLength: 15,

          }}
          required
          placeholder="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
         <br/>
         <TextField
         onPaste={(e)=>{
          e.preventDefault()
          return false;
        }} onCopy={(e)=>{
          e.preventDefault()
          return false;
        }}
          className="px-2"
          id="outlined-basic" label="confirm password" variant="outlined"
          type="password"
          name="confirm_password"
          inputProps={{
            maxLength: 15,
          }}
          required
          placeholder="confirm password"
        />

        <br/>
        <Button variant="contained" type="submit">

          REGISTER

        </Button>

        <Link className="py-3 text-center" to="/">

          Already have an account?{" "}

          <p className="text-blue-600">Click to Login</p>

        </Link>
        </form>
        </div>
    )


}
export default Register;