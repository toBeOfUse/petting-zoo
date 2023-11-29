export const users = [
  {
    username: 'mitch',
    password: 'swordfish',
    animals: ['alpaca.png', 'cow.png', 'pony.png'],
  },
  {
    username: 'sidney',
    password: '12345',
    animals: ['amphibian.png', 'amphibian.png', 'amphibian.png'],
  },
];

export function findUserWithUsername(soughtUsername) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].username == soughtUsername) {
      return users[i];
    }
  }
  return null;
}
