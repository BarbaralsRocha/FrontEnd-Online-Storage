import React from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../services/api';

export default class ProductDetail extends React.Component {
  state = {
    product: {
      attributes: [],
    },
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProduct(id);
    this.setState({ product });
  }
  //  nome do produto, imagem, preço e especificação técnica

  render() {
    const { product: { title, price, thumbnail, attributes } } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        <table>
          {
            attributes.map(({ name, value_name: valueName, id }) => (
              <thead key={ id }>
                <tr>
                  <th>{name}</th>
                  <th>{valueName}</th>
                </tr>
              </thead>
            ))
          }
        </table>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
