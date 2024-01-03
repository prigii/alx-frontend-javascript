#!/usr/bin/env node
export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Simulating an error during photo processing for demonstration purposes
    const errorCondition = Math.random() > 0.5;

    if (errorCondition) {
      const errorMessage = `${fileName} cannot be processed`;
      reject(new Error(errorMessage));
    } else {
      resolve(`Photo ${fileName} uploaded successfully`);
    }
  });
}
