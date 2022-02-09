import React from 'react';

export default class ListProducts extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
