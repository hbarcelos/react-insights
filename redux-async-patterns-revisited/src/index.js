import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app';
import PanelSequenced from './containers/panel-sequenced';
import PanelNonSequenced from './containers/panel-non-sequenced';
import PanelNonSequencedNonBlocking from './containers/panel-non-sequenced-non-blocking';
import configureStore from './store/configStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const store = configureStore();

render(
  <Provider store={store}>
    <App>
      <PanelSequenced />
      <PanelNonSequenced />
      <PanelNonSequencedNonBlocking />
    </App>
  </Provider>,
  document.getElementById('root')
);
