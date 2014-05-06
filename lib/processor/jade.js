var fs = require('fs');
var path = require('path');
var jade = require('jade');

module.exports = function(root){
  return function(request,response,next){
    if (path.extname(request.url) != '.html') {
      next();
      return;
    }
    var filePath = path.join(root, path.basename(request.url,'.html') + '.jade');
    if (fs.existsSync(filePath)) {
      jade.renderFile(filePath, {}, function (err, html) {
        if (err) throw err;
        response.setHeader('Content-Type', 'text/html; charset=UTF-8');
        response.setHeader('Content-Length', html.length);
        response.end(html);
        return;
      });
    }
    else{
      response.statusCode = 404;
      response.end();
    }
  }
}
