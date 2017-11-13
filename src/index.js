import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { combineReducers, createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
import reducers from './reducers'

const store = createStore(combineReducers(reducers),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSTION__());

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
