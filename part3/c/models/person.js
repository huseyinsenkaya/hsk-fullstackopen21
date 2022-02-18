const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const url = process.env.MONGODB_URI;

mongoose
  .connect(url)
  .then((result) => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log("Connection Failure");
  });

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    unique: true,
    required: [true, "Name required"],
  },
  number: {
    type: String,
    minlength: 8,
    maxlength: 16,
    required: true,
    validate: {
      validator: function (v) {
        //09-1234556 and 040-22334455 are valid phone numbers
        return /\d{2,3}-\d*/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
});

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

personSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Person", personSchema);
