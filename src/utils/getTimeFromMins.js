export default function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;

  if (hours > 0 && minutes < 10) {
    return hours + 'ч 0' + minutes + 'м';
  } else if (hours === 0 && minutes > 9) {
    return minutes + 'м';
  } else if (hours === 0 && minutes < 10) {
    return '0' + minutes + 'м';
  } else {
    return hours + 'ч ' + minutes + 'м';
  }
}
