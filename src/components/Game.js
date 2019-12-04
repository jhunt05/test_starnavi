import React from 'react';
import Panel from './Panel';
import GameBoard from './GameBoard';
import WinnersTable from './WinnersTable';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameMode: 'Pick game mode',
      isPlaying: false,
      squares: [],
      winner: null,
    }
  }

  componentDidMount() {
    this.props.fetchSettings();
    this.props.fetchWinners();
  }

  onSelectChange = (event) => {
    this.setState({
      gameMode: event.target.value,
    })
  }

  startPlaying = () => {
    this.setState({
      isPlaying: true,
    })
  }

  getTimerId = (id) => {
    this.setState({
      timerId: id,
    });
  }

  sendWinnerToServer = (userName) => {
    return fetch('https://starnavi-frontend-test-task.herokuapp.com/winners', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        winner: userName,
        date: new Date().toUTCString(),
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        return responseJson.success;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  game = () => {
    const { squares } = this.state;
    let buttons = [...squares];
    let random = Math.floor(Math.random() * buttons.length);
    const settings = this.getSettings();

    const rand = (buttons) => {  
      buttons[random].style.backgroundColor = 'blue';    
      buttons[random].addEventListener('click', () => {
        buttons[random].style.backgroundColor = 'green';
      })
  
      setTimeout(() => {
        if (buttons[random].style.backgroundColor === 'blue') {
          buttons[random].style.backgroundColor = 'red';
          buttons[random].disabled = 'true';
        }
      }, settings.delay);
    }

    const resetGame = (buttons) => {
      const playBtn = document.querySelector('.ui.button');
      const select = document.querySelector('.select');
      const input = document.querySelector('.input');
      const winnerLabel = document.querySelector('.winner');

      winnerLabel.style.opacity = 1;
      clearInterval(this.state.timerId);
      playBtn.innerHTML = 'Play again';
      playBtn.disabled = false;
      select.disabled = false;
      input.disabled = false;
      input.value = '';
    }
    
    const chooseWinner = (buttons) => {
      let userScore = [];
      let pcScore = [];
      const {userName} = this.props;
  
      for (let button of buttons) {
        if (button.style.backgroundColor === 'green') {
          userScore.push(1);
        } else if (button.style.backgroundColor === 'red') {
          pcScore.push(1);
        }
      }
  
      if (userScore.length >= buttons.length / 2) {
        this.props.addWinner(userName);
        this.setState({
          isPlaying: false,
          winner: userName,
        })
        this.sendWinnerToServer(userName);
        resetGame(buttons);
      } else if (pcScore.length >= buttons.length / 2) {
        this.props.addWinner('Computer');
        this.setState({
          isPlaying: false,
          winner: 'Computer',
        })
        this.sendWinnerToServer('Computer');
        resetGame(buttons);
      } else {
        return;
      }
    }
    
    if (buttons[random].style.backgroundColor === 'blue' ||
        buttons[random].style.backgroundColor === 'red' ||
        buttons[random].style.backgroundColor === 'green') {
          return;
    } else if (this.state.isPlaying) {
      rand(buttons);
      chooseWinner(buttons);
    }

    this.setState({
      squares: buttons,
    })
  };

  getSquares = (btn) => {
    this.setState({
      squares: btn,
    })
  }

  getSettings = () => {
    switch(this.state.gameMode) {
      case "Easy": 
        return this.props.settings.easyMode
      case "Medium": 
        return this.props.settings.normalMode
      case "Hard": 
        return this.props.settings.hardMode
      default:
        return {
          field: 0,
          delay: 0,
        }
    }
  }
      
  render() {
    const { 
      userName, 
      winners, 
      setName,
    } = this.props;

    return (
      <div className="container">
        <div className="game">
          <Panel 
            onInputChange={setName} 
            gameMode={this.state.gameMode}
            onSelectChange={this.onSelectChange}
            game={this.game}
            settings={this.getSettings()} 
            userName={userName}
            isPlaying={this.state.isPlaying}
            startPlaying={this.startPlaying}
            getTimerId={this.getTimerId}
            squares={this.state.squares}
          />

          <span className="winner">
            {this.state.winner} is winner!
          </span>

          <GameBoard 
            btnSettings={this.getSettings()} 
            getSquares={this.getSquares}
            squares={this.state.squares}
          />
        </div>
        
        <WinnersTable winners={winners} />
      </div>
    );
  }
}


export default Game;