const StaticServer = require('static-server');
const server = new StaticServer({
    rootPath: '.',
    port: 1337,
});

server.start(function () {
    console.log('Server listening to', server.port);
});
