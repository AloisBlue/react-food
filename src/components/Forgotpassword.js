import React from 'react';
import {Link} from 'react-router-dom';

// import image
import main2 from '../img/main2.jpg';

class Forgotpassword extends React.Component {
  state = {};

  render(){
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
          <h1 align="center">Forgot Password</h1>
          <p align="center">
            Reset your password
          </p>
          <div class="signer">
            <form>
              <label htmlFor="email">Email</label>
              <input type="text" name="" value="" placeholder="Enter your email" id="email"
              />

              <button type="submit">Submit
              </button>
            </form>
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

export default Forgotpassword;
