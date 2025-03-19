import express from 'express';
import http from 'http';
import routes from './backend/routes.js';

const app = express();
const port = 3000;

app.set('port', process.env.PORT || port)
app.use(express.static('frontend'));
app.use(routes);

var server = http.createServer(app);

server.listen(port);