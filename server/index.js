import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';

import booksRouter from './routes/route.js'

const app =  express();

app.use(cors());
app.use(express.json( {extended :true }));

app.use('/api/v1/books' , booksRouter);
const PORT= 8000;

Connection();

app.listen(PORT, ()=> console.log(`Your app is running on PORT ${PORT}`))