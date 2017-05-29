import axios from 'axios';

export const confirmUsernameValidationFromBackend = username => {
  return {
    valid: true,
    message: 'username valid',
  };
};