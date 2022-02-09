import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default class ListProducts extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
        />
        <Link to="/cart" data-testid="shopping-cart-button">
          <AiOutlineShoppingCart />
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
