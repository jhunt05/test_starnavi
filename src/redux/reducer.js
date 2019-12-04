import {ACTIONS} from './actions';
import {formatDate} from '../components/HandleFormatDate';

const initialState = {
  settings: [],
  winners: [],
  userName: '',
  loading: false,
  error: null
}

function addWinner(name) {
  return {
    'winner': name,
    'date': formatDate(new Date()),
    'id': Math.random(),
  }
}

export function reducer(state = initialState, action) {
  switch(action.type) {
    case ACTIONS.LOAD_SETTINGS: 
      return {
        ...state,
        loading: false,
        settings: action.payload,
      }
    case ACTIONS.LOAD_WINNERS: 
      return {
        ...state,
        loading: false,
        winners: action.payload,
      }
    case ACTIONS.SET_USERNAME: 
    return {
      ...state,
      userName: action.payload,
    }
    case ACTIONS.ADD_WINNER:
      let newWinner = addWinner(action.payload);
      return {
        ...state,
        winners: [...state.winners, newWinner],
      }
    default:
      return state;
  }
}