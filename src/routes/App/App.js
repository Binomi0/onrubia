import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions } from '../../reducers/user';
import logo from '../../assets/img/logo.svg';
import './styles/App.css';

class AppView extends Component {
  componentDidMount() {
    this.authUser();
  }

  authUser = () => {
    this.props.authUser('Adolfo');
  };

  registerUser = () => {
    this.props.registerUser(() => {
      this.props.history.push('/register');
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.user.name} tiene acceso:{' '}
            {this.props.user.isAuthenticated ? 'Si' : 'No'}
          </a>
          {!this.props.user.isRegistered && (
            <button className="register-button" onClick={this.registerUser}>
              Registrar
            </button>
          )}
          {this.props.user.isRegistered && <h4>Estás registrado</h4>}
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(
  mapStateToProps,
  actions,
)(AppView);
