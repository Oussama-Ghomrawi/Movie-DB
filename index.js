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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})