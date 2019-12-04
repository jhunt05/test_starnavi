import React from 'react';
import './App.css';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {reducer} from './redux/reducer';
import {Provider} from "react-redux";
import GameContainer from './components/GameContainer';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <GameContainer />
    </Provider>
  );
}

export default App;
