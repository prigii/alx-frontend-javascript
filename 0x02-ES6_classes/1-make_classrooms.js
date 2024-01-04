import ClassRoom from './0-classroom.js';

// Function to initialize ClassRoom objects
function initializeRooms() {
  const sizes = [19, 20, 34];
  return sizes.map(size => new ClassRoom(size));
}
