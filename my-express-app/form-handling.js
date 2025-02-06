const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true}));

app.get('/', function(req, res){
    res.send("i am home part");
})

app.get('/about', function(req, res){
    res.send("i am about part , you show this ");
})
app.get('/contact', function(req, res, next){
    return next(new Error("something is wrong, sorry"))
})

app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.status(500).send("something broke!")
})

app.listen(4050);