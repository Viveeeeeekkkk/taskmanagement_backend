const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, 
      trim: true,     
      maxlength: 100, 
    },
    description: {
      type: String,
      required: true, 
      trim: true,    
      maxlength: 500, 
    },
  },
  {
    timestamps: true, 
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
