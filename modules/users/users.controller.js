const { createAUser } = require("./user.service");

const UserRouter = require("express").Router();

// Creating a user
UserRouter.post("/create", createAUser)

// Get all User

// Get a user

// Update a user

// Delete a user

module.exports = UserRouter;