import React from 'react';
import UserForm from './UserForm';
import ShopCart from './ShopCart';

export default class Checkout extends React.Component {
  state = {
    formState: {
      name: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complement: '',
      number: '',
      city: '',
      state: '',
    },
    cartList: [],
  }

  componentDidMount() {

  }

  handleChange = ({ target: { name, value } }) => {
    const { formState } = this.state;
    this.setState({ formState: { ...formState, [name]: value } });
  }

  render() {
    const { formState } = this.state;
    return (
      <div>
        <UserForm { ...formState } handleChange={ this.handleChange } />
        <button
          type="button"
        >
          Finalizar
        </button>
      </div>
    );
  }
}
