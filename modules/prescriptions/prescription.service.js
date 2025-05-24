const { default: mongoose } = require("mongoose");
const PrescriptionModel = require("./prescription.model");


async function getPrescriptionById(req, res, next) {
    try {
        const { id } = req.params

        // Check for prescription id
        if(!id) {
            // send error message to user
            return res.status(400).json({
                message: "Prescription id is missing",
                success: false
            })
        }

        const response = await PrescriptionModel.find({ _id: new mongoose.Types.ObjectId(id) });

        if(response.length < 1) {
            // send message to user saying prescription not found
            return res.status(400).json({
                message: "Prescription is not found",
                success: false,
                data: []
            })
        } else {
            // send response to user saying prescription found
            return res.status(200).json({
                message: "Prescription fetched successfully",
                success: true,
                data: response
            })
        }


    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Sonething went wrong"
        })
    }
}

async function getPrescriptionByUserId(req, res, next) {
    try {
        const { userId } = req.params

        // Check for prescription id
        if(!userId) {
            // send error message to user
            return res.status(400).json({
                message: "UserId is missing",
                success: false
            })
        }

        const response = await PrescriptionModel.find({ user: new mongoose.Types.ObjectId(userId) });

        if(response.length < 1) {
            // send message to user saying prescription not found
            return res.status(400).json({
                message: "Prescription is not found",
                success: false,
                data: []
            })
        } else {
            // send response to user saying prescription found
            return res.status(400).json({
                message: "Prescription fetched successfully",
                success: true,
                data: response
            })
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Sonething went wrong"
        })
    }
}

async function createPrescription(req, res, next) {
    try {
        const prescription = new PrescriptionModel(req.body);
        const response = await prescription.save();

        if(response && response._id) {
            // return success
            return res.status(201).json({
                success: true,
                message: "Prescription created successfully"
            });
        } else {
            // return failure
            return res.status(400).json({
                success: false,
                message: "Prescription creation failed"
            });
        }

    } catch (error) {
        // Handle any issue here
        // return failure
        return res.status(500).json({
            success: false,
            message: "Sonething went wrong",
            error: error.message
        });
    }
}

module.exports = {
    getPrescriptionById,
    getPrescriptionByUserId,
    createPrescription
}