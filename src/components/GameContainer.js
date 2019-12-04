import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {fetchWinners, setUsername, fetchSettings, addWinner} from '../redux/actions';
import Game from './Game';

function mapStateToProps(state) {
  return {
    settings: state.settings,
    winners: state.winners,
    userName: state.userName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchSettings: bindActionCreators(fetchSettings, dispatch),
    fetchWinners: bindActionCreators(fetchWinners, dispatch),
    setName: userName => dispatch(setUsername(userName)),
    addWinner: name => dispatch(addWinner(name))
  };
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);
export default GameContainer;