
var exphbs = require('express-handlebars');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('home');
    });

    app.get("/about", function (req, res) {
        res.render("about");
    })

    app.get("/contact", function (req, res) {
        res.render("contact");
    })

}


