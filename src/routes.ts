import { Router } from 'express';

import multer from 'multer';


import uploadConfig from './config/upload';
import OrphanagesControlers from './controlers/OrphanagesControlers'

const routes = Router();
const upload = multer(uploadConfig);


/**
 * mvc
 * 
 * m = model
 * v = views
 * c = controlers(logico de rotas)
 * 
 * 
 * 
 * 
 */

//index geralmente é pra lista

// index, show, create, update, delete


routes.post('/orphanages', upload.array('images'), OrphanagesControlers.create);
routes.get('/orphanages', OrphanagesControlers.index);
routes.get('/orphanages/:id', OrphanagesControlers.show);

export default routes;


