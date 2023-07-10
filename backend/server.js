const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


//MONGOOSE CONNECTION

// const uri = "mongodb://127.0.0.1:27017/userDB";
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("MongoDB is Connected");
})

const exerciseRouter = require('./Routes/exerciseRoute');
const userRouter = require('./Routes/userRoute');

app.use("/exercises",exerciseRouter);
app.use("/users",userRouter);



app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
});