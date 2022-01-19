import crypto from 'crypto';
import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'sounds'),
    filename(request, file, callback) {
      const hash = crypto.randomBytes(16).toString('hex');

      const fileName = `${hash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
