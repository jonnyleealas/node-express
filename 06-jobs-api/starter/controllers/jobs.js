const Job = require('../models/Job')
const {StatusCodes} = require('http-status-codes')
const {BadRequesError, NotFoundError} = require('../errors/index')

const getAllJobs = async (req, res) => {
    const jobs = await Job.find({createdBy:req.user.userId}).sort('createAt')
    res.status(StatusCodes.OK).json({jobs, count:jobs.length})
    
}

const getJob = async (req, res) => {
    res.send('get Job')
}

const createJob = async (req, res) => {
    console.log(req.user, "request user")
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
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
