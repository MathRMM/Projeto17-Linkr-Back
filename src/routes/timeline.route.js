import express from 'express';
import { updatePost, deletePost } from '../controllers/timeline.controller.js';

const router = express.Router();

router.put('/timeline/:id', updatePost);
router.delete('/timeline/:id', deletePost);

export default router;


