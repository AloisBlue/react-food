import React from 'react';
import {Link} from 'react-router-dom';

// import image
import main2 from '../img/main2.jpg';

class Order extends React.Component {
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
                <li><Link to="/order">Orders</Link></li>jpg
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li class="righter"><Link to="/signup">Sign Up</Link></li>
                <li class="righter" id="or"><p>or</p></li>
                <li class="righter"><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </div>
        <div class="content">
          <h1>Orders</h1>
          <p>
               You can make any order with us Rosewood Food Sellers
          </p>
          <div class="order">
            <form name="orderform">
              <h2>Check Below for a list of available items </h2>

              <label htmlFor="name">Name</label>
              <input type="text" name="customer" value="" id="cust" size="50" placeholder="Enter Name" />
              <label htmlFor="address">Address</label>
              <input type="text" name="address" value="" id="addr" size="50" placeholder="Enter Address" />
              <label htmlFor="city">City</label>
              <input type="text" name="city" value="" id="city" size="50" placeholder="Enter City" />
              <label htmlFor="phone">Phone</label>
              <input type="text" name="phone" value="" id="phon" size="50" placeholder="Enter Phone No." />

              <h4>Select the amout</h4>
              <input type="radio" name="sizes" value="quarter kilo" />Quarter Kilogram<br />
              <input type="radio" name="sizes" value="half kilo" />Half Kilogram<br />
              <input type="radio" name="sizes" value="three-quarter kilo" />Three-Quarter Kilogram<br />
              <input type="radio" name="sizes" value="kilo" />One Kilogram<br />

              <h4>Select food item</h4>
              <input type="radio" name="size" value="chips" />French Fries(Chips)<br />
              <input type="radio" name="size" value="chicken" />Chicken<br />
              <input type="radio" name="size" value="sausage" />Sausage<br />
              <input type="radio" name="size" value="popcorns" />Pop corns<br />
              <input type="radio" name="size" value="ommellete" />Ommellete<br />
              <input type="radio" name="size" value="pizza" />Pizza<br />
              <input type="radio" name="size" value="sandwich" />Sandwich<br />
              <input type="radio" name="size" value="kebab" />Keba<br />

              <h4>How many items of amount selected do you want?</h4>
              <select class="selectitems" name="" id="sel">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <h4>Payment options</h4>
              <input type="radio" name="pay" value="mpesa" />M-pesa<br />
              <input type="radio" name="pay" value="mastercard" />MASTER CARD<br />
              <br />

              <input type="button" name="" onclick="send()" value="SEND" />
              <br />
              <br />
              <h4 class="ordercolor">You have ordered for the following(History):</h4>
              <div id="lblValues" class="lblValues"></div>
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

export default Order;
