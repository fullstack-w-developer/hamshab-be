import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"; //require dotenv package
import router from "./routes/index.js";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

dotenv.config({ path: "./config.env" }); //import config.env file
// config
const port = process.env.PORT || 8080;

// midalware
app.use(cors());
app.use(express.static("uploads"));
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));

// conect mongo db
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("connect db");
  })
  .catch((er) => {
    console.log(er);
  });

// routes
app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
