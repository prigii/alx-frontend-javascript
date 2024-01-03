#!/usr/bin/env node
export default function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to determine which promise resolves first
  return Promise.race([chinaDownload, USDownload])
    .then((result) =>
    // Return the value of the first resolved promise
      result)
    .catch((error) => {
      // Handle any unexpected errors during the process
      console.error("Error in load balancer:", error.message);
      throw error; // Re-throw the error to propagate it further if needed
    });
}
