var connect = require('connect');
module.exports = function(){
  var app = connect();
  app.use(function(request,response,next){
    var url = request.url;
    if(url == "/current-time") {
      response.end((new Date()).toISOString());
    }
    else {
      next();
    }
  })

  return app;
}
