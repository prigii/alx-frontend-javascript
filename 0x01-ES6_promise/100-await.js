#!/usr/bin/env node
import { uploadPhoto, createUser } from "./utils";

async function asyncUploadUser() {
  try {
    // Use Promise.all to concurrently execute uploadPhoto and createUser
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    // Return an object with the responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // Handle errors and return an empty object
    console.error("Error during async upload and user creation:", error.message);
    return {
      photo: null,
      user: null,
    };
  }
}
