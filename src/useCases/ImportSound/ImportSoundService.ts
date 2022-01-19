import { getRepository } from 'typeorm';

import { Sounds } from '../../entities/Sounds';

interface IRequest {
  avatar_file: any;
}

export class ImportSoundService {
  async execute({ avatar_file }: IRequest): Promise<void> {
    const sound = getRepository(Sounds);

    const newSound = sound.create({ name: avatar_file });
    await sound.save(newSound);
  }
}
