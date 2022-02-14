import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {
  addProductToCart,
  getCategories,
  getProductsFromCategoryAndQuery,
  getSize,
  addProductsSize,
  getCartProducts } from '../services/api';
import Categories from './Categories';
import Products from './Products';
import '../css/ListProducts.css';

export default class ListProducts extends React.Component {
state= {
  categorieList: [],
  list: [],
  search: '',
  id: '',
  isEmpty: false,
  size: 0,
}

async componentDidMount() {
  const categorieAPI = await getCategories();
  this.setState({ categorieList: categorieAPI, size: getSize() });
}

addToCart = (product) => {
  addProductToCart(product);
  addProductsSize(getCartProducts().length);
  this.setState({ size: getSize() });
}

handleChangeSearch=({ target: { name, value } }) => {
  this.setState({ [name]: value });
}

handleChange= async ({ target }) => {
  const { id } = target;
  console.log(id);
  const listProducts = await getProductsFromCategoryAndQuery(id, '');
  const list = listProducts.results;
  console.log(list);
  this.setState({ list, id, isEmpty: list.length === 0 });
}

handleClick = async (id) => {
  const { search } = this.state;
  const listProducts = await getProductsFromCategoryAndQuery(id, search);
  const list = listProducts.results;
  this.setState({ list, isEmpty: list.length === 0, search: '' });
}

render() {
  const { categorieList, list, search, id, isEmpty, size } = this.state;
  return (
    <div>
      <div className="search-top-content">
        <div className="search-container">
          <input
            type="text"
            name="search"
            value={ search }
            onChange={ this.handleChangeSearch }
            data-testid="query-input"
          />
          <BiSearchAlt
            type="button"
            data-testid="query-button"
            onClick={ () => this.handleClick(id) }
            className="search-icon"
          >
            Search
          </BiSearchAlt>
        </div>
        <nav className="shop-cart">
          <Link to="/cart" data-testid="shopping-cart-button">
            <AiOutlineShoppingCart />
          </Link>
          <p data-testid="shopping-cart-size">{size}</p>
        </nav>
      </div>
      <p data-testid="home-initial-message" className="search-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <div className="categories">
        <Categories categorie={ categorieList } listCategories={ this.handleChange } />
      </div>
      <div className="products">
        <Products
          listProducts={ list }
          isEmpty={ isEmpty }
          addToCart={ this.addToCart }
        />
      </div>
    </div>
  );
}
}
