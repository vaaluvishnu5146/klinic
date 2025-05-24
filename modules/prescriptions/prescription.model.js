const { default: mongoose } = require("mongoose");

const PrescribedItem = mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true }
})

const PrescriptionSchema = mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, required: true },
    doctor: { type: mongoose.Types.ObjectId, required: true },
    appointment: { type: mongoose.Types.ObjectId, required: true },
    items: {
        type: [PrescribedItem],
        validate: {
            validator: function (value) {
                console.log("Here", value)
              return value.length < 1 ? false : true;
            },
            message: 'Prescription length should be greater than 0',
          },
    }
}, { timestamp: true });

const PrescriptionModel = mongoose.model("prescription", PrescriptionSchema);

module.exports = PrescriptionModel;