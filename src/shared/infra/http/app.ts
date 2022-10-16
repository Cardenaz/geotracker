import express from 'express';
import helmet from 'helmet'; 
import {v1Router} from './api/v1'; 

const app = express(); 

app.use(helmet())
app.use(v1Router); 

export {app}; 