import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>
// Selecting the element into which we want to insert React
// There is a div with the id "root" in index.html 
, document.getElementById('root'));
registerServiceWorker();
