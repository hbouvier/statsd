var connect = require('connect');
connect.createServer(
    connect.static(__dirname+'/www')
).listen(3000);
