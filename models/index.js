const User = require("./User");

const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thoughts-routes");
const router = require("../routes");

router.use("/api/users", userRoutes);
router.use("/api/thoughts", thoughtRoutes);

module.exports = router;
