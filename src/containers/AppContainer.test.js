import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './AppContainer';
import configureStore from '../redux/create-store';

import routes from '../routes';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App routes={routes} />
    </Provider>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
