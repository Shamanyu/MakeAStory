
import settings from '../config';
import { LOGIN_USER } from '../actions';

export default function userData(state=settings.INITIAL_STATE.userData, action) {

  switch(action.type){

    case LOGIN_USER:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      }
  }
}
