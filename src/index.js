import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

const rootElement = document.getElementById('root');

function render() {
  ReactDOM.render(
      <Router>
        <ScrollToTop/>
        <App />
      </Router>,
      rootElement
  );
}

if(module.hot) {
  module.hot.accept('./App.js', function() {
    setTimeout(render());
  });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
