import { Request, Response } from 'express';

import { GetSoundNameService } from './GetSoundNameService';

export class GetSoundNameController {
  async handle(request: Request, response: Response) {
    const getSoundNameService = new GetSoundNameService();
    const sounds = await getSoundNameService.execute();

    return response.status(200).json(sounds);
  }
}
