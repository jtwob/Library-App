const router = require("express").Router();
const { route } = require("express/lib/application");
const {
  getAll,
  getOneById,
  getOne,
  updateOne,
  postOne,
  deleteOne,
} = require("../controllers/bookController");

router.get("/", getAll);
router.get("/:id", getOne);
router.get("/id/:id", getOneById);
router.put("/:id", updateOne);
router.post("/", postOne);
router.delete("/:id", deleteOne);

module.exports = router;
