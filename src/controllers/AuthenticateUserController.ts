import { Response, Request } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const service = new AuthenticateUserService();

    try {
      const result = await service.execute(code);

      return response.status(200).json(result);
    } catch (error) {
      return response.status(error.response.status).json({ error: error.response.data.message });
    }
  }

  async getcode(request: Request, response: Response) {
    response.redirect(
      `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
    );
  }

  async github(request: Request, response: Response) {
    const { code } = request.query;

    return response.json(code);
  }
}

export default AuthenticateUserController;
