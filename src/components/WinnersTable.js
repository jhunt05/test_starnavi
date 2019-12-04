import React from 'react';

const WinnersTable = (props) => {
  const {winners} = props;
  const winnersToDisplay = winners.slice(-4);

  return (
    <div className="wrapper">
      <div className="rules">
        <details>
          <summary className="ui inverted button">Rules</summary>
          <div className="ui card">
            <p>Click on square, if he's highlighted blue. If you managed to click during time -
              square will become green and you will get the point, if not - square will turns red and
              the point will go to computer. When 50% of field will be green or red, game will stop
            </p>
          </div>
        </details>
      </div>
      <div className="leadersTable">
        <h2>Leader Board</h2>
        <table className="ui celled table">
          <tbody>
            {winnersToDisplay.map(item => (
              <tr 
                className={item.winner === "Computer" ? "negativeResult" : "positiveResult"} 
                key={item.id}
              >
                <td>{item.winner}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WinnersTable;