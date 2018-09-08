var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs")


    app.get('/index', function(req, res){
     res.render("index.ejs");
          });
// app.get('/competition', function(req, res){
//     //     res.render("Aboutus.ejs");
//     // });


app.get('/gallery', function(req, res){
    res.render("gallery/gallery.ejs");
});
app.get('/Aboutus', function(req, res){
    res.render("Aboutus.ejs");
});
//     app.get('/Roaster', function(req, res){
//         //     res.render("Aboutus.ejs");
//         // });
//         app.get('/sponser', function(req, res){
//             //     res.render("Aboutus.ejs");
//             // });
    app.listen(3000, function(){
        console.log("server started");
    });
