import express from "express";
import { registerUser,authUser, logOutUser } from "../controllers/userController.js";
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
router.route('/data').get(protect, getData);

/**
 * @swagger
 * /signup:
 *   get:
 *     summary: Register users
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{
 *                  name : 'Ritu'
 *                  email : 'ritu@gmail.com'
 *                  }]
 *       400:
 *         description: Bad Request
 *         content:
 *          application/json:
 *            example:
 *             error:
 *              message: "Bad Request"
 */
router.post('/user/signup', registerUser)

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     description: Returns name and email of user on sucessful login along with cookie containing JWT token
 *     responses:
 *       200:
 *         description: A object containing name and email of user along with cookie containing JWT token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '../models/userModel.js'
 */
router.post('/user/login', authUser)

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     description: Returns an object containing message if user has logged out and erase cookie
 *     responses:
 *       200:
 *         description: A object containing message if user has logged out
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post('/user/logout', logOutUser);

export default router;