import express from 'express';
import { v1Router } from './api/v1';

const app = express(); 

app.use(v1Router); 



export {app}; 