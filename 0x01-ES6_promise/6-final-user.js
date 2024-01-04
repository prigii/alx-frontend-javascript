#!/usr/bin/env node
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create promises for signUpUser and uploadPhoto
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to wait for all promises to settle
  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason.message,
    })))
    .catch((error) => {
      // Handle any unexpected errors during the process
      console.error('Error during profile signup:', error.message);
    });
}
