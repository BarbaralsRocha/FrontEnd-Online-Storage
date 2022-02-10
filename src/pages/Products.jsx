import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Products extends React.Component {
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
                <button
                  type="button"
                  data-testid="product-add-to-cart"
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
