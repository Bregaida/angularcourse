var project_location = "../";
var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic(project_location));
app.listen(5000);
