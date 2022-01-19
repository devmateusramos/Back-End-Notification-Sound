import { Request, Response } from 'express';

import { ImportSoundService } from './ImportSoundService';

export class ImportSoundController {
  async handle(request: Request, response: Response) {
    const avatar_file = request.file?.filename;

    const soundService = new ImportSoundService();

    await soundService.execute({ avatar_file });

    return response.status(204).send();
  }
}
