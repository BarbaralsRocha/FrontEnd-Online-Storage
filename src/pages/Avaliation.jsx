import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';
// import { addComents } from '../services/api';

export default class Avaliation extends React.Component {
    state={
      stars: [false, false, false, false, false],
      email: '',
      description: '',
      desactive: true,
      btnActive: true,
      notas: '',
    }

    handleChangeEmail=({ target: { name, value } }) => {
      this.setState({ [name]: value }, () => {
        const { email } = this.state;
        if (email !== '') {
          this.setState({ desactive: false });
        }
      });
    }

    handleChange =({ target: { id } }) => {
      const { stars } = this.state;
      const idx = +id - 1;
      console.log(idx);
      const avaliation = stars.map((star, index) => index <= idx);
      this.setState({ stars: avaliation, btnActive: false, notas: id });
    }

    render() {
      const { stars, email, description, desactive, btnActive, notas } = this.state;
      const { handleClick } = this.props;

      return (
        <div>
          <input
            type="email"
            name="email"
            value={ email }
            placeholder="email"
            onChange={ this.handleChangeEmail }
            data-testid="product-detail-email"
          />
          <textarea
            data-testid="product-detail-evaluation"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChangeEmail }
            rows="10"
            cols="30"
          />
          <div>
            <button
              type="button"
              onClick={ () => {
                handleClick(email, description, notas);
                this.setState({
                  email: '',
                  description: '',
                  stars: [false, false, false, false, false],
                });
              } }
              data-testid="submit-review-btn"
              disabled={ !(desactive === false && btnActive === false) }
            >
              Enviar
            </button>
            {
              stars.map((star, index) => (
                <Stars
                  key={ index }
                  handleChange={ this.handleChange }
                  isSelected={ star }
                  index={ index + 1 }
                />
              ))
            }
          </div>
        </div>
      );
    }
}
Avaliation.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
