const getAllTasks = (req, res) => {
    res.send('all items')
}

const createTask = (req, res) => {
    res.json(req.body)
}
const getTask = (req, res) => {
    res.send('get single task')
}
const updateTask = (req, res) => {
    res.send('updating task')
}

const deleteTask = (req, res) => {
    res.send('deleting task')
}
module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
}