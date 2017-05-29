import axios from 'axios';

import settings from '../config';


export const login = (data, callback) => {
  axios.post(settings.urls.LOGIN_URL, data)
    .then(response => {
      setUserDetailsInSessionStorage(data.username, response.data.authToken);
      if (callback) callback(true);
    })
    .catch(response => {
      if (callback) callback(false);
    })
};

export const registerUser = (data, callback) => {
  axios.post(settings.urls.REGISTER_USER_URL, data)
    .then(response => {
      if (callback) callback(true);
    })
    .catch(response => {
      if (callback) callback(false);
    })
};

export const setUserDetailsInSessionStorage = (username, authToken) => {
  sessionStorage.setItem(settings.SESSION_STORAGE_KEYS.username, username);
  sessionStorage.setItem(settings.SESSION_STORAGE_KEYS.authToken, authToken);
};
