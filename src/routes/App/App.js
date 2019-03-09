import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions as userActions } from '../../reducers/user';
import { actions as gameActions } from '../../reducers/game';
import logo from '../../assets/img/logo.svg';
import './styles/App.css';

class AppView extends Component {
  componentDidMount() {
    if (!this.props.user.isAuthenticated) {
      this.authUser();
    }
  }

  authUser = () => {
    this.props.authUser('Adolfo');
  };

  registerUser = () => {
    this.props.registerUser(() => {
      this.props.history.push('/register');
    });
  };

  addParticipant = (name) => {
    this.props.addParticipant('Adolfo');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            width="200"
            height="200"
            className="App-logo"
            alt="logo"
          />
          Premio: {this.props.game.prize}
          <p>
            {this.props.user.name} tiene acceso:{' '}
            {this.props.user.isAuthenticated ? 'Si' : 'No'}
          </p>
          {!this.props.user.isRegistered && (
            <button className="register-button" onClick={this.registerUser}>
              Registrar
            </button>
          )}
          {this.props.user.isRegistered &&
            !this.props.user.isActive &&
            !this.props.game.isStarted && (
              <button className="register-button" onClick={this.addParticipant}>
                Participar
              </button>
            )}
          <ul>
            {this.props.game.participants.map((participant) => (
              <li
                key={participant}
                style={{
                  color: this.props.game.winner === participant && 'green',
                }}
              >
                {participant}{' '}
                {this.props.game.winner === participant && 'es el ganador!'}
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ user, game }) => ({
  user,
  game,
});

export default connect(
  mapStateToProps,
  { ...userActions, ...gameActions },
)(AppView);
