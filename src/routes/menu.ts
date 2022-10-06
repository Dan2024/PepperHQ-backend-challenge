import { Router } from 'express';
import { getMenu } from '../controllers/getMenu';
import { cache } from '../middleware/cache';

const router = Router();
router.get('/', cache, getMenu);

export default router;
