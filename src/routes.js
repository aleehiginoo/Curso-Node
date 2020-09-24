import { Router } from 'express';
import User from './app/models/users';

import UserController from './app/controllers/UserController';

const routes = new Router();

/*
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Alexandre Higino',
    email: 'alexandre@teste.com',
    password_hash: '1234564867',
  });
  return res.json(user);
});
*/

routes.post('/users', UserController.store);

export default routes;
