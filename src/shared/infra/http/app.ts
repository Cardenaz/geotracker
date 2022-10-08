import express from 'express'; 
import { v1Router } from './api/v1';

const app = express(); 

const port = process.env.PORT || 3000; 

app.use('api/v1', v1Router); 

app.listen(port,() => {
    console.log(`App listening on port ${port}`); 
}); 

