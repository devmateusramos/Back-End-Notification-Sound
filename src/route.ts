import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import { GetSoundNameController } from './useCases/getSoundName/GetSoundNameController';
import { ImportSoundController } from './useCases/ImportSound/ImportSoundController';
import { PickSoundController } from './useCases/pickSound/PickSoundController';

const routes = Router();

const uploadSound = multer(uploadConfig);

const importSoundController = new ImportSoundController();

const pickSoundController = new PickSoundController();

const getSoundNameController = new GetSoundNameController();

routes.post(
  '/sound',
  uploadSound.single('sound'),
  importSoundController.handle,
);

routes.post('/sound/default', pickSoundController.handle);

routes.get('/sound', getSoundNameController.handle);

export { routes };
