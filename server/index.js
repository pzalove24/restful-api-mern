import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoute from "./routes/todoRoutes.js";

// configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// route
app.use("/todo", todoRoute);

// mongoose connection
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
