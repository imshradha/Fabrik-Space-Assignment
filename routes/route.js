import express from 'express';
import { login, register } from '../controllers/users.js';
import { uploadModel, showModels} from '../controllers/models.js';
import multer from 'multer';
//const upload = multer({dest: 'uploads/'})
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './uploads/')
    }, 
    filename : function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
    }
})

const upload = multer({storage: storage})

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/upload', upload.single('image'), uploadModel);
router.get('/showModels', showModels)

export default router;