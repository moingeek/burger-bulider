import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBulider from './containers/BurgerBulider/BurgerBulider';
import CheckOut from './containers/Checkout/Checkout';
import {Route,Switch} from 'react-router-dom';
import Orders from './containers/Orders/Orders'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
              <Route path="/checkout" component={CheckOut} />
              <Route path="/orders" component={Orders} />
              <Route path="/" exact component={BurgerBulider} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
