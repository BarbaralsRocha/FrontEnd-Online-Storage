import React from 'react';
import PropTypes from 'prop-types';
import { BsStar, BsStarFill } from 'react-icons/bs'; // estrela vazia e cheia
import { getComents } from '../services/api';

export default class Coments extends React.Component {
    state={
      filterComents: [],
      stars: [false, false, false, false, false],
      avaliations: [],
    }

    componentDidMount() {
      const { id } = this.props;
      const { stars } = this.state;
      console.log('id', id);
      const filterComents = getComents().filter((coments) => coments.idProduct === id);
      console.log('filterComents', filterComents);
      this.setState({ filterComents }, () => {
        const notasAvaliation = filterComents.map((nota) => nota.notas);
        console.log('notasAvaliation', notasAvaliation);
        const avaliation = notasAvaliation.map((nota) => (
          stars.map((star, index) => index <= nota - 1)
        ));
        console.log('avaliation', avaliation);
        this.setState({ avaliations: avaliation });
      });
    }

    render() {
      const { filterComents, avaliations } = this.state;
      return (
        <div>
          {
            avaliations.map((star) => (
              filterComents.map(({ email, description }, index) => (
                <div key={ index }>
                  <p>{email}</p>
                  <p>{description}</p>
                  {
                    star.map((starCheck, index2) => (
                      <div key={ index2 }>
                        {
                          starCheck ? <BsStarFill /> : <BsStar />

                        }
                        <label htmlFor="starComent">
                          <input
                            type="checkbox"
                            name="index"
                            checked={ starCheck }
                            id="starComent"
                            className="stars"
                          />

                        </label>

                      </div>
                    ))

                  }

                </div>
              ))
            ))
          }

        </div>
      );
    }
}

Coments.propTypes = {
  id: PropTypes.string.isRequired,
};
