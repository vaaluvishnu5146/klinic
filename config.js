const USERS = {
    PATIENT: "patient",
    ATTENDER: 'attender',
    RECEPTIONIST: 'receptionist',
    MANAGER: 'manager',
    DOCTOR: 'doctor'
};

const GENDER  = {
    MALE: 'male',
    FEMALE: 'female'
};


const OUT_USER = [
    USERS.PATIENT,
    USERS.ATTENDER
];

const SYSTEM_USERS = [
    USERS.RECEPTIONIST,
    USERS.MANAGER,
    USERS.DOCTOR
]

module.exports = {
    USERS,
    OUT_USER,
    SYSTEM_USERS,
    GENDER
};