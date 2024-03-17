const getAllTasks = (req, res) => {
    res.json(req.body)
}

const createTask = (req, res) => {
    res.json(req.body)
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