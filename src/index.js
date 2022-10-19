import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import updateAndDelete from './routes/timeline.route.js'

const app = express();
app.use(express.json());
app.use(cors());

app.use(updateAndDelete);


app.get('/status', (req,res)=> res.send('ok'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`listen on port ${PORT}`));