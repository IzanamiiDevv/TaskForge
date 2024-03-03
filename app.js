const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors')

const app = express();
const PORT = 3000
const publicPath = path.join(__dirname, 'public');

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get('/',(req,res)=> {
    res.sendFile(path.join(publicPath,'index.html'));
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})