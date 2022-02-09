import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
  render() {
    const { categorie } = this.props;
    const categoriesList = Array.from(categorie);
    return (
      <div>
        {
          categoriesList.map((categoria) => (
            <div key={ categoria.id }>
              <label data-testid="category" htmlFor="categorias">
                <input type="radio" name="categoria" value={ categoria.name } />
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
  categorie: PropTypes.arrayOf.isRequired,
};
