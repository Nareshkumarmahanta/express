// const express = require('express');
// const app = express();
// app.use(function(req, res, next) {
//     console.log("middlewere cholao");
//     next();
// });
// app.use(function(req, res, next) {
//     console.log("middlewere cholao ek aur bar");
//     next();
// });
// app.use(function(req, res, next) {
//     console.log("middlewere cholao phirse ek  bar");
//     next();
// });
// //routes create
// app.get("/", function(req, res){
//     res.send("i am naresh, who are you?");
// });
// app.get("/about", function(req, res){
//     res.send("about page aageya");
// });
// app.get("/profile", function(req, res){
//     // return next(new Error("something went wrong"))
//     res.send("profile aa geya")
// });

// app.get("/contact", function(req, res, next){
//     return next(new Error("something went wrong"))
// });

// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })


// app.listen(3000);









//dynamic routing

// const path = require('path');
// console.log(__dirname+'/public');
// console.log(path.join(__dirname, 'public'));




const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');



app.get("/", function (req, res) {
    res.render("index");
})
app.get("/profile/:username", function (req, res) {
    res.send(`welcome, ${req.params.username}`);
})
app.get("/author/:username/:age", function (req, res) {
    res.send(`welcome, ${req.params.username.age}`);
})

app.listen(3000, function () {
    console.log("run haa raha hei");
    
})
 