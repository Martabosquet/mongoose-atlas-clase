import 'dotenv/config'; //sino tmbién se podría hacer import dotenv from 'dotenv'; dotenv.config();
import express from "express";
const app = express();
import { dbConnection } from "./config/config.js";
import routes from "./routes/index.js";

const PORT = process.env.PORT;

app.use(express.json());

app.use('/', routes);

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));