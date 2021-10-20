import { Router } from 'express';
import AuthenticateUserController from './controllers/AuthenticateUserController';
import CreateMessageController from './controllers/CreateMessageController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const routes = Router();

routes
.post('/authenticate', new AuthenticateUserController().handle)
.post('/messages', ensureAuthenticated, new CreateMessageController().handle)
.get('/github', new AuthenticateUserController().getcode)
.get('/signin/callback', new AuthenticateUserController().github);

export default routes;
