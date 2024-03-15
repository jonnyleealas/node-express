const getAllTasks = (req, res) => {
    res.send('all items')
}

const createTask = (req, res) => {
    res.json(req.body)
}
const getTask = (req, res) => {
    res.json({id:req.params.id})
}
const updateTask = (req, res) => {
    res.json({id:req.params.id})
}

const deleteTask = ({id:req, res}) => {
    res.json(req.body)
}
module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}