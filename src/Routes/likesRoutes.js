import { Router } from 'express';

import { getLikesController, postLikeController } from '../Controllers/likesController.js';

const likesRoutes = Router();

likesRoutes.get('/likes/:id', getLikesController)
likesRoutes.post('/likes', postLikeController)

export default likesRoutes;