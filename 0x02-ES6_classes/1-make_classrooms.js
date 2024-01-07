import ClassRoom from './0-classroom';

// Function to initialize ClassRoom objects
export default function initializeRooms() {
  const rooms = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
  return rooms;
}
