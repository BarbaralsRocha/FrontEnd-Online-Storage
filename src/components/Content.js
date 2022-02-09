import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListProducts from '../pages/ListProducts';
import ShopCart from '../pages/ShopCart';

export default class Content extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ ListProducts } />
          <Route path="/cart" component={ ShopCart } />
        </Switch>
      </main>
    );
  }
}
