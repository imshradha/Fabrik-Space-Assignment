import express from 'express';
import dotenv from 'dotenv';
import connection from './db/connectDB.js';
import route from './routes/route.js';

const app = express();

app.use(express.json());

dotenv.config();

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username,password);

app.use("/", route);

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}`)
})

