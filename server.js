import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/DbConfig.js";
import mongoose from "mongoose";
import router from "./Routes/RoutesEmp.js";
import CommonEnv from "./common/Commonenv.js";
const app = express();
dotenv.config();
//JSON

app.use(express.json());
app.use(express.urlencoded());

///----load Routes---//
app.use("/api/user", router);

const corsoption = {
  origin: CommonEnv.corsOrigin,
  method: ["post", "get"],
  credentials: false,
};

//cors policy
app.use(cors(corsoption));

const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL;
///database connection
// connectDb(CommonEnv.DATABASE_URL);
mongoose
  .connect(DATABASE_URL)
  .then((res) => console.log(`connected database `))
  .catch((err) => console.log(err));

app.get("/user", (req, res) => {
  res.send({ message: "success" });
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
