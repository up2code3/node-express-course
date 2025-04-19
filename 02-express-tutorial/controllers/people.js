let { people } = require("../data");
//get all people
const getPeople = (req, res) => {
    console.log("data");
    res.status(200).json({ success: true, data: people });
  };
  
//add person
const addPeople = (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, msg: "please provide name" });
    }
    people.push({id: people.length + 1, name: req.body.name})
    res.status(201).json({ success: true, name: req.body.name });
  };
  
//edit person
const editPeople = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    const person = people.find((person) => person.id === Number(id));
  
    if (!person) {
      return res
        .status(400)
        .json({ success: false, msg: `${id}does not exsist` });
    }
  
    const newPerson = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    res.status(200).json({ success: true, data: newPerson });
  };

 //delete person
const deletePeople = (req, res) => {
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
      return res
        .status(400)
        .json({ success: false, msg: `${req.params.id}does not exsist` });
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    );
    return res.status(200).json({ success: true, data: newPeople });
  };

  module.exports = {
    getPeople,
    addPeople,
    editPeople,
    deletePeople
  }
  