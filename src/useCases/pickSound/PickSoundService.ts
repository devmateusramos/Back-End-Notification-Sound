import path from 'path';

export class PickSoundService {
  execute(sound_name: string) {
    const soundPath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'sounds',
      `${sound_name}`,
    );

    return soundPath;
  }
}
