const Task = require("../models/Task");
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-errors')
// app.get('/api/v1/tasks')

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

// app.post('/api/v1/tasks')
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// app.get('/api/v1/tasks/:id')
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`${taskID} not found`, 404))
  }
  res.status(200).json({ task });
});

// app.delete('/api/v1/tasks/:id')
const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`${taskID} not found`, 404))
  }
  res.status(200).json({ task, msg: `${taskID} has been deleted` });
});

// app.patch('/api/v1/tasks/:id')
const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  }); 
  if (!task) {
    return next(createCustomError(`${taskID} not found`, 404))
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
