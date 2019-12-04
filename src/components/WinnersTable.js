import React from 'react';

const WinnersTable = (props) => {
  const {winners} = props;
  const winnersToDisplay = winners.slice(-4);

  return (
    <div className='leadersTable'>
      <h2>Leader Board</h2>
      <table className='ui celled table'>
        <tbody>
          {winnersToDisplay.map(item => (
            <tr 
              className={item.winner === 'Computer' ? 'negativeResult' : 'positiveResult'} 
              key={item.id}
            >
              <td>{item.winner}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WinnersTable;