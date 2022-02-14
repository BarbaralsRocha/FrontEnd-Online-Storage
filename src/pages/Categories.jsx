import React from 'react';
import PropTypes from 'prop-types';
import InputCategories from '../components/InputCategories';
import '../css/Categories.css';

export default class Categories extends React.Component {
  state = {
    renderList: [],
    // categorieList: [],
  }

  componentDidMount() {
    const carouselSize = 8;
    const { categorieList } = this.props;
    console.log('prop', categorieList);
    console.log('teste', categorieList.slice(0, carouselSize));
    this.setState({
      renderList: categorieList.slice(0, carouselSize),
      // categorieList,
    });
  }

  render() {
    const { renderList } = this.state;
    const { handleChange } = this.props;
    return (
      <div className="categories">
        {
          renderList.map((categoria) => (
            <InputCategories
              key={ categoria.id }
              listCategories={ handleChange }
              categoria={ categoria }
            />
          ))
        }
      </div>
    );
  }
}

Categories.propTypes = {
  categorieList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};
