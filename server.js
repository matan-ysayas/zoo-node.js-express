require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
require('./DB');
const path=require('path');
const port=process.env.PORT;
const employeeRouter=require('./routes/employee-router');
const animalRoute=require('./routes/animal-route');
const userRouter=require('./routes/user-route');
const passport = require('passport');
require('./config/passport')(passport);
app.use(passport.initialize());

app.use('/employee',passport.authenticate("jwt", { session: false }), employeeRouter);
app.use('/animal',passport.authenticate("jwt", { session: false }),animalRoute);
app.use('/auth',userRouter)
app.get('/',(req,res)=>{
    res.send({ msg: "server online" })
})

app.listen(port);

if (process.env.NODE_ENV === "production") {
    app.use(
      express.static(path.join(__dirname, "../client-app/build")),
      app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client-app/build", "index"));
      })
    );
  }
  