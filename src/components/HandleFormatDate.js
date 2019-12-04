function formatDate(date) {
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  let hour = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  return `${hour}:${minutes} ${day} ${monthNames[monthIndex]} ${year}`;
}

export {formatDate};