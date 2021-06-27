import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import {Routers} from './routers' 
import { store } from './store/store'


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <BrowserRouter>
          <Routers/>
      </BrowserRouter>
    </Provider> */}
    <>react test</>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
