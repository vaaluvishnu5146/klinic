const AppointmentModel = require("./appointment.model");

async function createAppointment(req, res, next) {
    const Appointment = new AppointmentModel(req.body);
    try {
        const response = await AppointmentModel.find({ token: req.body.token, appointmentDate: req.body.appointmentDate });
        if(response.length > 0) {
            return res.status(200).json({
                success: false,
                message: "Token already exists"
            });
        }
    } catch (error) {
        console.log(error);
    }
    Appointment.save().then((response) => {
        if(response && response._id) {
            return res.status(200).json({
                success: true,
                message: "Appointment creation successful",
                result: response
            })
        } else {
            return res.status(400).json({
                success: false,
                message: "Somethng went wrong",
            })
        }
    }).catch((error) => {
        return res.status(500).json({
            success: false,
            message: "Appointment creation failed",
            error: error?.message
        })
    });
}

async function getAllAppointments(req, res, next) {
    AppointmentModel.find().then((response) => {
        if(response && response.length > 0) {
            return res.status(200).json({
                success: true,
                message: "Appointment fetched successfully",
                result: response
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "No Appointments found",
                result: []
            })
        }
    }).catch((error) => {
        return res.status(200).json({
            success: false,
            message: "Something went wrong",
            error
        })
    });
}

module.exports = {
    createAppointment,
    getAllAppointments
};