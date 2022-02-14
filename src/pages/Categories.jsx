import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  render() {
    const { categorie, listCategories } = this.props;
    return (
      <div>
        {
          categorie.map((categoria) => (
            <div key={ categoria.id }>
              <label data-testid="category" htmlFor={ categoria.id }>
                <input
                  type="radio"
                  name="categoria"
                  className={ categoria.id }
                  value={ categoria.name }
                  onChange={ listCategories }
                />
                { categoria.name }
              </label>
            </div>
          ))
        }
      </div>
    );
  }
}

Categories.propTypes = {
  categorie: PropTypes.arrayOf(PropTypes.object).isRequired,
  listCategories: PropTypes.func.isRequired,
};
