const Task = require('../model/taskmodel');

const get_tasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const create_task = async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });

  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const update_task = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description },
      { new: true, runValidators: true } 
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const delete_task = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully", task: deletedTask });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { get_tasks, create_task, update_task, delete_task };
