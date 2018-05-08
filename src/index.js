import ReactDOM from 'react-dom';
import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './containers/App';

ReactDOM.render(
  <MuiThemeProvider>
    <App defaultCounter={10} />
  </MuiThemeProvider>,
  document.getElementById('app')
);
