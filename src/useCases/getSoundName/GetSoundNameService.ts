import { getRepository } from 'typeorm';

import { ISounds, Sounds } from '../../entities/Sounds';

export class GetSoundNameService {
  async execute(): Promise<ISounds[]> {
    const sound = getRepository(Sounds);

    const sounds = await sound.find();

    return sounds;
  }
}
