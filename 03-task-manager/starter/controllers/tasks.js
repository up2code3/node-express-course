const Task = require("../models/tasks");
const asyncWrapper = require("../Middleware/async");
const { createCustomError } = require("../errors/customError");

const getAllTask = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res
    .status(200)
    .json({ status: "success", data: { tasks, nbHits: tasks.length } });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
 
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const tasks = await Task.findOneAndDelete({ _id: taskID });
  if (!tasks) {
    return next(createCustomError(`no task with ${taskID} exist`, 404));
  }
  res.status(200).json({ msg: `${tasks.name}has been deteled` });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const tasks = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!tasks) {
    return next(createCustomError(`no task with ${taskID} exist`, 404));
  }

  res.status(200).json({ tasks });
});

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
