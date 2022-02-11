import React from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs'; // estrela vazia e cheia
import PropTypes from 'prop-types';
import '../App.css';

export default class Stars extends React.Component {
  render() {
    const { isSelected, index, handleChange } = this.props;
    return (
      <label htmlFor={ index }>
        <input
          data-testid={ `${index}-rating` }
          type="checkbox"
          name="index"
          checked={ isSelected }
          id={ index }
          onChange={ handleChange }
          className="stars"
        />
        {
          isSelected ? <BsStarFill /> : <BsStar />
        }

      </label>

    );
  }
}

Stars.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
