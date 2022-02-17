import React from 'react';
import PropTypes from 'prop-types';
import '../css/Product.css';

export default class InputCategories extends React.Component {
  render() {
    const { categoria, listCategories } = this.props;
    return (
      <div>
        <label data-testid="category" htmlFor={ categoria.id }>
          <input
            type="radio"
            name="categoria"
            id={ categoria.id }
            value={ categoria.name }
            onChange={ listCategories }
            className="input-categories"
          />
          { categoria.name }
        </label>
      </div>
    );
  }
}

InputCategories.propTypes = {
  categoria: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  listCategories: PropTypes.func.isRequired,
};
