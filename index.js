import express from "express";
import bodyParser from "body-parser";
import mustacheExpress from "mustache-express";
import routes from "./src/routes/index.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "public")));
app.engine("html", mustacheExpress());
app.set("view engine", "hyml");
app.set("views", `${__dirname}/src/views`);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

export default app;
