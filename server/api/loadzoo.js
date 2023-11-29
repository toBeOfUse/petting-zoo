import { findUserWithUsername } from '../data.js';

export default defineEventHandler((event) => {
  const username = getCookie(event, "username");
  const user = findUserWithUsername(username);
  return user.animals;
});
