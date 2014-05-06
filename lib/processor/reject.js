var path = require('path');
module.exports = function(request,response,next){
  var extname = path.extname(request.url);
  if ( extname == '.jade' || extname == '.less' ) {
    response.statusCode = 404;
    response.end();
  }
  else {
    next();
  }
}
