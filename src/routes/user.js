const express = require("express");
const userSchema = require("../schema/user");
const adminKey = 8888;  // Admin identification token

const router = express.Router();

// Create new user
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Get users
router.get("/users", (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Update user
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { user, password } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { user, password }})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Delete user
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    const { key } = req.body;
    if (key == adminKey ){
        userSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
    } else {
        res.send("Invalid key");
    }
});

module.exports = router;