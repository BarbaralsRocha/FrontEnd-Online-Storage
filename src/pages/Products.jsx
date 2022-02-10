import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Products extends React.Component {
  render() {
    const { listProducts, isEmpty } = this.props;
    return (
      <div>
        {
          isEmpty ? <p>Nenhum produto foi encontrado</p>
            : listProducts.map((list) => (
              <Link
                data-testid="product-detail-link"
                key={ list.id }
                to={ `/product/${list.id}` }
              >
                <div data-testid="product">
                  <p>{list.title}</p>
                  <img src={ list.thumbnail } alt={ list.title } />
                  <p>
                    $
                    { list.price }
                  </p>
                </div>
              </Link>
            ))
        }
      </div>
    );
  }
}

Products.propTypes = {
  listProducts: PropTypes.arrayOf.isRequired,
  isEmpty: PropTypes.bool.isRequired,
};
