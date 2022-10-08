import express from 'express'; 

const app = express(); 

app.get('/', (req, res) => {
    return res.send('Geotracker')
}); 

app.listen(3000, () => {
    console.log('App listening at http://localhost:3000')
}); 