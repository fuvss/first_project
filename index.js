import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./api/user.routes.js";
import UserModel from "./api/user.model.js"; // Import User model

dotenv.config();

const startServer = async () => {
  const App = express();
  App.use(express.json());

  try {
    await mongoose.connect(process.env.MONGODBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    App.get("/", (req, res) => {
      res.send("HELLOO");
    });

    App.use("/users", router);

    const port = process.env.PORT || 5000;
    App.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};

startServer();
