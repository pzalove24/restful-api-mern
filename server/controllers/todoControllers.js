import express from "express";
import Todo from "../models/todoModel.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTodo = async (req, res) => {
  try {
    if (!req?.params?.id)
      return res.status(400).json({ message: "todo ID is required" });
    const todo = await Todo.findById({ _id: req.params.id });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const putTodo = async (req, res) => {
  //update
  try {
    if (!req?.body?.id)
      return res.status(400).json({ message: "todo ID is required" });

    const todo = await Todo.findById({ _id: req.body.id });

    if (req.body?.todo) todo.todo = req.body.todo;
    if (req.body?.people) todo.people = req.body.people;

    const result = await todo.save();

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const postTodo = async (req, res) => {
  //create
  try {
    if (!req?.body?.todo || !req?.body?.people) {
      return res.status(400).json({ message: "todo and people is required" });
    }
    const result = await Todo.create({
      todo: req.body.todo,
      people: req.body.people,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    if (!req?.params?.id)
      return res.status(400).json({ message: "todo ID is required" });

    const todo = await Todo.findById({ _id: req.params.id });

    if (!todo) {
      return res
        .status(204)
        .json({ message: `No todo matches ID ${req.params.id}.` });
    }

    const result = await todo.deleteOne({_id: req.params.id})
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
