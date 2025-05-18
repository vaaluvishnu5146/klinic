const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema({
    token: { type: Number, required: true },
    user: { type: mongoose.Types.ObjectId, required: true },
    doctor: { type: mongoose.Types.ObjectId, required: true },
    problemStatement: { type: String, required: true },
    prescription: { type: mongoose.Types.ObjectId, required: false },
    doctorReport: { type: String, required: false },
    isConsulted: { type: Boolean, default: false },
    isAppointmentClosed: { type: Boolean, default: false },
    createdBy: { type: mongoose.Types.ObjectId, required: true },
    appointmentDate: { type: String, required: true }
}, { timestamps: true });

const AppointmentModel = mongoose.model("appointment", AppointmentSchema);

module.exports = AppointmentModel;