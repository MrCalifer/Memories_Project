import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extented: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extented: true }));
app.use(cors());

app.use("/", postRoutes);

//Setting PORT
const PORT = process.env.PORT;

//Creating connection between server and Database(MongoDB)
mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Serving running on port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));
