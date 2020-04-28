const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUser,
    addUser,
    deleteUser,
} = require("../controllers/users");

router.route("/").get(getUsers).post(addUser);

router.route("/:id").delete(deleteUser);

module.exports = router;
