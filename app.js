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

app.post('/testcall',(req,res)=>{
    const text = req.body;
    const filePath = './data/data.json';
    fs.writeFile(filePath, JSON.stringify(text.datas), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(`Data Successfully Stored!`);
    }
  });
});

app.get('/testLoad',(req,res)=>{
  fs.readFile('./data/data.json',(err,data)=>{
    const content = {
      datas : data
    }
    if(err){
      res.status(500).send('Server Error')
    }
    res.send(content)
  });
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})