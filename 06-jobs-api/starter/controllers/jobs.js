
const getAllJobs = async (req, res) => {
    res.send('get all jobs')
}

const getJob = async (req, res) => {
    res.send('get Job')
}

const createJob = async (req, res) => {
    res.json(req.user)
}

const updateJob = async (req, res) => {
    res.send('updateJob')
}

const deleteJob = async (req, res) => {
    res.send('delete Job')
}


module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
}
