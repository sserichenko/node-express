const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  createPersonPostman,
  deletePerson,
  updatePerson,
} = require("../controllers/people");

let { people } = require("../data");

router.get("/", getPeople);

router.post("/", createPerson);

router.post("/postman", createPersonPostman);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

// YOU ALSO CAN USE

// router.route("/").get(getPeople).post(createPerson)
// router.route("/:id").put(updatePerson).delete(deletePerson)
// router.route("/postman").post(createPersonPostman)

module.exports = router;
