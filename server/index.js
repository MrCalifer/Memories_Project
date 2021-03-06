import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extented: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extented: true }));
app.use(cors());

app.get('/',(req , res) => {
  res.send('APP IS RUNNING');
});

app.use("/posts", postRoutes);
app.use("/user" , userRoutes);

const CONNECTION_URL = 'mongodb+srv://mr_califer:Rajat1234@cluster0.pxivs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//Setting PORT
const PORT = process.env.PORT || 5000;

//Creating connection between server and Database(MongoDB)
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Serving running on port : ${PORT}`))
  )
  .catch((error) => console.log(error.message));
