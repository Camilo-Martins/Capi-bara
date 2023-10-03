import express from "express";
import dotenv from "dotenv"
import userRouter from "./routers/User.router.js";
import conectarDB from "./config/db.js";


const app = express();
app.use(express.json())

dotenv.config();

conectarDB();


//Routing
app.use('/api/user', userRouter)

const PORT = process.env.port || 4000

app.listen(PORT, () =>{
    console.log(`servidor corrienddsdo en el ppuerto ${PORT}`)
})