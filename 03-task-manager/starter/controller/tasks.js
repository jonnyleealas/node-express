const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find({})
        // res.status(200).json({task, amount:tasks.length})
        res.status(200).json({succuss:true, data:{tasks}})
    } catch (err) {
        res.status(500).json({msg:err})
    }
}

const createTask = async (req, res) => {
    try {
        const tasks = await Task.create(req.body)
        res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json({msg:error})
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

const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!task) {
            return res.status(404).json({msg: `did not find task with ID: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).send({msg: error})
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task) {
            return res.status(404).json({msg: `no task with ID:${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).send({msg: error})

    }
}
module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}