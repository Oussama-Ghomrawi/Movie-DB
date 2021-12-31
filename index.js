const express = require('express')
const app = express()
const port = 3000
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

app.get('/', (req, res) => {
  res.send('ok')
})
app.get('/test',(req,res)=>{
    res.json({"status":200,"message":"ok"})
})
app.get('/time',(req,res)=>{
    res.json({"status":200,"message":time})
})


app.get('/hello/:ID', (req, res) => {
    res.json({ "status": 200, "message": "hello " + req.params.ID })
})
app.get('/hello/', (req, res) => {
    res.json({ "status": 200, "message": "hello" })
})

app.get('/search', (req, res) => {
    const search = req.query.s;
    if (typeof search != 'undefined') {
        const response = {
            status: 200, message: "ok", data: search
        };
        res.send(response);
    }
    else {
        const response = {
            status: 500, error: true, message: "you have to provide a search"
        };
        res.status(500);
        res.send(response);
    }
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})