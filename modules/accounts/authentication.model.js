const m = require('mongoose');
const { USERS, GENDER } = require('../../config');

const address = m.Schema({
    addressLine1: { type: String, required: false },
    addressLine2: { type: String, required: false },
    town: { type: String, required: false },
    city: { type: String, required: false },
    state: { type: String, required: false },
    country: { type: String, required: false },
    pincode: { type: Number, required: false }
});

const AccountSchema = m.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    contactnumber: { type: String, required: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true },
    bloodgroup: { type: String, required: true },
    gender: { type: String, required: true, enum: [GENDER.MALE, GENDER.FEMALE] },
    address: {
        type: [address],
        default: []
    },
    role: { type: String, enum: [ USERS.ATTENDER, USERS.DOCTOR, USERS.MANAGER, USERS.PATIENT, USERS.RECEPTIONIST ], default: USERS.PATIENT  }
}, { timestamps: true });

const AccountModel = m.model('accounts', AccountSchema);

module.exports = AccountModel;