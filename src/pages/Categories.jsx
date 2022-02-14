import React from 'react';
import PropTypes from 'prop-types';
import '../css/Categories.css';

export default class Categories extends React.Component {
  render() {
    const { categorie, listCategories } = this.props;
    return (
      <div className="categories">
        {
          categorie.map((categoria) => (
            <div key={ categoria.id }>
              <label data-testid="category" htmlFor={ categoria.id }>
                <input
                  type="radio"
                  name="categoria"
                  id={ categoria.id }
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
