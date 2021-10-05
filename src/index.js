import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {counter} from './redux/reducer'
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const store = createStore(counter,composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(counter,applyMiddleware(thunk));
console.log(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// store.subscribe(render);