import express from 'express';
import dotenv from 'dotenv';
import ConnDB from './config/db.js'
import cors from 'cors'
import routers from './routes/routes.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 6002; 
// dbconnection 
ConnDB()
// middleware 
app.use(express.json())
app.use(cors())
// routes 
app.use('/api',routers)

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});
