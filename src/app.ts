import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { router } from './router';


export const app = express()

//MiddleWare
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

//endpoints
app.use('/', router)