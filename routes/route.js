exports.home = function(req, res) {
    res.render('home'); // Render home.ejs for the homepage
};

// Render home.ejs as a maintenance page for /login
exports.maintenance = function(req, res) {
    res.render('home'); // Serving the same home.ejs for /login
};
