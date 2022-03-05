const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Animal = new schema({
  name: { String, required: true },
  dateOfBirth: { String, required: true },
  cageNumber: { Number, required: true },
  gender: { String, required: true },
  type: { String, require: true },
},
{ timestamps: true }
);

module.exports = mongoose.model("Animal", Animal);
