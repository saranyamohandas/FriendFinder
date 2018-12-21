var express = require("express");
var app = express();

var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('app/public'));


var apiRoutes = require("./app/routing/apiRoutes");
console.log(apiRoutes); //=> [Function]
apiRoutes(app);
var htmlRoutes = require("./app/routing/htmlRoutes");
htmlRoutes(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});