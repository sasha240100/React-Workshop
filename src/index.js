import ReactDOM from 'react-dom';
import React from 'react';

import App from './components/App';

ReactDOM.render(
  <App defaultCounter={10} />,
  document.getElementById('app')
);
