var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Middleware to show maintenance page for all routes
app.use((req, res, next) => {
    res.render('home'); // Renders home.ejs for all requests
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
    console.log("Catch the action at http://localhost:" + port);
});
