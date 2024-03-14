let {people} = require('../fakeData')

const getPerson = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

const createPerson = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res
            .status(400)
            .json({ success: false, msg: "please provide credentials" })
    }

    res.status(201).send({ success: true, data: [...people, name] })
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
    console.log(id, name)
    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `person with id ${id} does not exist` })
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople })

}

const deletePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: "user delete" })
    }

    const newPeople = people.filter((person) => person.id !== Number(id))
    return res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
    getPerson,
    createPerson,
    updatePerson,
    deletePerson,
}