const express = require('express')
const app = express()
const port = 3000
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 }
]

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

app.get('/movies/create', (req, res) => {
})
app.get('/movies/read', (req, res) => {
    res.json({ "status": 200, "message": movies })
})
app.get('/movies/update', (req, res) => {
})
app.get('/movies/delete', (req, res) => {
})



app.get('/movies/read/by-date',(req,res)=>{
    res.json({"status":200,"data":movies.sort(function(a, b){return a.year - b.year})})
})

app.get('/movies/read/by-rating',(req,res)=>{
    res.json({"status":200,"data":movies.sort(function(a, b){return b.rating - a.rating})})
})

app.get('/movies/read/by-title', (req, res) => {
    res.json({
        "status": 200, "data": movies.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase())
                return -1
            if ((a.title.toLowerCase() > b.title.toLowerCase()))
                return 1
            return 0
        })
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})