require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send({ msg: "server online" })
})
app.listen(8800);