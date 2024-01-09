export default function updateUniqueItems(groceriesMap) {
  // Check if the argument is a Map
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the entries and update quantities
  for (const [item, quantity] of groceriesMap) {
    if (quantity === 1) {
      groceriesMap.set(item, 100);
    }
  }

  return groceriesMap;
}
