import React from 'react';
import {Link} from 'react-router-dom';

// import images
import main1 from '../img/main1.jpg';
import dec from '../img/dec.jpg';
import dec2 from '../img/dec2.jpg';
import dec3 from '../img/dec3.jpg';
import dec4 from '../img/dec4.jpg';
import dec5 from '../img/dec5.jpg';
import dec6 from '../img/dec6.jpg';
import dec7 from '../img/dec7.jpg';

class Landing extends React.Component {
	state = {}
	render() {
	return(
	<div>
		 <div class="wrapper">
      <div class="outer">

        <div class="top">

        </div>
        <div class="slider" id="slider">
            <img src={main1} alt="main1" width="1200" height="250">
            </img>
        </div>
        <div class="banner" align="right">
          <p>Food Fast Food Sellers</p>
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
        <div class="subbanner" align="center">
          <li><img src={dec} height="100" width="130" alt="" />          </li>
    	    <li><img src={dec2} height="100" width="130" alt="" /></li>
          <li><img src={dec3} height="100" width="130" alt="" /></li>
          <li><img src={dec4} height="100" width="130" alt="" /></li>
          <li><img src={dec5} height="100" width="130" alt="" /></li>
          <li><img src={dec6} height="100" width="130" alt="" /></li>
          <li><img src={dec7} height="100" width="130" alt="" /></li>
          <li><img src={dec2} height="100" width="130" alt="" /></li>
        </div>
        <div class="content-left">
          <h1>Welcome to Food Fast Food Sellers</h1>
          <p>
              We at the Food Fast Food Sellers believe in that a customer should be served well with
              his preferences. We welcome all into our caffes and also our online services are always
              available.<br/>
              Meet our qualified team of waiters and waitresses who are well in quenching your thirst <br/>
              and your hunger
          </p>
          <h3>Our Pride</h3>
          <p>
              We pride ourselves among the best in the whole continent of Africa. We were rated the best by <br/>
              Synnovate.<br/>
              Remember your satisfaction is our pride
          </p>
        </div>
        <div class="rightside">
          <h4>News</h4>
          <p>
               Starting from the next year we are going to extend our services to the Northern part of Africa.<br/>
               You are thus welcome
          </p>
          <h4>Offers</h4>
          <p>

              Check on our menus for the hot friendly offers available in this festive season
          </p>
        </div>
        <div class="bottom-banner" align="center">
          <li><img src="./img/main2.jpg" width="1200" height="50" alt="" /></li>
        </div>
        <div class="footer">
          <p>&copy; 2018 Rosewood Food Sellers - All Rights Reserved.</p>
        </div>
      </div>
    </div>
	</div>
	);
	}
}

export default Landing;
