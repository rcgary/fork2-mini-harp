module.exports = function(request,response,next){
  if (request.url == '/') {
    request.url = '/index.html'
  }
  next();
}
