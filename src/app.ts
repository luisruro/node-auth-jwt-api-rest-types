import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import authRoutes from "./routes/authRoutes"
import userRoutes from "./routes/userRoutes"

const app = express();

app.use(express.json()); //Middleware para que cuando enviememos a través de la API REST JSONs los podamos leer

//Routes
app.use("/auth", authRoutes)
app.use("/users", userRoutes)
//User

export default app