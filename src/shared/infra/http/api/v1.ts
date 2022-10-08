import express from 'express'; 

const v1Router = express.Router(); 

v1Router.get('/', (req, res) => {

    return res.json({message: "Up and track"}); 
}); 


export {v1Router}; 