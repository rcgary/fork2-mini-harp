var fs = require('fs');
var path = require('path');
var less = require('less');

module.exports = function(root){
  return function(request,response,next){
    if (path.extname(request.url) != '.css') {
      next();
      return;
    }
    var filePath = path.join(root, path.basename(request.url,'.css') + '.less');
    if (fs.existsSync(filePath)) {
      fs.readFile(filePath,{encoding: "utf8"},function(err,data){
        less.render(data, {}, function (err, css) {
          if (err) throw err;
          response.setHeader('Content-Type', 'text/css; charset=UTF-8');
          response.setHeader('Content-Length', css.length);
          response.end(css);
          return;
        });

      });
    }
    else{
      response.statusCode = 404;
      response.end();
    }
  }
}
