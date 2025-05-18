const express = require("express");
const server = express();
const cors = require("cors");
const { connectToDB } = require("./db");
const UserRouter = require("./modules/users/users.controller");
const AppointmentRouter = require("./modules/appointments/appointment.controller");
const AuthenticationRouter = require("./modules/accounts/authentication.controller");
const { checkUserIsSystemUser, checkTokenValid } = require("./middlewares/AuthMiddleware");

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

// Inject Controllers
server.use('/v1/account', AuthenticationRouter);
server.use('/v1/appointment', checkTokenValid, checkUserIsSystemUser, AppointmentRouter);


server.listen(server_config.port, server_config.hostname, (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log(`Server started @: http://${server_config.hostname}:${server_config.port}/`)
    }
})