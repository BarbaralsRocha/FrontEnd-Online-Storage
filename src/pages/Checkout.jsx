import React from 'react';
import UserForm from './UserForm';
import ShopCartRevision from './ShopCartRevison';

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
  }

  handleChange = ({ target: { name, value } }) => {
    const { formState } = this.state;
    this.setState({ formState: { ...formState, [name]: value } });
  }

  render() {
    const { formState } = this.state;
    return (
      <div>
        <ShopCartRevision />
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
