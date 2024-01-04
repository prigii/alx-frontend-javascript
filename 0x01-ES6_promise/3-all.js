#!/usr/bin/env node
// Assuming the functions are exported from utils.js
const { uploadPhoto, createUser } = require('./utils');

export default function handleProfileSignup() {
  // Create a user first
  const userPromise = createUser();

  // Then upload a photo
  const photoPromise = uploadPhoto();

  // Use Promise.all to collectively resolve all promises
  Promise.all([userPromise, photoPromise])
    .then(([user]) => {
      // Destructure the results and log the required information
      console.log(`Body: ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      // Log an error message in case of any error
      console.error('Signup system offline:', error.message);
    });
}
