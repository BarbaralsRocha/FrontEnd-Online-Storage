import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListProducts from '../pages/ListProducts';
import ShopCart from '../pages/ShopCart';
import ProductDetail from '../pages/ProductDetail';

export default class Content extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ ListProducts } />
          <Route path="/cart" component={ ShopCart } />
          <Route
            path="/product/:id"
            component={ ProductDetail }
          />
        </Switch>
      </main>
    );
  }
}
