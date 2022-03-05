const mongoose = require("mongoose");
const schema = mongoose.Schema;

const User = new schema(
  {
 userName: { type: String, required: true },
    email: { type: String, required: true,unique: true},
    password: { type: String, required: true}
 
  },
  { timestamps: true }
);
module.exports=mongoose.model('User',User)


