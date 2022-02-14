import React from 'react';
import PropTypes from 'prop-types';
import Product from '../components/Product';

export default class Products extends React.Component {
  render() {
    const { listProducts, isEmpty, addToCart } = this.props;
    return (
      <div className="products-list">
        {
          isEmpty ? <p>Nenhum produto foi encontrado</p>
            : listProducts.map((product) => (
              <Product
                key={ product.id }
                addToCart={ addToCart }
                product={ product }
              />
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
