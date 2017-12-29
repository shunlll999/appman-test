import { Events } from '../actions/Events';

const initialState = {
  fetched: false,
  memberData: {},
  error: null
}

const product = (state = initialState , action) => {
  const { type, payload } = action;

  switch(type) {
    case Events.SIGN_IN:
      return { ...state, fetched: true, memberData: payload };
    case Events.SIGN_IN_ERROR:
      return { ...state, fetched: false, error: payload };
    default:
      return state;
  }
}

export default product;