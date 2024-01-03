#!/usr/bin/env node
export function handleResponseFromAPI(promise) {
    promise
        .then((response) => {
            console.log('Got a response from the API');
            return { status: 200, body: 'success' };
        })
        .catch((error) => {
            console.error('Got an error from the API:', error.message);
            return new Error(); // Return an empty Error object for rejection
        });
    }
