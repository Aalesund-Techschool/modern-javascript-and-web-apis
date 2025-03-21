import express from "express";
import http from "http";
import routes from "./backend/routes.js";

const app = express();
const port = 3000;

app.set("port", process.env.PORT || port);
app.use(express.static("frontend"));
app.use(routes);

const server = http.createServer(app);

server.listen(port);
console.log(`🔌 Server is running on http://localhost:${port}`);
