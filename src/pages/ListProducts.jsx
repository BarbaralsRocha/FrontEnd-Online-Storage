import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';
import Categories from './Categories';

export default class ListProducts extends React.Component {
state= {
  categorieList: '',
}

async componentDidMount() {
  const categorieAPI = await getCategories();
  this.setState({ categorieList: categorieAPI });
}

render() {
  const { categorieList } = this.state;
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
      <Categories categorie={ categorieList } />
    </div>
  );
}
}
