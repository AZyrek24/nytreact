const router = require("express").Router();
const articleRoutes = require("./api-routes");

// Article routes
router.use("/articles", articleRoutes);

module.exports = router;
