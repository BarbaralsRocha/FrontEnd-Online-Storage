import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import InputCategories from '../components/InputCategories';
import '../css/Categories.css';

export default class Categories extends React.Component {
  state = {
    carouselPosition: 0,
  }

  /* componentDidMount() {
    const { categorieList } = this.props;
    this.setState({
      categoriesList: categorieList,
    });
  } */

  handleBtnBackAndForward = ({ currentTarget: { id } }) => {
    const categoriesContent = document.querySelector('.categories-content');
    const categories = document.querySelector('.categories');
    const category = document.querySelector('.categories div');

    const regNumber = /[0-9]+/g;

    const categoriesContentWidth = +window
      .getComputedStyle(categoriesContent).width.match(regNumber)[0];
    const categoriesWidth = +window
      .getComputedStyle(categories).width.match(regNumber)[0];
    const categoryWidth = +window
      .getComputedStyle(category).width.match(regNumber)[0];

    const categoriesInContent = Math.floor(categoriesContentWidth / categoryWidth);

    const carouselScroll = id === 'arrow-forward'
      ? -(categoriesInContent * categoryWidth)
      : categoriesInContent * categoryWidth;

    this.setState((prev) => (
      {
        carouselPosition: this.getPositionToMove(
          prev.carouselPosition,
          carouselScroll,
          categoriesWidth,
        ),
      }
    ));
  }

  getPositionToMove = (carouselPosition, carouselScroll, categoriesWidth) => {
    /* console.log('position', carouselPosition);
    console.log('scroll', carouselPosition);
    console.log('width', categoriesWidth);
    console.log('matematica', (categoriesWidth + (carouselPosition + carouselScroll))); */
    if (!carouselPosition && carouselScroll > 0) {
      return 0;
    }
    if ((categoriesWidth + (carouselPosition + carouselScroll)) === 0) {
      return 0;
    }
    if ((categoriesWidth + (carouselPosition + carouselScroll)) < -carouselScroll) {
      return -categoriesWidth - carouselScroll;
    }
    if ((categoriesWidth + (carouselPosition + carouselScroll)) > categoriesWidth) {
      return 0;
    }
    return carouselPosition + carouselScroll;
  };

  render() {
    const { carouselPosition: carouselposition } = this.state;
    const { handleChange, categoriesList } = this.props;
    return (
      <div className="carousel">
        <div>
          <IoIosArrowBack
            className="arrow-button"
            id="arrow-back"
            onClick={ this.handleBtnBackAndForward }
          />
        </div>
        <div className="categories-content">
          <div
            className="categories"
            style={ { left: carouselposition } }
          >
            {
              categoriesList.map((categoria) => (
                <InputCategories
                  key={ categoria.id }
                  listCategories={ handleChange }
                  categoria={ categoria }
                />
              ))
            }
          </div>
        </div>
        <div>
          <IoIosArrowForward
            className="arrow-button"
            id="arrow-forward"
            onClick={ this.handleBtnBackAndForward }
          />
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  categoriesList: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};
