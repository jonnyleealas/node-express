const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try{
        const task = await Task.find({})
        res.status(201).json({task})
    } catch (err) {
        res.status(500).json({msg:error})
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

const getTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
         
         if(!task){
            return res.status(404).json({msg: `no task with ID:${taskID}`})
         }
         res.status(200).json({task})
    } catch (error) {
        res.status(500).send({msg: error})
    }

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