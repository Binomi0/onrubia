import React, { Component } from 'react';

export default class RegisterView extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.goBack();
    }, 3000);
  }
  render() {
    return (
      <div>
        <h1>Registrando usuario...</h1>
      </div>
    );
  }
}
