import express from "express";
import UserModel from "./user.model.js";
import {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} from "./user.controller.js";

const router = express.Router();

router.post("/", createUser);

router.get("/", getUsers);

router.get("/:id", getUserById);

router.put("/:id", updateUserById);

router.delete("/:id", deleteUserById);

export default router;
