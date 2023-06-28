const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const cors = require('cors');
app.use(cors())
const con=mongoose.connection




mongoose
.connect('mongodb+srv://Deekshitha:Deeksha2001@finalproject.6emlaka.mongodb.net/resume?retryWrites=true&w=majority',
{useNewUrlParser: true,
useUnifiedTopology:true,
useCreateIndex: true },
)
.then(()=>{
    app.listen(5000);
    console.log('Connected to DB');
})
.catch(err=>{
    console.log(err)
});
con.on('open',()=>{
    console.log("connected...")
});



app.use(express.json())
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);
const pinfoRouter=require("./routes/auth")
app.use('/apps',pinfoRouter)
const ainfoRouter=require("./routes/academic")
app.use('/academic',ainfoRouter)

