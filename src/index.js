import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './states/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
