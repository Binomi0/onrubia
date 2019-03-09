import React from 'react';
import { render } from 'react-dom';
import './styles/index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import configureStore from './redux/create-store';

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./containers/App', renderApp);
}

renderApp();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
