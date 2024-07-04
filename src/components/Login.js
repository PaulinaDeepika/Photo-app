import React from "react";
import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";
const Login = ()=>{
    return(
      <div className='wraper'>
          <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='UserName' required />
          <FaUser className='icon'/>
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required />
          <FaLock className='icon'/>
        </div>
        <div className="remember-forget">
          <label><input type="checkbox" />Remember me</label><br></br>
          <a href="#">Forget password</a>
        </div>
        <button type="Submit">Login</button>
        <div className="register-link">
        <p>Don't have an Account? <a href="#">Register</a></p>
        </div>
      </form>
      </div>
    );
}
 export default Login;