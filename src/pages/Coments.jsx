import React from 'react';
import PropTypes from 'prop-types';
import { BsStar, BsStarFill } from 'react-icons/bs'; // estrela vazia e cheia
import { getComents } from '../services/api';
import Stars from './Stars';

export default class Coments extends React.Component {
    state={
      filterComents: [],
    }

    componentDidMount() {
      const { id } = this.props;
      const filterComents = getComents().filter((coments) => coments.idProduct === id);
      console.log('filterComents', filterComents);
      this.setState({ filterComents });
    }

    render() {
      const { filterComents } = this.state;

      return (
        <div>
          {
            filterComents.map(({ email, description, notas }, index) => (
              <div key={ index }>
                <p>{email}</p>
                <p>{description}</p>

              </div>
            ))
          }

        </div>
      );
    }
}

Coments.propTypes = {
  id: PropTypes.string.isRequired,
};
