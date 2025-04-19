const express = require("express");
const router = express.Router();

const {
  getPeople,
  addPeople,
  editPeople,
  deletePeople,
} = require("../controllers/people");


router.route('/').get(getPeople).post(addPeople)
router.route('/:id').put(editPeople).delete(deletePeople)


module.exports = router;
