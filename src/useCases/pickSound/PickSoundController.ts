import { Request, Response } from 'express';

import { PickSoundService } from './PickSoundService';

export class PickSoundController {
  async handle(request: Request, response: Response) {
    const { sound_name } = request.body;
    const pickSoundService = new PickSoundService();

    const soundPath = pickSoundService.execute(sound_name);

    return response.status(200).json(soundPath);
  }
}
