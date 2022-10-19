import { Router } from 'express'

import { getUserByIdController, searchUsernameController } from '../Controllers/usersController.js';

const router = Router()

router.get('/users/:id', getUserByIdController)
router.get('/users/search/:username', searchUsernameController)

export default router;