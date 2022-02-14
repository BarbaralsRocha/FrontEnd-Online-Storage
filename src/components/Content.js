import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListProducts from '../pages/ListProducts';
import ShopCart from '../pages/ShopCart';
import ProductDetail from '../pages/ProductDetail';
import Checkout from '../pages/Checkout';

export default class Content extends React.Component {
  render() {
    return (
      <main className="main-content">
        <Switch>
          <Route exact path="/" component={ ListProducts } />
          <Route path="/cart" component={ ShopCart } />
          <Route
            path="/product/:id"
            component={ ProductDetail }
          />
          <Route path="/checkout" component={ Checkout } />
        </Switch>
      </main>
    );
  }
}
