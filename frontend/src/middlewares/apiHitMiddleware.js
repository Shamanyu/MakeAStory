// This module will define all the middlewares

import axios from "axios";
import util from 'util';

import { API_ERROR } from '../actions';
import { logger } from '../utils';


const apiHitMiddleware = store => next => action => {

  let currentState = store.getState();

  if (action.requestDetails) {

    if (action.requestDetails.url) {

      let url = action.requestDetails.url;

      if (action.requestDetails.addInUrl){
        if (action.requestDetails.addInUrl.length > -1){
          url = util.format(url, action.requestDetails.addInUrl);
        }
      }

      logger.middleware("apiHitMiddleware", {url: url, method: action.requestDetails.method});

      axios({
        url: url,
        method: action.requestDetails.method,
        data: (action.requestDetails.data || null),
        params: (action.requestDetails.params || null),
      })
        .then(function(res){
          return next({
            type: action.type,
            res_data: res.data,
            data: action.data,
          })
        })
        .catch(function (err) {
          console.trace(err);
          return next({
            type: API_ERROR,
            actual_type: action.type,
            data: err,
          })
        })
    }
    else {
      logger.error("Action: " + action.type + " is missing requestDetails.url");
      logger.object("Action", action, 'error');
    }
  }
  else {
    return next(action);
  }
};

export default apiHitMiddleware
