import { Router } from 'express';
import User from './app/models/users';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middleware/auth';

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
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
