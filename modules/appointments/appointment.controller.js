const { createAppointment, getAllAppointments } = require("./appointment.service");

const AppointmentRouter = require("express").Router();

// Creating a Appointment
AppointmentRouter.post("/create", createAppointment)

// Get all Appointment
AppointmentRouter.get("/list", getAllAppointments)

// Get a Appointment

// Update a Appointment

// Delete a Appointment

module.exports = AppointmentRouter;