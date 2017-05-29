// This module will define all the settings and the constants

export const UI_VERSION = 'v0.1.0';

export const hostAdd = 'localhost:8000';
export const rootUrl = 'http://' + hostAdd;

// Request URLs
export const urls = {
  WEBSOCKET: 'ws://localhost:8000/',
  LOGIN_URL: rootUrl + '/api/login/',
  LOGOUT_URL: rootUrl + '/api/logout',
  REGISTER_USER_URL: rootUrl + '/api/register_user',
};

export const uiUrls = {
  LOGIN_URL: '/login',
  DASHBOARD_URL: '/dashboard',
};

export const wsEvents = {
  DISCOVERED: 'discovered',
  CONNECTIVITY: 'connectivity',
  LOGGING: 'logging',
  LOCK: 'lock',
  FLASH: 'flash',
  DIAGNOSIS_ACTION: 'diagnosisAction',
  DIAGNOSIS_RESPONSE: 'diagnosisResponse',
};

export const STATUS_TYPE = {
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

export const INITIAL_STATE = {
  userData: {
    username: null,
    authToken: null,
  }
};

export const SESSION_STORAGE_KEYS = {
  username: 'username',
  token: 'authToken',
};

// HTTP Methods
export const httpMethods = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
};

export const LOGGING_TYPE = {
  debug: 'debug',
  info: 'info',
  warning: 'warning',
  error: 'error',
};
export const LOGGING_ENABLED_FOR = {
  ACTION: true,
  CONTAINER: true,
  COMPONENT: true,
  REDUCER: true,
  MIDDLEWARE: true,
  OBJECT: true,
  WS: true,
};
export const LOGGING_ENABLED = true;
export const LOGGING_LEVEL = LOGGING_TYPE.DEBUG;