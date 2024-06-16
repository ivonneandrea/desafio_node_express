import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/postRouter.js';
import {PORT} from "./config.js";

const app = express(); 
app.use(cors()); 
app.use(morgan("dev")); 
app.use(express.json()); 
app.use(router); 


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});