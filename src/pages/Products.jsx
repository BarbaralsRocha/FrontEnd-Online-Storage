import React from 'react';
import PropTypes from 'prop-types';

export default class Products extends React.Component {
  render() {
    const { listProducts, isEmpty } = this.props;
    return (
      <div>
        {
          isEmpty ? <p>Nenhum produto foi encontrado</p>
            : listProducts.map((list) => (
              <div data-testid="product" key={ list.id }>
                <p>{list.title}</p>
                <img src={ list.thumbnail } alt={ list.title } />
                <p>
                  $
                  { list.price }
                </p>
              </div>
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
