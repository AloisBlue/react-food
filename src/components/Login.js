import React from 'react';
import {Link} from 'react-router-dom';

// import images
import main2 from '../img/main2.jpg';

class Login extends React.Component {
  state = {};

  render() {
    return(
      <div class="wrapper">
      <div class="outer">

       <div class="top">

       </div>
       <div class="slider">
         <img src={main2} alt="slider 1" width="1200" height="250" />
       </div>
       <div class="banner" align="right">
         <p>Fast Food Fast Sellers</p>
       </div>
       <div class="topnav">
         <nav>
           <ul class="nav">
               <li><Link to="/" class="active">Welcome</Link></li>
               <li><Link to="/orders">Orders</Link></li>
               <li><Link to="/menu">Menu</Link></li>
               <li><Link to="/admin">Admin</Link></li>
               <li class="righter"><Link to="/signup">Sign Up</Link></li>
               <li class="righter" id="or"><p>or</p></li>
               <li class="righter"><Link to="/login">Login</Link></li>
           </ul>
         </nav>
       </div>
       <div class="content">
         <h1 align="center">Log In</h1>
         <p align="center">
           Sign in to your Rosewood Food Sellers account
         </p>
         <div class="signer">
           <form id="signupForm">
               <label htmlFor="email">Email</label>
               <input type="text" id="email" name="email" placeholder="example@example.com"
               />

               <label htmlFor="password1">Enter Password</label>
               <input type="password" id="password" name="password1" placeholder="Enter Your Password"
               />

               <button type="submit">Submit
               </button>
           </form>
           <Link to="/forgotpassword" class="forgotpassword">Forgot password ?</Link>
           </div>
       </div>
       <div class="footer">
         <p>&copy; 2018 Rosewood Food Sellers - All Rights Reserved.</p>
       </div>
     </div>
   </div>
    );
  }
}

export default Login;
