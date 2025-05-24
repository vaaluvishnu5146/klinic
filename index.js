const express = require("express");
const server = express();
const cors = require("cors");
const { connectToDB } = require("./db");
const AppointmentRouter = require("./modules/appointments/appointment.controller");
const AuthenticationRouter = require("./modules/accounts/authentication.controller");
const PrescriptionRouter = require("./modules/prescriptions/prescription.controller");
const { checkUserIsSystemUser, checkTokenValid } = require("./middlewares/AuthMiddleware");

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerOptions = require("./swaggeroptions");

const server_config = {
    port: 3000,
    hostname: "localhost"
};

// Enable Body-Parser
server.use(express.json());

// Enable CORS
server.use(cors())

// Initiate DB Connection
connectToDB();

// Enable swagger
const swaggerSpec = swaggerJsdoc(swaggerOptions);

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Inject Controllers
server.use('/v1/account', AuthenticationRouter);
server.use('/v1/appointment', checkTokenValid, checkUserIsSystemUser, AppointmentRouter);
server.use('/v1/prescription', PrescriptionRouter);


server.listen(server_config.port, server_config.hostname, (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log(`Server started @: http://${server_config.hostname}:${server_config.port}/`)
    }
});