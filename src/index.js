import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import configureStore from './redux/create-store';
import AppContainer from './containers/AppContainer';
import * as serviceWorker from './serviceWorker';
import routes from './routes';
import './styles/index.css';

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <AppContainer routes={routes} />
    </Provider>,
    document.getElementById('root'),
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./containers/AppContainer', renderApp);
}

renderApp();

serviceWorker.unregister();
