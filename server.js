import http from "http";
import app from "./index.js";

const server = http.createServer(app);

server.listen(3000, () => console.log(`App running`));
