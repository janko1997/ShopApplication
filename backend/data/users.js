import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Kostas Grigoropoulos',
    email: 'kostisthyra3@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Maria Grigoropoulou',
    email: 'mariagpeloua@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
