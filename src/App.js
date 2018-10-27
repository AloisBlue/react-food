import React from 'react';
import { Route } from 'react-router-dom';

// Third Party imports
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from './components/Login';
import Forgotpassword from './components/Forgotpassword';
import Admin from './components/Admin';
import Menu from './components/Menu';
import Order from './components/Order';

class App extends React.Component {
  render() {
    return (
      <div  className="App">
        <Route path="/" exact component={Landing} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/forgotpassword" exact component={Forgotpassword} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/menu" exact component={Menu} />
        <Route path="/orders" exact component={Order} />
      </div>
    );
  }
}

export default App;
