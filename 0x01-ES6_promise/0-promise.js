#!/usr/bin/env node
export function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous API call, for example purposes
        setTimeout(() => {
            const success = Math.random() > 0.5; // Simulating success/failure randomly
    
            if (success) {
            resolve('API response data');
            } else {
            reject(new Error('Failed to fetch data from the API'));
            }
        }, 1000); // Simulating a 1-second delay
        });
    }
