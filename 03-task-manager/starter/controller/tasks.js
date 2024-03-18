const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    res.send('get all tasks')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = (req, res) => {
    res.json({id:req.params.id})
    console.log(req.params)
}
const updateTask = (req, res) => {
    res.send("update task")
}

const deleteTask = ({id:req, res}) => {
    res.json( req.body)
}
module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}