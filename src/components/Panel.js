import React from 'react';

function Panel(props) {
  const {
    onInputChange,
    gameMode,
    onSelectChange,
    game,
    settings,
    userName,
    startPlaying,
    getTimerId,
    squares
  } = props;

  const gameStart = (event) => {
    event.preventDefault();
    startPlaying();

    const winnerLabel = document.querySelector('.winner');
    const btn = document.querySelector('.ui.button');
    const select = document.querySelector('.select');
    const input = document.querySelector('.input');
    const resetBtn = document.querySelector('.ui.reset');

    if (userName && gameMode !== "Pick game mode") {
      btn.disabled = 'true';
      select.disabled = 'true';
      input.disabled = 'true';
      winnerLabel.style.opacity = 0;
      resetBtn.style.display = 'none';

      for (let square of squares) {
        square.style.backgroundColor = '#f3f3f3';
      }
    
      let timerId = setInterval(game, settings.delay);
      getTimerId(timerId);
    } else {
      alert('Enter info')
    }

    return;
  }  

  return (
    <form className="gameForm">
      <select
        value={gameMode}
        onChange={onSelectChange}
        required
        className="select"
      >
        <option value="Pick game mode" disabled>Pick game mode</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <input 
        className="input"
        required
        type="text" 
        placeholder="Enter your name"
        onChange={(event) => onInputChange(event.target.value)}
      />

      <button 
        type="submit" 
        onClick={gameStart}
        className="ui button"
      >
        Play
      </button>
    </form>
  );
}

export default Panel;