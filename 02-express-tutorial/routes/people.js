const express = require("express");
const router = express.Router();
const { products,people } = require("../data")
const {addPerson,getPeople,findPeople,updatePeople,deletePeople} = require("../controllers/people.js");

router.get('/', getPeople);
router.post('/', addPerson)
router.get('/:id', findPeople)
router.put('/:id', updatePeople)
router.delete('/:id', deletePeople) 

module.exports = router