var connect = require('connect')
  , serveStatic = require('serve-static');
module.exports = function(dir){
  var app = connect();
  app.use(function(request,response,next){
    var url = request.url;
    if(url == "/current-time") {
      response.end((new Date()).toISOString());
    }
    else {
      next();
    }
  });

  app.use(serveStatic(dir));

  return app;
}
