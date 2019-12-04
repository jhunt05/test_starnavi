export const ACTIONS = {
  LOAD_SETTINGS: 'LOAD_SETTINGS',
  LOAD_WINNERS: 'LOAD_WINNERS',
  ADD_WINNER: 'ADD_WINNER',
  SET_USERNAME: 'SET_USERNAME',
};

export function loadSettings(settings) {
  return {
    type: ACTIONS.LOAD_SETTINGS,
    payload: settings
  };
};

export function loadWinners(winners) {
  return {
    type: ACTIONS.LOAD_WINNERS,
    payload: winners
  };
};

export function addWinner(name) {
  return {
    type: ACTIONS.ADD_WINNER,
    payload: name
  }
};

export function setUsername(name) {
  return {
    type: ACTIONS.SET_USERNAME,
    payload: name,
  };
};

export const fetchSettings = () => (dispatch, getState) => {
  return fetch('https://starnavi-frontend-test-task.herokuapp.com/game-settings')
    .then(response => response.json())
    .then(responseJson => {
      dispatch(loadSettings(responseJson));
    })
};

export const fetchWinners = () => (dispatch, getState) => {
  return fetch('https://starnavi-frontend-test-task.herokuapp.com/winners')
    .then(response => response.json())
    .then(responseJson => {
      dispatch(loadWinners(responseJson));
    })
};