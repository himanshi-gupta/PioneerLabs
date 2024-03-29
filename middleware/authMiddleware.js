import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
    let token
    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId);
            next();
        } catch (error) {
            res.status(401);
            res.send(`Not authorized - invalid token`)
        }
    }
    else {
        res.status(401);
        res.send(`Not authorized - no token`);
    }
})

export default protect;