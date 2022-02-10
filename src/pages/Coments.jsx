import React from 'react';
import PropTypes from 'prop-types';
import { getComents } from '../services/api';

export default class Coments extends React.Component {
    state={
      // filterComents: '',
    }

    componentDidMount() {
      const { id } = this.props;
      console.log('id', id);
      const filterComents = getComents().filter((coments) => coments.idProduct === id);
      console.log('filterComents', filterComents);
    }

    // coments.idProduct === id
    render() {
      return (
        <div />
      );
    }
}

Coments.propTypes = {
  id: PropTypes.string.isRequired,
};
