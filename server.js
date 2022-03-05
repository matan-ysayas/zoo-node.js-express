require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
require('./DB');
const port=process.env.PORT;
const employeeRouter=require('./routes/employee-router');
const animalRoute=require('./routes/animal-route');


app.use('/employee',employeeRouter);
app.use('/animal',animalRoute);
app.get('/',(req,res)=>{
    res.send({ msg: "server online" })
})

app.listen(port);

