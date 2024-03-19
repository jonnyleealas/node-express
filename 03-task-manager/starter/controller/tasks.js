const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const createTask = async (req, res) => {
    try {
        const tasks = await Task.create(req.body)
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({error})
    }
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