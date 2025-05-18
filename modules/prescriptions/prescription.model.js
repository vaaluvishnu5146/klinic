const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");

const PrescriptionSchema = mongoose.Schema({
    user: { type: new mongoose.Types.ObjectId, required: true },
    doctor: { type: new mongoose.Types.ObjectId, required: true },
    items: {
        type: Array,
        required: true
    }
}, { timestamp: true });

const PrescriptionModel = mongoose.model("prescription", PrescriptionSchema);

module.exports = PrescriptionModel;