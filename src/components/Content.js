import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListProducts from '../pages/ListProducts';

export default class Content extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ ListProducts } />
        </Switch>
      </main>
    );
  }
}
