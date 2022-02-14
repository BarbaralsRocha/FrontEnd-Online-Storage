import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsGroupedByQuantity } from '../services/api';
import '../css/Product.css';

export default class Product extends React.Component {
  stockProducts = (product) => {
    const listProductsCart = getProductsGroupedByQuantity();
    const findProduct = listProductsCart.find((products) => products.id === product.id);
    if (findProduct) {
      if (findProduct.quantity >= product.available_quantity) {
        return true;
      }
      return false;
    }
    return false;
  }

  render() {
    const { product, addToCart } = this.props;
    return (
      <div className="product-content">
        <Link
          data-testid="product-detail-link"
          to={ `/product/${product.id}` }
        >
          <div data-testid="product">
            <p>{product.title}</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>
              $
              { product.price }
            </p>
          </div>
        </Link>
        {
          product.shipping.free_shipping
                    && <p data-testid="free-shipping">FRETE GRÁTIS </p>
        }
        <button
          type="button"
          data-testid="product-add-to-cart"
          disabled={ this.stockProducts(product) }
          onClick={ () => addToCart(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
