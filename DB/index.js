const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected to mongoDB..."))
  .catch(err => console.error("could not connect to mongo DB...", err));

  module.exports=mongoose.connection;