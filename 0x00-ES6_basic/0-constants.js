export function taskFirst () {
  return 'I prefer const when I can.';
}

export function getLast () {
  return ' is okay';
}

export function taskNext () {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
