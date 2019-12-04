import React from 'react';

class GameBoard extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.squares === prevProps.squares) {
      this.chooseBtn();
    } else {
      return;
    }
  }

  chooseBtn = () => {
    let btn = document.querySelectorAll('.boardBtn');

    if (btn.length !== 0) {
      this.props.getSquares(btn);
    } 
  }

  render() {
    const {btnSettings, resetField} = this.props;
    let buttons = Array(btnSettings.field).fill(null);

    switch(btnSettings.field) {
      case 5: 
        return (
          <div className="gameBoard">
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <button onClick={resetField} className="reset ui button">Reset field</button>
          </div>
        );
      case 10: 
        return (
          <div className="gameBoard">
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <button onClick={resetField} className="reset ui button">Reset field</button>
          </div>
        );
      case 15: 
        return (
          <div className="gameBoard">
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <div className="boardRow">
              {buttons.map((button, index) => <button key={index} className="boardBtn"></button>)}
            </div>
            <button onClick={resetField} className="reset ui button">Reset field</button>
          </div>
        );
      default: 
        return <span className="startGameSpan">Enter info to start a game</span>
    }
  }
}

export default GameBoard;