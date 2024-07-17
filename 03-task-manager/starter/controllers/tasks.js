const Task = require('../models/Task')

// app.get('/api/v1/tasks')
const getAllTasks = (req,res) => {
    res.send('get all tasks')
}

// app.post('/api/v1/tasks')
const createTask = async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

// app.get('/api/v1/tasks/:id')
const getTask = (req,res) => {
    res.json({id: req.params.id})
}

// app.patch('/api/v1/tasks/:id')
const updateTask = (req,res) => {
    res.send('updating tasks')
}

// app.delete('/api/v1/tasks/:id')
const deleteTask = (req,res) => {
    res.send('deleting tasks')
}

module.exports = { 
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}