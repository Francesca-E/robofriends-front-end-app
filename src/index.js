import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from'redux-thunk';
import {createLogger} from 'redux-logger';
import './index.css';
import App from './container/App';
import {searchRobots, requestRobots} from './reducers.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

// we have to destructure those that arent exported as default
const logger= createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))
//the provider component takes care of passing down the store as a component to all
//the components in the app.  If we pass the store down as a prop  we have to pass
//it down to every component as a prop

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
