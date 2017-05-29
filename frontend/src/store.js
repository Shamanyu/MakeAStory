// This module will create the Store for redux

import React from 'react';
import Reducers from './reducers';
import { createLogger } from 'redux-logger'
import { apiHitMiddleware } from './middlewares/';
import { createStore, applyMiddleware } from 'redux';


const loggerMiddleware = createLogger();

const createStoreMiddleware = applyMiddleware(apiHitMiddleware, loggerMiddleware)(createStore);

const store = createStoreMiddleware(Reducers);


export default store;
