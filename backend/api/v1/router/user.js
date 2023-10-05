const router = require("express").Router();
const controllers = require("../controllers/user");

router.post("/", controllers.createSingleUser);
router.get("/", controllers.fetchAllUsers);

module.exports = router;
