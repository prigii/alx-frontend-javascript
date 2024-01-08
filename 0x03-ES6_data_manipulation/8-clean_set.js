export default function cleanSet(set, startString) {
  // Check if startString is not a space
  if (startString !== ' ') {
    // Use the Array.from method to convert the Set to an array
    const valuesArray = Array.from(set);

    // Filter values that start with the specified string and remove the starting substring
    const filteredValues = valuesArray
      .filter(value => value.startsWith(startString))
      .map(value => value.slice(startString.length));

    // Join the filtered values with "-"
    return filteredValues.join('-');
  } else {
    // Return an empty string if startString is a space
    return ' ';
  }
}

