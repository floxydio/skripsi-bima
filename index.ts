import express, { Express } from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import Router from './src/routes/routes';
import cors from "cors"
import bodyParser from "body-parser"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3500;
const prisma = new PrismaClient();

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Start Router
Router(app);


// Start Listen Port
app.listen(port, () => {
    prisma.$connect().then(() => {
        console.log("Database is connected")
    }).catch((err) => {
        console.log(`Database is not connected: ${err}`)
        process.exit(1)
    })
    console.log(`Server is running on port ${port}`)
})
