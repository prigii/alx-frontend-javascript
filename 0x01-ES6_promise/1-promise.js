#!/usr/bin/env node
export function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous API call, for example purposes
        setTimeout(() => {
            if (success) {
            resolve({ status: 200, body: 'Success' });
            } else {
            reject(new Error('The fake API is not working currently'));
            }
        }, 1000); // Simulating a 1-second delay
        });
    }
