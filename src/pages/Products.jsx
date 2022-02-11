import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsGroupedByQuantity } from '../services/api';

export default class Products extends React.Component {
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
      const { listProducts, isEmpty, addToCart } = this.props;
      return (
        <div>
          {
            isEmpty ? <p>Nenhum produto foi encontrado</p>
              : listProducts.map((product) => (
                <div key={ product.id }>
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
              ))
          }
        </div>
      );
    }
}

Products.propTypes = {
  listProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  isEmpty: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
};
