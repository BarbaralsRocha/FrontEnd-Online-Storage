import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';
import Products from './Products';

export default class ListProducts extends React.Component {
state= {
  categorieList: [],
  list: [],
  search: '',
  id: '',
  isEmpty: false,
}

async componentDidMount() {
  const categorieAPI = await getCategories();
  this.setState({ categorieList: categorieAPI });
}

handleChangeSearch=({ target: { name, value } }) => {
  this.setState({ [name]: value });
}

handleChange= async ({ target }) => {
  const { id } = target;
  const listProducts = await getProductsFromCategoryAndQuery(id, '');
  const list = listProducts.results;
  this.setState({ list, id, isEmpty: list.length === 0 });
}

handleClick = async (id) => {
  const { search } = this.state;
  const listProducts = await getProductsFromCategoryAndQuery(id, search);
  const list = listProducts.results;
  this.setState({ list, isEmpty: list.length === 0, search: '' });
}

render() {
  const { categorieList, list, search, id, isEmpty } = this.state;
  return (
    <div>
      <input
        type="text"
        name="search"
        value={ search }
        onChange={ this.handleChangeSearch }
        data-testid="query-input"
      />
      <button
        type="button"
        data-testid="query-button"
        onClick={ () => this.handleClick(id) }
      >
        Search
      </button>
      <Link to="/cart" data-testid="shopping-cart-button">
        <AiOutlineShoppingCart />
      </Link>
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <Categories categorie={ categorieList } listCategories={ this.handleChange } />
      <Products listProducts={ list } isEmpty={ isEmpty } />
    </div>
  );
}
}
