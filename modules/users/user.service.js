const UserModel = require("./users.model");

function createAUser(req, res, next) {
    const User = new UserModel(req.body);

    User.save().then((response) => {
        if(response && response._id) {
            return res.status(200).json({
                success: true,
                message: "User creation successful",
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
            message: "User creation failed",
            error: error?.message
        })
    });
}

module.exports = {
    createAUser
};