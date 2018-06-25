import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBulider from './containers/BurgerBulider/BurgerBulider';
import CheckOut from './containers/Checkout/Checkout';


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBulider />
          <CheckOut />
        </Layout>
      </div>
    );
  }
}

export default App;
