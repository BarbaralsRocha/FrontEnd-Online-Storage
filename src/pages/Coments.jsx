import React from 'react';
import PropTypes from 'prop-types';
import Stars from './Stars';

export default class Coments extends React.Component {
  render() {
    const { filterComents } = this.props;
    const stars = [false, false, false, false, false];
    return (
      <div>
        {
          filterComents.map(({ email, description, notas }, index) => (
            <div key={ index }>
              <p>{email}</p>
              <p>{description}</p>
              {
                stars.map((_, idx) => (
                  <Stars
                    key={ idx * Math.random() }
                    handleChange={ () => null }
                    isSelected={ idx <= notas - 1 }
                    index={ idx * Math.random() }
                  />
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}

Coments.propTypes = {
  filterComents: PropTypes.arrayOf(PropTypes.object).isRequired,
};
