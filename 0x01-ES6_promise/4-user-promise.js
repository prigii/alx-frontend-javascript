#!/usr/bin/env node
export function signUpUser(firstName, lastName) {
    return Promise.resolve({
        firstName: firstName,
        lastName: lastName,
        });
    }
