import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBulider from './containers/BurgerBulider/BurgerBulider';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBulider />
        </Layout>
      </div>
    );
  }
}

export default App;
