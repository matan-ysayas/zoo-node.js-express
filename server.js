require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
require('./DB');
const port=process.env.PORT;

const animalRoute=require('./routes/animal-route');



app.get('/',(req,res)=>{
    res.send({ msg: "server online" })
})

app.listen(port);

app.use('/animal',animalRoute);