import express from "express";
import {
  getTodos,
  getTodo,
  putTodo,
  postTodo,
  deleteTodo,
} from "../controllers/todoControllers.js";

const router = express.Router();

router.get("/gets", getTodos);
router.get("/get/:id", getTodo);
router.post("/post", postTodo);
router.put("/put", putTodo);
router.delete("/delete/:id", deleteTodo);

export default router;
