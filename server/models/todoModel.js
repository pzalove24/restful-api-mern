import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    people: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", TodoSchema);
export default Todo;
