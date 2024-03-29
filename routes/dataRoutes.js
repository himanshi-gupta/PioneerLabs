import express from 'express';
import getData from '../controllers/dataController.js';
import protect from '../middleware/authMiddleware.js';
const router = express.Router();

/**
 * @swagger
 * /api/data?Category=category&limit=limit:
 *   get:
 *     description: Returns a list of entries
 *     responses:
 *       200:
 *         description: a list of entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '../models/entries.js'
 */
router.route('').get(protect, getData);

export default router;
