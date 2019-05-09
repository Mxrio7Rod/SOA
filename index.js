const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const port = 3300;
const pollsRouter = require('./API/Routers/poll-router');

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index.html'));
}) ;

app.use('/polls', pollsRouter);

server.listen( port, () => {
    console.log("servidor ejecutandose en puerto: ", port );
});