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

// Search user
router.get("/users/:user", (req, res) => {
    const { user } = req.params;
    userSchema
        .find({ user: user })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Check credentias of an user
router.get("/users/v/:user", (req, res) => {
    const { user } = req.params;
    console.log(user);
    userSchema
        .find({ password: user })
        .then((data) => res.json(data + ' verified.'))
        .catch((error) => res.json('Invalid credentials.'));
});

// Update user
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { user, password } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { user, password } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Delete user
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    const { key } = req.body;
    if (key == adminKey) {
        userSchema
            .remove({ _id: id })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    } else {
        res.send("Invalid key");
    }
});

module.exports = router;