import { Events } from './Events';
import axios from 'axios';
import { error } from 'util';
const apiURL = 'http://localhost:3000/api/';

const signIn = (data) => {
  return (dispatch) => {
    axios.post(`${apiURL}login`, data).then(response => {
      dispatch({ type: Events.SIGN_IN, payload: response });
    }).catch(err => {
      dispatch({ type: Events.SIGN_IN_ERROR, payload: err });
    });
  }
}

export const EventDispatcher = {
  signIn
}