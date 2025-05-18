const { default: mongoose } = require("mongoose");

const connectionString = `mongodb://localhost:27017/klinic`

async function connectToDB() {
    try {
        await mongoose.connect(connectionString)
        console.log("DB Connection successfull")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    connectToDB
};