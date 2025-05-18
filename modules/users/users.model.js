const { default: mongoose } = require("mongoose");
const { GENDER } = require("../../config");

const UserSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: false },
    dob: { type: Date, required: true },
    bloodgroup: { type: String, required: true },
    gender: { type: String, required: true, enum: [GENDER.MALE, GENDER.FEMALE] },
    address: {
        addressLine1: { type: String, required: true },
        addressLine2: {type: String, required: false},
        town: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pincode: {type: Number, required: true}
    },
    role: { type: String, enum: ['customer', 'receptionist', 'manager', 'doctor'], default: "customer" },
}, { timestamp: true });

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;