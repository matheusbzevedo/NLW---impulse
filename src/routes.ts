import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const routes = Router()

routes.post("/authenticate", new AuthenticateUserController().handle)
routes.get('/github', new AuthenticateUserController().getcode)
routes.get('/signin/callback', new AuthenticateUserController().github)


export default routes;
