var connect = require('connect')
  , serveStatic = require('serve-static')
  , renderRoot = require('./lib/processor/root')
  , findJade = require('./lib/processor/jade')
  , findLess = require('./lib/processor/less')
  , reject = require('./lib/processor/reject');

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

  app.use(reject);
  app.use(renderRoot);
  app.use(serveStatic(dir));
  app.use(findJade(dir));
  app.use(findLess(dir));

  return app;
}
