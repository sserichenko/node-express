let {people} = require("../data");

const getPeople = (req, res) => {
  return res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please, provide name value!" });
  }
  return res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please, provide name value!" });
  }
  return res.status(201).json({ success: true, data: [...people] });
};

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `There is no person with id - ${id}` });
    }
    const newPeople = people.map((person) =>
      person.id === Number(id) ? { ...person, name: name } : person
    );
    res.status(200).json({ success: true, data: [...newPeople] });
  }

  const deletePerson = (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `There is no person with id - ${id}` });
    }
    const updatedPeople = people.filter((person) => person.id !== Number(id));
    res.status(200).json({ success: true, data: [...updatedPeople] });
  }

  module.exports = { getPeople, createPerson, createPersonPostman, deletePerson, updatePerson }
