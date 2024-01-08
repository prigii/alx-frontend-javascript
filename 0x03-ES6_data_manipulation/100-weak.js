// Create a new WeakMap to track the number of queries for each endpoint
const weakMap = new WeakMap();

// Export the weakMap
export { weakMap };

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Check if the endpoint is already in the weakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const currentCount = weakMap.get(endpoint);
    weakMap.set(endpoint, currentCount + 1);
  }

  // Check if the number of queries is >= 5
  if (weakMap.get(endpoint) >= 5) {
    throw new Error(`Endpoint load is high: ${endpoint.name}`);
  }

  // Simulate the API query
  // (Replace this with actual API call logic)

  console.log(`Querying API for ${endpoint.name}`);

  // Return the result of the API query
  return `Result for ${endpoint.name}`;
}
