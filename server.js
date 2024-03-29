import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import userRoutes from "./routes/userRoutes.js";
import dataRoutes from "./routes/dataRoutes.js";
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from './docs/swagger.json' assert { type: 'json' };
dotenv.config();

connectDB();

const app = express()

const port = process.env.PORT || 5000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser());

app.use('/api', userRoutes);
// app.use('/api/data', dataRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on ${port}`));