const USERS = {
    PATIENT: "patient",
    ATTENDER: 'attender',
    RECEPTIONIST: 'receptionist',
    MANAGER: 'manager',
    DOCTOR: 'doctor',
    PHARMACIST: 'pharmacist'
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

const PRESCRIPTION_PROVIDERS = [
    USERS.DOCTOR,
    USERS.MANAGER,
    USERS.PHARMACIST
];

module.exports = {
    USERS,
    OUT_USER,
    SYSTEM_USERS,
    GENDER,
    PRESCRIPTION_PROVIDERS
};