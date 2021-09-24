import express from 'express';
import {
  createWilder,
  readWilders,
  readOneWilder,
  readWildersByCity,
  updateWilder,
  deleteWilder,
} from '../controllers/wilders';

const router = express.Router();

router.post('/', createWilder);
// router.post("/searches", wilderController.search);

router.get('/', readWilders);
router.get('/:id', readOneWilder);
router.get('/:city', readWildersByCity);

router.patch('/:id', updateWilder);

router.delete('/:id', deleteWilder);

export default router;
