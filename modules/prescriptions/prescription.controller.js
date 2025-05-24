const { checkUserIsSystemUser, checkTokenValid } = require('../../middlewares/AuthMiddleware');
const { getPrescriptionById, getPrescriptionByUserId, createPrescription } = require('./prescription.service');

const PrescriptionRouter = require('express').Router();

/**
 * @openapi
 * /v1/prescription/byId/{id}:
 *   get:
 *     summary: Get a prescription by id.
 *     description: Retrieve a Returns a JSON of prescription using this API.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ObjectId of prescription.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A Prescription of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: Object
 *                   items:
 *                     user: String
 *                     doctor: String
 *                     item: Array
 */
// Get a prescription by id
PrescriptionRouter.get('/byId/:id', getPrescriptionById)

// Get a prescription by userId
PrescriptionRouter.get('/byUserId/:userId', checkTokenValid, getPrescriptionByUserId)

// Create a prescription
PrescriptionRouter.post('/create', checkTokenValid, checkUserIsSystemUser, createPrescription)


module.exports = PrescriptionRouter;