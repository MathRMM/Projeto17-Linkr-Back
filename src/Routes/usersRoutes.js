import { Router } from 'express'

import { getUserByIdController } from '../Controllers/usersController.js';

const router = Router()

router.get('/users/:id', getUserByIdController)

export default router;